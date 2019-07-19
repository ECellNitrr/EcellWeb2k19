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
        appname = 'team'
        URL = "https://ecell.nitrr.ac.in/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/{}/'.format(
            appname)

        Member.objects.all().delete()

        for x in ['faculty', 'student']:
            members = data[x]
            for obj in members:
                print(obj['name'])

                # img files
                image_location = ''
                if len(obj['image'])>0:
                    image_name = obj['image'].split('/').pop()
                    image_location = 'static/uploads/team/'+image_name
                    req = requests.get(obj['image'], stream=True)
                    with open(image_location, 'wb') as out_file:
                        shutil.copyfileobj(req.raw, out_file)
                    del req
                
                print(image_location)
                Member.objects.create(
                    name = obj['name'],
                    image = image_location,
                    member_type = MEMBER_TYPE[obj['member_type']],
                    year = 2018,
                )
                
