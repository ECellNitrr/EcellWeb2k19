from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    
    USER_TYPE = (
        ('GST', 'Guest'),
        ('VLT', 'Voluteer'),
        ('EXE', 'Executive'),
        ('MNG', 'Manager'),
        ('HCO', 'Head Co-ordinator'),
        ('OCO', 'Overall Co-ordinator'),
        ('CAB', 'Campus Ambassador'),
    )

    username    = models.CharField(max_length=32, unique=True)
    first_name  = models.CharField(max_length=100)
    last_name   = models.CharField(max_length=100)
    email       = models.EmailField(max_length=64, unique=True)
    otp         = models.CharField(max_length=4, blank=True, null=True)
    verified    = models.BooleanField(default=False)
    contact     = models.CharField(max_length=10)
    bquiz_score = models.IntegerField(default=0)
    avatar      = models.ImageField(upload_to='static/uploads/avatar',
                                    null=True, blank=True)
    user_type   = models.CharField(max_length = 3,choices=USER_TYPE,
                                    default='GST')
    linkedin    = models.URLField(max_length=64, null=True, blank=True)
    facebook    = models.URLField(max_length=64, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        self.username = self.email
        super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "ECellUser"
        verbose_name_plural = "ECellUsers"

class CampusAmbassadorProfile(models.Model):

    user        = models.OneToOneField(CustomUser, on_delete=models.CASCADE,
                                related_name='campus_ambassador_profile')
    college     = models.CharField(max_length=128, null=False, blank=False)
    random      = models.CharField(max_length=10)
    # Scores for Campus Ambassadors
    total_score = models.PositiveIntegerField(default=0)        #Total Score
    fb_score    = models.PositiveIntegerField(default=0)        #Facebook Score
    tw_score    = models.PositiveIntegerField(default=0)        #Twitter Score
    li_score    = models.PositiveIntegerField(default=0)        #LinkedIn Score
    wp_score    = models.PositiveIntegerField(default=0)        #Whatsapp Score
    
    @property
    def total_score(self):
       "Returns the total"
       return self.fb_score + self.tw_score + self.li_score + self.wp_score
    
    def save(self,*args,**kwargs):
        self.user.user_type = 'CAB'
        self.user.save()
        super(CampusAmbassadorProfile, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.user)