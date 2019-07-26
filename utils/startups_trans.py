from startups.models import Startup
from django.http import JsonResponse
import requests
import shutil
def data_transfer(request):
    URL = "https://3b1bdaef.ngrok.io/startups/list/"
    r = requests.get(URL)
    data = r.json()
    # image_url = 'https://ecell.nitrr.ac.in/static/uploads/startups/'
    startups = data['startups']
    print(startups)
    for startup in startups:
        # image_name = startup['pic'].replace(image_url,'')
        flag = startup['flag']
        if flag:
            name = startup['name']
            url = startup['url']
            # experience = startup['experience']
            # email = startup['email']
            # contact = startup['contact']
            details = startup['details']
            year = 2018
            founder = startup['founder']
            # address = startup['address']
            
            image_name = name+'.jpeg'
            image_location = 'static/uploads/startups/'+image_name
            req = requests.get(startup['pic'].replace('http://127.0.0.1:8080','https://3b1bdaef.ngrok.io'), stream=True)
            with open(image_location, 'wb') as out_file:
                shutil.copyfileobj(req.raw, out_file)
            del req
            pic = image_location
            new_startup = Startup()
            new_startup.name = name
            new_startup.url = url
            new_startup.details = details
            new_startup.year = year
            new_startup.flag = flag
            # new_startup.address = address
            new_startup.founder = founder
            # new_startup.contact = contact
            # new_startup.email = email
            # new_startup.experience = experience
            new_startup.pic = pic
            new_startup.save()
    return JsonResponse({'success':True})