from django.db import models

class Speaker(models.Model):

    name            = models.CharField(max_length=64)
    company         = models.CharField(max_length=128)
    experience      = models.IntegerField(default=0)
    email           = models.EmailField(max_length=64, unique=True)
    description     = models.TextField(blank=True, null=True)
    verified        = models.BooleanField(default=False)
    contact         = models.CharField(max_length=10)
    profile_pic     = models.ImageField(upload_to='static/uploads/speakers',
                                    null=True, blank=True)
    social_media    = models.TextField(null=True, blank=True)
    year            = models.IntegerField(default=2019)
    
    def __str__(self):
        return "{} ({})".format(self.name,self.company)
