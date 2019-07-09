from django.db import models
from users.models import CustomUser
#from appprofile.models import Profile
# Create your models here.
default_user = CustomUser.objects.get(email='ecell@gmail.com')


class Startup(models.Model):
    name = models.CharField(max_length=256, )
    email = models.CharField(max_length=256)
    pic = models.ImageField(
        upload_to='static/uploads/startups',
        null=True,
        blank=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    url = models.URLField(
        null=False,
        blank=False,
        default="https://ecell.nitrr.ac.in")
    founder = models.CharField(max_length=256)
    address = models.TextField(null=True, blank=True)
    flag = models.BooleanField(default=False)
    details = models.TextField(default='details coming soon')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)
    ecell_user = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_DEFAULT,
        default=default_user.id)
    year = models.IntegerField(default=2019)

    def __str__(self):
        return self.name
