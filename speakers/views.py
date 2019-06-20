from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Speaker
from .serializers import SpeakerSerializer
from decorators import ecell_user
from django.http import HttpResponse
import csv


@api_view(['GET',])
def get_speakers(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    speakers = Speaker.objects.filter(year=year, verified=True)
    if len(speakers)>0:
        res_data    = SpeakerSerializer(speakers, many=True,
                             context={'request':request}).data
        res_message = "Speakers Fetched successfully."
        res_status  = status.HTTP_200_OK
    else:
        res_message = "Speakers Couldn't be fetched"
        res_status  = status.HTTP_404_NOT_FOUND
        
    return Response({
        "message": res_message,
        "data"   : res_data
    }, status=res_status)


@api_view(['POST',])
@ecell_user
def add_speaker(request): 
    if request.ecelluser.user_type in ['GST','VLT','CAB']:
        return Response({
            "message":"Unauthorized to view this page"
        }, status=HTTP_401_UNAUTHORIZED)

    res_message = ""
    res_data    = []
    
    speaker = SpeakerSerializer(data=request.data)
    
    if speaker.is_valid():
        speaker.save()
        res_message = "Speaker added successfully"
        res_status  = status.HTTP_201_CREATED
    else:
        res_message = "Speaker couldn't be added"
        res_status  = status.HTTP_400_BAD_REQUEST
    
    return Response({
        "message":res_message
    }, status=res_status)


@api_view(['GET',])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="speakers.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Company', 'Contact', 'Email', 'Experience', 'Year',
                         'Verified', 'Description', 'Profile Pic', 'Social Media'])

    speakers = Speaker.objects.all().values_list('name', 'company', 'contact', 'email', 'experience',
                                     'year', 'verified', 'description', 'profile_pic', 'social_media')
    for speaker in speakers:
        writer.writerow(speaker)

    return response

