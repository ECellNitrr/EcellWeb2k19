from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from .models import Sponsor
from .serializers import SponsorSerializer
from decorators import ecell_user
from django.http import HttpResponse, JsonResponse
from collections import defaultdict
import csv


@api_view(['GET', ])
def get_sponsors(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    sponsors = Sponsor.objects.filter(year=year, flag=True)
    if len(sponsors) > 0:
        res_data = SponsorSerializer(
            sponsors, many=True, context={
                'request': request}).data
        res_message = "Sponsors Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Sponsors Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def add_sponsor(request):
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    sponsor = SponsorSerializer(data=request.data)

    try:
        sponsor.is_valid(raise_exception=True)
    except Exception as e:
        error = sponsor.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field: " + \
                str(err) + "- " + str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        sponsor.save()
        res_message = "Sponsor Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="sponsors.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Details', 'Pic', 'Contact',
                     'Website', 'Spons_type', 'Flag', 'Year'])

    sponsors = Sponsor.objects.all().values_list('name','details','pic','contact','website',
                                                'spons_type','flag','year')
    for sponsor in sponsors:
        writer.writerow(sponsor)

    return response


@api_view(['GET'])
@permission_classes([AllowAny])
def get_sponsor_years(req):
    years = defaultdict(int)
    for x in Sponsor.objects.all():
        years[x.year] += 1

    years =  [x for x in years.keys()]
    return JsonResponse(years, safe=False)