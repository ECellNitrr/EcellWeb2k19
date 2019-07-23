from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Mentor
from .serializers import MentorSerializer, MentorListSerializer
from decorators import ecell_user
from django.http import HttpResponse
import csv


@api_view(['GET', ])
def get_mentors(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    mentors = Mentor.objects.filter(year=year, flag=True)
    if len(mentors) > 0:
        res_data = MentorListSerializer(
            mentors, many=True, context={
                'request': request}).data
        res_message = "Mentors Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Mentors Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def add_mentor(request):
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    mentor = MentorSerializer(data=request.data)

    try:
        mentor.is_valid(raise_exception=True)
    except Exception as e:
        error = mentor.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field: "+str(err)+"- "+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        mentor.save()
        res_message = "Mentor Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="mentors.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Contact', 'Email', 'Details',
                     'Description', 'Profile_Pic', 'Flag', 'Year'])

    mentors = Mentor.objects.all().values_list(
        'name',
        'contact',
        'email',
        'detail',
        'description',
        'profile_pic',
        'flag',
        'year')
    for mentor in mentors:
        writer.writerow(mentor)

    return response
