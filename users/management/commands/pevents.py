from django.core.management.base import BaseCommand, CommandError
import requests
import shutil

from startups.models import *
from mentors.models import *
from sponsors.models import *
from events.models import *
from team.models import *
from speakers.models import *


import pickle


SPONS_TYPE = {
    'Associate Sponsors': 'ATS',
    'Platinum Sponsors': 'PLS',
    'Gold Sponsors': 'GDS',
    'Title Sponsors': 'TLS',
    'Partner Sponsors': 'PRS',
}

MEMBER_TYPE = {
    'Dir' :'DIR',
    'HCD' :'HCD',
    'Fclty' :'FCT',
    'MNG' :'MNG',
    'HC' :'HCO',
    'OC' :'OCO',
    'EXEC' :'EXC',
}


class Command(BaseCommand):
    def handle(self, *args, **options):
        appname = 'events'
        URL = "https://3b1bdaef.ngrok.io/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://3b1bdaef.ngrok.io/static/uploads/{}/'.format(
            appname)


        Event.objects.all().delete()
        for obj in data['events']:
            print(obj['name'])

            # img files
            image_location = ''
            if obj['icon']:
                image_name = obj['icon'].split('/').pop()
                image_location = 'static/uploads/{}/icon/'.format(
                    appname)+image_name
                cover_location = 'static/uploads/{}/cover/'.format(
                    appname)+image_name
                req = requests.get(obj['icon'].replace('http://127.0.0.1:8080','https://3b1bdaef.ngrok.io'), stream=True)
                with open(image_location, 'wb') as out_file:
                    shutil.copyfileobj(req.raw, out_file)
                del req
                req = requests.get(obj['cover_pic'].replace('http://127.0.0.1:8080','https://3b1bdaef.ngrok.io'), stream=True)
                with open(cover_location, 'wb') as out_file:
                    shutil.copyfileobj(req.raw, out_file)
                del req

            temp = Event()

            temp.name = obj['name']
            temp.venue = obj['venue']
            temp.date = obj['date']
            temp.time = obj['time']
            temp.details = obj['details']
            temp.cover_pic = image_location
            temp.icon = image_location
            temp.cover_pic = cover_location
            temp.year = 2019
            temp.flag = True

            temp.save()
