from celery import shared_task
from django.core import mail
from decouple import config
import requests

@shared_task
def hello_celery():
    print('hello world celry')
    
@shared_task
def email(subject,body,recipient_list):
    a=mail.send_mail(subject,body,
                    'ca.ecell.nit.raipur@gmail.com',
                    recipient_list,fail_silently=False)
    print(a)

@shared_task
def sms(message,contact):
    contact = str(contact)
    authkey = config('authkey')
    message=str(message)
    url = "https://api.msg91.com/api/sendhttp.php?mobiles={}&authkey={}&route=4&sender=SUMMIT&message={}&country=91".format(contact,authkey,message)
    conn = requests.get(url)
    print(conn)