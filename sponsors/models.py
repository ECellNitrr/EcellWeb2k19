from django.db import models
from users.models import CustomUser
from decouple import config

spons_types = {
    'TLS': {
        'display_name': 'Title',
        'importance': 10,
    },
    'ATS': {
        'display_name': 'Associate',
        'importance': 9,
    },
    'PLS': {
        'display_name': 'Platinum',
        'importance': 8,
    },
    'GDS': {
        'display_name': 'Gold',
        'importance': 7,
    },
    'PRS': {
        'display_name': 'Partner',
        'importance': 6,
    },
}


class Sponsor(models.Model):
    SPONS_TYPE = [[x,spons_types[x]['display_name']] for x in spons_types]

    name = models.CharField(max_length=200)
    details = models.TextField(blank=True, null=True)
    pic = models.ImageField(
        upload_to='static/uploads/sponsors',
        null=True,
        blank=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    spons_type = models.CharField(
        max_length=3,
        choices=SPONS_TYPE,
        default='ATS')
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    importance = models.IntegerField(default=0)
    ecell_user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name
        
    @property
    def pic_url(self):
        if self.pic:
            return config('HOST')+self.pic.url
        else:
             return "-"