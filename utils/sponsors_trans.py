from sponsors.models import Sponsor
from django.http import JsonResponse
import requests
import shutil
def data_transfer(request):
    URL = "https://ecell.nitrr.ac.in/sponsors/list/"
    r = requests.get(URL)
    data = r.json()
    image_url = 'https://ecell.nitrr.ac.in/static/uploads/sponsors/'
    sponsors = data['spons']
    for sponsor in sponsors:
        # image_name = sponsor['profile_pic'].replace(image_url,'')
        name = sponsor['name']
        details = sponsor['details']
        year = sponsor['year']
        website = sponsor['website']
        contact = sponsor['contact']
        spons_type = sponsor['spons_type']
        year = 2018
        social_media = sponsor['social_media']
        
        image_name = name+'.jpeg'
        image_location = 'static/uploads/sponsors/'+image_name
        req = requests.get(sponsor['pic'], stream=True)
        with open(image_location, 'wb') as out_file:
            shutil.copyfileobj(req.raw, out_file)
        del req
        pic = image_location
        new_sponsor = Sponsor()
        new_sponsor.name = name
        new_sponsor.details = details
        new_sponsor.spons_type = spons_type
        new_sponsor.year = year
        new_sponsor.website = website
        new_sponsor.contact = contact
        new_sponsor.year = year
        new_sponsor.pic = pic
        new_sponsor.save()
    return JsonResponse({'success':True})