from django.db import models
from users.models import CustomUser
default_user = CustomUser.objects.get(email='ecell@gmail.com')
class Mentor(models.Model):
    name = models.CharField(max_length=256)
    contact = models.TextField(max_length=13, null=True, blank=True)
    email = models.CharField(max_length=256)
    detail = models.TextField()
    description = models.TextField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='static/uploads/mentors',null=True, blank=True)
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    ecell_user= models.ForeignKey(CustomUser, on_delete=models.SET_DEFAULT, default= default_user.id)
    def __str__(self):
        return self.name