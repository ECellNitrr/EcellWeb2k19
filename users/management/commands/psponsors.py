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
        appname = 'sponsors'
        URL = "https://ecell.nitrr.ac.in/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/{}/'.format(
            appname)


        print(data)
        for x in data['spons']:
            datum = x['sponsors']
            cat = x['section_name']
            for obj in datum:
                print(obj['name'])

                # img files
                if obj['pic']:
                    image_name = obj['pic'].split('/').pop()
                    image_location = 'static/uploads/{}/'.format(
                        appname)+image_nameobj['spons_type']
                    req = requests.get(obj['pic'], stream=True)
                    with open(image_location, 'wb') as out_file:
                        shutil.copyfileobj(req.raw, out_file)
                    del req

                temp = Sponsor()

                temp.name = obj['name']
                temp.details = obj['details']
                temp.contact = obj['contact']
                temp.website = obj['website']
                temp.year = obj['year']
                temp.spons_type = SPONS_TYPE[cat]
                temp.flag = True
                temp.pic = image_location


                temp.save()
