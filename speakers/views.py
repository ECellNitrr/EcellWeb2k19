from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Speaker
from .serializers import SpeakerSerializer, SpeakerListSerializer
from decorators import ecell_user
from django.http import HttpResponse, JsonResponse
import csv


@api_view(['GET', ])
def get_speakers(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    speakers = Speaker.objects.filter(year=year, flag=True).order_by('-year')
    if len(speakers) > 0:
        res_data = SpeakerListSerializer(
            speakers, many=True, context={
                'request': request}).data
        res_message = "Speakers Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Speakers Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def add_speaker(request):
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    speaker = SpeakerSerializer(data=request.data)

    try:
        speaker.is_valid(raise_exception=True)
    except Exception as e:
        error = speaker.errors
        error_msg = ""
        for err in error:
            error_msg += str(err)+"-"+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        speaker.save()
        res_message = "Speaker Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="speakers.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name','Company','Experience','Profile Picture','Email',
                    'Contact','Description','Year','Social Media','Flag'])

    speakers = Speaker.objects.all().values_list('name','company','experience','profile_pic','email',
                                                'contact','description','year','social_media','flag')
    for speaker in speakers:
        writer.writerow(speaker)

    return response


@api_view(['GET', ])
def get_speakers_list(request):
    speakers_objs = Speaker.objects.all()
    speakers = SpeakerSerializer(speakers_objs, many=True).data
    return JsonResponse(speakers,safe=False)
