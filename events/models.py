from django.db import models
from django.contrib.auth.models import User
from users.models import CustomUser


class Event(models.Model):
    name = models.CharField(max_length=256)
    venue = models.TextField()
    date = models.DateField()
    time = models.CharField(max_length=10)
    details = models.TextField()
    cover_pic = models.ImageField(upload_to='static/uploads/events/cover',default='/static/defaults/ecell.png', null=True, blank=True)
    icon = models.ImageField(upload_to='static/uploads/events/icon',default='static/defaults/ecell.png')
    email = models.EmailField(null=True, blank=True)
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    ecell_user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name

class EventRegister(models.Model):
	profile = models.ForeignKey(CustomUser,on_delete=models.CASCADE )
	event = models.ForeignKey(Event,on_delete=models.CASCADE)
	def __str__(self):
		return self.profile.username