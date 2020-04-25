from celery import shared_task
from django.core.mail import send_mail
from decouple import config
from django.core.mail import EmailMessage

@shared_task
def mail(subject,html_content,email):
    msg = EmailMessage(subject, html_content, config('EMAIL_HOST_USER') , [email,])
    msg.content_subtype = "html"  
    msg.send()