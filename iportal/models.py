from django.db import models


class Startup(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    contact = models.CharField(max_length=15)
    brief = models.CharField(max_length=256)
    description = models.TextField(blank=True)
    sector = models.CharField(max_length=100)
    
    address1 = models.CharField(max_length=200)
    address2 = models.CharField(max_length=200)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
class Founder(models.Model):
    startup = models.ForeignKey(Startup,on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    email = models.EmailField()
    contact = models.CharField(max_length=15, blank=True)
    linkedin = models.URLField(blank=True)


class startupLogo(models.Model):
    startup = models.ForeignKey(Startup,on_delete=models.CASCADE)
    
    logo = models.ImageField(upload_to='static/uploads/iportal/logos/')