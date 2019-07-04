from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import CustomUser

@receiver(pre_save, sender=CustomUser)
def create_username(sender, instance, **kwargs):
    instance.username = instance.email
        