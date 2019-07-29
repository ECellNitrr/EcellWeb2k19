from django.shortcuts import render
from users.views import CustomUser
from .serializers import EcellUserSerializer
from rest_framework.decorators import api_view 
from rest_framework.viewsets import ModelViewSet


class EcellUserViewset(ModelViewSet):
    queryset = CustomUser.objects.filter(is_superuser=False)
    serializer_class = EcellUserSerializer