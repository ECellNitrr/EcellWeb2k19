from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import utc
import datetime

class CustomUser(AbstractUser):

    USER_TYPE = (
        ('GST', 'Guest'),
        ('VLT', 'Voluteer'),
        ('EXE', 'Executive'),
        ('MNG', 'Manager'),
        ('HCO', 'Head Co-ordinator'),
        ('OCO', 'Overall Co-ordinator'),
        ('CAB', 'Campus Ambassador'),
        ('STO', 'Startup Owner'),
        ('DRT', 'Director'),
        ('CDC', 'CDC Admin'),
        ('FAC', 'Faculty'),
    )

    username = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=64, unique=True)
    otp = models.CharField(max_length=4, blank=True, null=True)
    verified = models.BooleanField(default=False)
    contact = models.CharField(max_length=10)
    
    #Score for Bquiz
    bquiz_score = models.IntegerField(default=0)
    # Scores for Campus Ambassadors
    ca_score = models.IntegerField(default=0)       #Total Score
    ca_fb_score = models.IntegerField(default=0)    #Facebook Score
    ca_tw_score = models.IntegerField(default=0)    #Twitter Score
    ca_li_score = models.IntegerField(default=0)    #LinkedIn Score
    ca_wp_score = models.IntegerField(default=0)    #Whatsapp Score

    avatar = models.ImageField(upload_to='static/uploads/avatar',
                               null=True, blank=True)
    applied = models.BooleanField(default=False)
    user_type = models.CharField(max_length=3, choices=USER_TYPE,
                                 default='GST')
    linkedin = models.URLField(max_length=64, null=True, blank=True)
    facebook = models.URLField(max_length=64, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True, editable=False)
    modified_at = models.DateTimeField(auto_now_add=True, editable=False)
    
    @property
    def last_modified(self):
        if self.modified_at:
            now =datetime.datetime.utcnow().replace(tzinfo=utc)
            timediff = now - self.modified_at
            return timediff.total_seconds()


    def save(self, *args, **kwargs):
        self.username = self.email
        super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "ECellUser"
        verbose_name_plural = "ECellUsers"


class CampusAmbassadorProfile(models.Model):

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE,
                                related_name='campus_ambassador_profile')
    college = models.CharField(max_length=128, null=False, blank=False)
    total_score = models.PositiveIntegerField(default=0)  # Total Score
    fb_score = models.PositiveIntegerField(default=0)  # Facebook Score
    tw_score = models.PositiveIntegerField(default=0)  # Twitter Score
    li_score = models.PositiveIntegerField(default=0)  # LinkedIn Score
    wp_score = models.PositiveIntegerField(default=0)  # Whatsapp Score

    @property
    def total_score(self):
        "Returns the total"
        return self.fb_score + self.tw_score + self.li_score + self.wp_score

    def save(self, *args, **kwargs):
        self.user.user_type = 'CAB'
        self.user.save()
        super(CampusAmbassadorProfile, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.user)
