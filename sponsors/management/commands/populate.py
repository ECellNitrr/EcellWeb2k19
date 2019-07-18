from django.core.management.base import BaseCommand, CommandError
import requests
import shutil

from startups.models import *
from mentors.models import *
from sponsors.models import *
from events.models import *

import pickle


SPONS_TYPE = {
        'Associate Sponsors' : 'ATS',
        'Platinum Sponsors' : 'PLS',
        'Gold Sponsors' : 'GDS',
        'Title Sponsors' : 'TLS',
        'Partner Sponsors' : 'PRS',
}

class Command(BaseCommand):
    def handle(self, *args, **options):
        appname = 'sponsors'
        URL = "https://ecell.nitrr.ac.in/{}/list/".format(appname)
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/{}/'.format(
            appname)

        data = data['spons']

        for category in data:
            category_name = category['section_name']
            category_name = SPONS_TYPE[category_name]

            for obj in category['sponsors']:
                print(obj['name'])

                # img files
                image_name = obj['pic'].split('/').pop()
                image_location = 'static/uploads/{}/'.format(appname)+image_name
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
                temp.spons_type = category_name
                temp.flag = True
                temp.pic = image_location
                temp.save()