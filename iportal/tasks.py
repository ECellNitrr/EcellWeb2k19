from celery import shared_task
from django.core.mail import send_mail
from decouple import config
from django.core.mail import EmailMessage

@shared_task
def mail(subject,html_content,email):
    my_mail_id = '"E-Cell NITRR Open Source" <ecellnitrropensource@gmail.com>'
    msg = EmailMessage(subject, html_content, my_mail_id , [email,])
    msg.content_subtype = "html"  
    msg.send()