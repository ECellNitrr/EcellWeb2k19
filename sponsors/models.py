from django.db import models
from users.models import CustomUser


class Sponsor(models.Model):
    SPONS_TYPE = (
        ('AS', 'Associate Sponsors'),
        ('PLTS', 'Platinum Sponsors'),
        ('GS', 'Gold Sponsors'),
        ('TS', 'Title Sponsors'),
        ('PRTS', 'Partner Sponsors'),
    )

    name = models.CharField(max_length=256, unique=True)
    details = models.TextField()
    pic = models.ImageField(
        upload_to='static/uploads/sponsors',
        null=True,
        blank=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    spons_type = models.CharField(
        max_length=4,
        choices=SPONS_TYPE,
        default='AS')
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    ecell_user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    # def url(self):
    # return self.url
