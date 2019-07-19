from decouple import config
from random import randint
import requests
import http.client


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
    print(data.decode("utf-8"))
    
    return otp
