from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *


class StartupViewset(ModelViewSet):
    queryset = Startup.objects.filter(approved=True)
    serializer_class = StartupSerializer
