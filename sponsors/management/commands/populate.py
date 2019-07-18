from django.core.management.base import BaseCommand, CommandError
import requests
import shutil

from startups.models import *
from mentors.models import *
from sponsors.models import *
from events.models import *

import pickle

class Command(BaseCommand):
    def handle(self, *args, **options):
        URL = "https://ecell.nitrr.ac.in/mentors/list/"
        r = requests.get(URL)
        data = r.json()
        image_url = 'https://ecell.nitrr.ac.in/static/uploads/mentors/'
        mentors = data['mentors']
        for mentor in mentors:
            # image_name = mentor['profile_pic'].replace(image_url,'')
            name = mentor['name']
            email = mentor['email']
            detail = mentor['detail']
            description = mentor['detail']
            year = mentor['year']
            
            image_name = name+'.jpeg'
            image_location = 'static/uploads/mentors/'+image_name
            req = requests.get(mentor['profile_pic'], stream=True)
            with open(image_location, 'wb') as out_file:
                shutil.copyfileobj(req.raw, out_file)
            del req

            profile_pic = image_location
            new_mentor = Mentor()
            new_mentor.name = name
            new_mentor.detail = detail
            new_mentor.description = description
            new_mentor.year = year
            new_mentor.flag = True
            new_mentor.profile_pic = profile_pic
            new_mentor.save()

        #     temp = Event()
        #     temp.name = x['name']
        #     temp.venue = x['venue']
        #     temp.date = x['date']
        #     temp.time = x['time']
        #     temp.details = x['details']
        #     temp.cover_pic = x['cover_pic']
        #     temp.icon = x['cover_pic']
        #     temp.email = x['email']
        #     temp.flag = x['flag']
        #     temp.save()