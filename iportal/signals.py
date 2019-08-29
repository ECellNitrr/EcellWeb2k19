from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .models import JobApplication
import time
from .tasks import *


@receiver(pre_save, sender=JobApplication)
def job_application_status_update(sender, instance, **kwargs):
    try:
        query= JobApplication.objects.get(applicant =instance.applicant, job= instance.job)
        print(query.applicant.email)
    except:
        sms('applied',instance.applicant.contact)    
        email.delay('applied','applied',[instance.applicant.email])
    else:
        if instance.status!=query.applicant.email and instance.status=='RJD':
            email.delay('REJECTED','REJECTED',[instance.applicant.email])
            sms.delay('rejected',instance.applicant.contact)
        elif instance.status!=query.applicant.email and instance.status=='HRD':
            email.delay('HIRED','HIRED',[instance.applicant.email])
            sms.delay('HIRED',instance.applicant.contact)
        elif instance.status!=query.applicant.email and instance.status=='URV':
            email.delay('UNDER REVIEW','UNDER REVIEW',[instance.applicant.email])
            sms.delay('UNDER REVIEW',instance.applicant.contact)
        else:
            pass