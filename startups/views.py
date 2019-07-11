from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Startup
from .serializers import StartupSerializer
from decorators import ecell_user
from django.http import HttpResponse
import csv


@api_view(['GET', ])
def get_startups(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    startups = Startup.objects.filter(year=year, flag=True)
    if len(startups) > 0:
        res_data = StartupSerializer(
            startups, many=True, context={
                'request': request}).data
        res_message = "Startups Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Startups Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def add_startup(request):
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    startup = StartupSerializer(data=request.data)

    try:
        startup.is_valid(raise_exception=True)
    except Exception as e:
        error = startup.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field: "+str(err)+"- "+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        startup.save()
        res_message = "Startup Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="startups.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name',
                     'Email',
                     'Picture',
                     'Contact',
                     'URL',
                     'Founder',
                     'Address',
                     'Flag',
                     'Details',
                     'Created_at',
                     'Modified_at',
                     'Year'])

    startups = Startup.objects.all().values_list(
        'name',
        'email',
        'pic',
        'contact',
        'url',
        'founder',
        'address',
        'flag',
        'details',
        'created_at',
        'modified_at',
        'year')
    for startup in startups:
        writer.writerow(startup)

    return response
