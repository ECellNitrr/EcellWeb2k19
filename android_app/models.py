from django.db import models

class App(models.Model):
	name = models.CharField(max_length=256, default='app1')
	log = models.CharField(max_length=256)
	link = models.URLField(blank=True)
	version = models.IntegerField(default=1, blank=False, null=False)
	flag=models.BooleanField(default=False)

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if self.flag is True:
			if App.objects.filter(flag=True).exists():
				apps = App.objects.filter(flag=True)
				for app in apps:
					app.flag = False
					app.save()
			self.flag = True
		super(App, self).save(*args, **kwargs)