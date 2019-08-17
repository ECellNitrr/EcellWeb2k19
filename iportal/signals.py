from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .models import JobApplication
from .consumers import BquizConsumer
import time
from .tasks import *


# @receiver(post_save, sender=JobApplication)
# def job_application_status_update(sender, instance, created, **kwargs):
#     if instance.status=='RJD':


#     elif instance.status=='HRD':

#     elif instance.status=='URV':
    