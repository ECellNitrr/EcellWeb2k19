from django.db import models

# Create your models here.
class App(models.Model):
	name = models.CharField(max_length=256, default='app1')
	log = models.CharField(max_length=256)
	link = models.URLField(blank=True,null=True)
	version = models.IntegerField(default=1, blank=False, null=False)
	flag=models.BooleanField(default=False)
        
	def __str__(self):
		return self.name