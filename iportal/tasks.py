from celery import shared_task
from django.core.mail import send_mail
from decouple import config

@shared_task
def mail(subject,body,email):
    send_mail(subject, body, 
                config('EMAIL_HOST_USER'), [email,],
                fail_silently=False)