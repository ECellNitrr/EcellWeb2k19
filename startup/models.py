from django.db import models
#from appprofile.models import Profile
# Create your models here.
class startup(models.Model):
	name = models.CharField(max_length=256)
	email = models.CharField(max_length=256)
	pic = models.ImageField(upload_to='static/uploads/startups')
	contact = models.TextField(max_length=13, null=True, blank=True)
	url = models.URLField(null=False, blank=False, default="https://ecell.nitrr.ac.in")
	founder = models.CharField(max_length=256)
	address = models.TextField()
	flag = models.BooleanField(default=False)
	details = models.TextField(default='details coming soon')
	created_at = models.DateTimeField(auto_now_add=True, editable=False)
	modified_at = models.DateTimeField(auto_now=True, editable=False)


	def __str__(self):
		return self.name
