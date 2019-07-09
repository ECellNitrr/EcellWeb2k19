from decouple import config
from random import randint
import requests

def send_otp(contact):
    otp = str(randint(1000, 9999))
    url = "http://www.merasandesh.com/api/sendsms"
    message = "Your OTP for E-Cell NIT Raipur APP is " + otp + ""
    querystring = {"username": config('MSG_USERNAME'), "password": config('MSG_PASSWORD'), "senderid": "SUMMIT",
                    "message": message, "numbers": contact, "unicode": "0"}

    response = requests.request("GET", url, params=querystring)
    print(response.text)
    print(response)