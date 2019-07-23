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
    dir_data=""
    hcd_data=""
    fct_data=""
    oco_data=""
    hco_data=""
    mng_data=""
    exc_data=""
    if Member.objects.all().exists():
        dir= Member.objects.filter(member_type='DIR').values()
        dir_data=HigherSerializer(dir,many=True, context={'request': request}).data
        hcd = Member.objects.filter(member_type='HCD').values()
        hcd_data=HigherSerializer(hcd,many=True, context={'request': request}).data
        fct= Member.objects.filter(member_type='FCT').values()
        fct_data=HigherSerializer(fct,many=True, context={'request': request}).data
        oco= Member.objects.filter(member_type='OCO').values()
        oco_data=HigherSerializer(oco,many=True, context={'request': request}).data
        hco= Member.objects.filter(member_type='HCO').values()
        hco_data=HigherSerializer(hco,many=True, context={'request': request}).data
        mng= Member.objects.filter(member_type='MNG').values()
        mng_data=LowerSerializer(mng,many=True, context={'request': request}).data
        exc= Member.objects.filter(member_type='EXC').values()
        exc_data=LowerSerializer(exc,many=True, context={'request': request}).data
        res_message="Team Members are available"
        res_status=status.HTTP_200_OK

    else:
        res_message="Coming Soon"
        res_status=status.HTTP_404_NOT_FOUND
    return Response({
        "message": res_message,
        "director": dir_data,
        "head_career_development": hcd_data,
        "faculty_incharge": fct_data,
        "overall_coordinator": oco_data,
        "head_coordinator": hco_data,
        "manager": mng_data,
        "executive": exc_data

    }, status=status.HTTP_200_OK)

