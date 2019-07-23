from django.db import models
from users.models import CustomUser
from decouple import config

class Startup(models.Model):
    name = models.CharField(max_length=200, unique=True)
    email = models.EmailField(max_length=256, null=True, blank=True)
    pic = models.ImageField(upload_to='static/uploads/startups',null=True,blank=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    url = models.URLField(null=False,blank=False,default="https://ecell.nitrr.ac.in")
    founder = models.CharField(max_length=256)
    address = models.TextField(null=True, blank=True)
    flag = models.BooleanField(default=False)
    details = models.TextField(default='details coming soon')
    ecell_user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    year = models.IntegerField(default=2019)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name
    @property
    def pic_url(self):
        if self.pic:
            return config('HOST')+self.pic.url
        else:
            return "-"
