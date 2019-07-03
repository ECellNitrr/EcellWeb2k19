from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import startup
from .serializers import startupSerializer
#from decorators import ecell_user
from django.http import HttpResponse
import csv


@api_view(['GET',])
def get_startups(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    startups = startup.objects.filter(year=year, verified=True)
    if len(startup)>0:
        res_data    = startupSerializer(startup, many=True,
                             context={'request':request}).data
        res_message = "startups Fetched successfully."
        res_status  = status.HTTP_200_OK
    else:
        res_message = "startups Couldn't be fetched"
        res_status  = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data"   : res_data
    }, status=res_status)


@api_view(['POST',])
#@ecell_user
def add_startup(request):
    if request.ecelluser.user_type in ['GST','VLT','CAB']:
        return Response({
            "message":"Unauthorized to view this page"
        }, status=HTTP_401_UNAUTHORIZED)

    res_message = ""
    res_data    = []

    startup = startupSerializer(data=request.data)

    if startup.is_valid():
        startup.save()
        res_message = "startup added successfully"
        res_status  = status.HTTP_201_CREATED
    else:
        res_message = "startup couldn't be added"
        res_status  = status.HTTP_400_BAD_REQUEST

    return Response({
        "message":res_message
    }, status=res_status)


@api_view(['GET',])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="startups.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Company', 'Contact', 'Email', 'Experience', 'Year',
                         'Verified', 'Description', 'Profile Pic', 'Social Media'])

    startups = startup.objects.all().values_list('name', 'company', 'contact', 'email', 'experience',
                                     'year', 'verified', 'description', 'profile_pic', 'social_media')
    for startup in startups:
        writer.writerow(startup)

    return response
