from django.db import models
from users.models import CustomUser
from decouple import config

class Mentor(models.Model):
    name = models.CharField(max_length=200, unique=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    email = models.CharField(max_length=256)
    detail = models.TextField()
    description = models.TextField(null=True, blank=True)
    profile_pic = models.ImageField(
        upload_to='static/uploads/mentors',
        null=True,
        blank=True)
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    ecell_user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name
    @property
    def profile_pic_url(self):
        if self.profile_pic:
            return config('HOST')+self.profile_pic.url
        else:
            return "-"
        
