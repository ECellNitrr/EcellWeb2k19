from events.models import Event
import requests
import shutil
from django.http import JsonResponse
def data_transfer(request):
    URL = "https://ecell.nitrr.ac.in/events/list/"
    r = requests.get(URL)
    data = r.json()
    # image_url = 'https://ecell.nitrr.ac.in/static/uploads/events/'
    events = data['events']
    for event in events:
        # image_name = event['profile_pic'].replace(image_url,'')
        name = event['name']
        venue = event['venue']
        date = event['date']
        time = event['time']
        details = event['details']
        email = event['email']
        year = '2018'
        cover_pic_name = 'cover_'+name+'.jpeg'
        cover_pic_location = 'static/uploads/events/'+cover_pic_name
        icon_name = 'icon_'+name+'.jpeg'
        icon_location = 'static/uploads/events/'+icon_name
        req_cover = requests.get(event['cover_pic'], stream=True)
        req_icon = requests.get(event['icon'], stream=True)
        with open(cover_pic_location, 'wb') as out_file:
            shutil.copyfileobj(req_cover.raw, out_file)
        del req_cover
        with open(icon_location, 'wb') as out_file:
            shutil.copyfileobj(req_icon.raw, out_file)
        del req_icon

        cover_pic = cover_pic_location
        icon= icon_location
        new_event = Event()
        new_event.name = name
        new_event.details = details
        new_event.venue = venue
        new_event.year = year
        new_event.cover_pic = cover_pic
        new_event.icon = icon
        new_event.email = email
        new_event.year = year
        new_event.save()
    return JsonResponse({'success':True})

