from django.db import models
from django.utils.timezone import utc
import datetime
from decouple import config
# Create your models here.


class Investor(models.Model):
    name = models.CharField(max_length=256)
    company = models.CharField(max_length=256)
    experience = models.IntegerField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='static/uploads/investors', null=True, blank=True)
    email = models.EmailField()
    contact = models.TextField(max_length=13, null=True, blank=True)
    description = models.TextField(default='none', null=True, blank=True)
    year = models.IntegerField(default=2019)
    social_media = models.URLField()
    flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    @property
    def profile_pic_url(self):
        if self.profile_pic:
            return config('HOST')+self.profile_pic.url
        else:
            return "-"

    def __str__(self):
        return self.name
