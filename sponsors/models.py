from django.db import models
from users.models import CustomUser


class Sponsor(models.Model):
    SPONS_TYPE = (
        ('ATS', 'Associate Sponsors'),
        ('PLS', 'Platinum Sponsors'),
        ('GDS', 'Gold Sponsors'),
        ('TLS', 'Title Sponsors'),
        ('PRS', 'Partner Sponsors'),
    )

    name = models.CharField(max_length=200, unique=True)
    details = models.TextField(blank=True, null=True)
    pic = models.ImageField(
        upload_to='static/uploads/sponsors',
        null=True,
        blank=True)
    contact = models.TextField(max_length=13, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    spons_type = models.CharField(
        max_length=4,
        choices=SPONS_TYPE,
        default='AS')
    flag = models.BooleanField(default=False)
    year = models.IntegerField(default=2019)
    ecell_user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name

