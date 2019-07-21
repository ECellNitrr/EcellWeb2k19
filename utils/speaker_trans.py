from speakers.models import Speaker
from django.http import JsonResponse
import requests
import shutil
def data_transfer(request):
    URL = "https://ecell.nitrr.ac.in/speakers/list/"
    r = requests.get(URL)
    data = r.json()
    image_url = 'https://ecell.nitrr.ac.in/static/uploads/speakers/'
    speakers = data['speakers']
    for speaker in speakers:
        # image_name = speaker['profile_pic'].replace(image_url,'')
        name = speaker['name']
        company = speaker['company']
        # experience = speaker['experience']
        email = speaker['email']
        contact = speaker['contact']
        description = speaker['description']
        year = 2018
        social_media = speaker['social_media']
        
        image_name = name+'.jpeg'
        image_location = 'static/uploads/speakers/'+image_name
        req = requests.get(speaker['profile_pic'], stream=True)
        with open(image_location, 'wb') as out_file:
            shutil.copyfileobj(req.raw, out_file)
        del req
        profile_pic = image_location
        new_speaker = Speaker()
        new_speaker.name = name
        new_speaker.company = company
        new_speaker.description = description
        new_speaker.year = year
        new_speaker.social_media = social_media
        new_speaker.contact = contact
        new_speaker.email = email
        # new_speaker.experience = experience
        new_speaker.profile_pic = profile_pic
        new_speaker.save()
    return JsonResponse({'success':True})