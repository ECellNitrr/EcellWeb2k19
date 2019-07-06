from django.db import models


class Sponsor(models.Model):
	SPONS_TYPE = (
        ('AS', 'Associate Sponsors'),
        ('PLTS', 'Platinum Sponsors'),
        ('GS', 'Gold Sponsors'),
        ('TS', 'Title Sponsors'),
        ('PRTS', 'Partner Sponsors'),
    )

	name = models.CharField(max_length=256)
	details = models.TextField()
	pic = models.ImageField(upload_to='static/uploads/sponsors')
	contact = models.TextField(max_length=13, null=True, blank=True)
	website = models.URLField(blank=True)
	spons_type = models.CharField(max_length=4, choices=SPONS_TYPE, default='AS')
	flag = models.BooleanField(default=False)
	year = models.IntegerField(default=2018)

	def __str__(self):
		return self.name




    #def url(self):
        #return self.url
