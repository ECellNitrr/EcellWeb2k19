from speakers.models import Speaker
from django.http import JsonResponse
import requests
import shutil

def data_transfer(request):
    URL = "https://79f57566.ngrok.io/speakers/list/"
    r = requests.get(URL)
    print(r)
    data = r.json()
    image_url = 'https://79f57566.ngrok.io/static/uploads/speakers/'
    speakers = data['speakers']
    for speaker in speakers:
        # image_name = speaker['profile_pic'].replace(image_url,'')
        name = speaker['name']
        print(name)
        company = speaker['company']
        # experience = speaker['experience']
        email = speaker['email']
        contact = speaker['contact']
        description = speaker['description']
        year = 2018
        social_media = speaker['social_media']
        
        image_name = name+'.jpg'
        print(speaker['profile_pic'])
        image_url = speaker['profile_pic'].replace('http://127.0.0.1:8080','https://79f57566.ngrok.io')
        print(image_url)
        image_location = 'static/uploads/speakers/'+image_name
        req = requests.get(image_url, stream=True)
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