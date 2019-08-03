from django.db import models
from decouple import config

# Create your models here.

MEMBER_TYPE = (
        ('DIR', 'Director, NIT Raipur'),
        ('HCD', 'Head of Career development'),
        ('FCT','Faculty Incharge'),
        ('MNG', 'Manager'),
        ('HCO', 'Head Co-ordinator'),
        ('OCO', 'Overall Co-ordinator'),
        ('EXC', 'Executive'),
    )

class Member(models.Model):
    domain_choices = [
        ['tech']*2,
        ['spons']*2,
        ['pr']*2,
        ['doc']*2,
        ['design']*2,
        ['none']*2
    ]

    name = models.CharField(max_length=100)
    profile_url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='static/uploads/team', null=True, blank = True)
    member_type = models.CharField(max_length=3, choices= MEMBER_TYPE, default='EXEC')
    year = models.IntegerField(default=2019)
    domain = models.CharField(max_length=100, choices=domain_choices, default='pr')
    linkedin = models.URLField(blank=True, null=True)
    facebook = models.URLField(blank=True, null=True)


    @property
    def image_url(self):
        return config('HOST')+self.image.url


    def __str__(self):
        return self.member_type + '-' + self.name