from django.db import models
from users.models import CustomUser 


class Task(models.Model):
    platform_choices = [
        ['facebook','facebook'],
        ['whatsapp','whatsapp'],
        ['youtube','youtube'],
        ['instagram','instagram'],
        ['twitter','twitter'],
    ]

    name = models.CharField(max_length=500)
    description = models.TextField(null=True)
    platform = models.CharField(max_length=100, choices=platform_choices)
    madeby = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    