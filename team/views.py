from django.views.decorators.csrf import csrf_exempt
import json
from .models import Member
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import HigherSerializer, LowerSerializer


@api_view(['GET', ])
def get_members(request):
    res_message = ""
    res_status = ""
    high_data = ""
    low_data = ""
    if Member.objects.all().exists():
        high = Member.objects.filter(
            member_type='DIR').values() | Member.objects.filter(
            member_type='HCD').values() | Member.objects.filter(
            member_type='FCT').values() | Member.objects.filter(
            member_type='OCO').values() | Member.objects.filter(
            member_type='HCO').values() | Member.objects.filter(
            member_type='MNG').values() | Member.objects.filter(
            member_type='EXC').values() | Member.objects.filter(
            member_type='MNG').values()
        high_data = HigherSerializer(high, many=True, context={
                'request': request}).data
        res_message = "Team Members are available"
        res_status = status.HTTP_200_OK

    else:
        res_message = "Coming Soon"
        res_status = status.HTTP_404_NOT_FOUND
    return Response({
        "message": res_message,
        "members": high_data

    }, status=status.HTTP_200_OK)
