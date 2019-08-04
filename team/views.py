from django.views.decorators.csrf import csrf_exempt
import json
from .models import Member
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import TeamSerializer



@api_view(['GET', ])
def get_members(request,year):
    members = Member.objects.filter(year=year)
    res_data = TeamSerializer(members, many=True,context={
            'request': request}).data
    if len(members) > 0:
        res_message = "Team members Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Team members couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['GET'])
def team_years(req):
    years = Member.objects.values_list('year').distinct()
    return Response({
        'years': [x for x in years]
    })
