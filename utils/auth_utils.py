from decouple import config
from random import randint
import requests
import http.client
from django.core.mail import send_mail
from django.conf import settings

def send_otp(contact, **kwargs):
    otp = str(randint(1000, 9999))
    if 'otp' in kwargs:
        otp = kwargs['otp']
    # url = config('otp_service_url')
    message = "Your OTP for E-Cell NIT Raipur portal is {}.".format(otp)
    # querystring = {
    #     "username": config('MSG_USERNAME'),
    #     "password": config('MSG_PASSWORD'),
    #     "senderid": "SUMMIT",
    #     "message": message,
    #     "numbers": contact,
    #     "unicode": "0"}
    # response = requests.request("GET", url, params=querystring)
    # print(response.text)
    # print(response)
    conn = http.client.HTTPSConnection("api.msg91.com")
    contact = str(contact)
    authkey = config('authkey')
    url = "https://api.msg91.com/api/sendhttp.php?mobiles={}&authkey={}&route=4&sender=SUMMIT&message={}&country=91".format(contact,authkey,message)
    conn.request("GET",url)
    res = conn.getresponse()
    data = res.read()
    
    return otp


def send_email_otp(recipient_list, **kwargs):
    otp = str(randint(1000, 9999))
    if 'otp' in kwargs:
        otp = kwargs['otp']
    
    email_from = settings.EMAIL_HOST_USER
    message = "Your OTP for E-Cell NIT Raipur portal is {}.".format(otp)
    subject = 'E-Cell NITRR'

    send_mail( subject, message, email_from, recipient_list )
    return otp

