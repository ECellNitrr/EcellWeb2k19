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
        URL = "https://ecell.nitrr.ac.in/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/{}/'.format(
            appname)


        Event.objects.all().delete()
        for obj in data['events']:
            print(obj['name'])

            # img files
            image_location = ''
            if obj['icon']:
                image_name = obj['icon'].split('/').pop()
                image_location = 'static/uploads/{}/'.format(
                    appname)+image_name
                req = requests.get(obj['icon'], stream=True)
                with open(image_location, 'wb') as out_file:
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
            temp.year = 2019
            temp.flag = True

            temp.save()
