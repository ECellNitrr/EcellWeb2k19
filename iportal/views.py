from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *


class StartupViewset(ModelViewSet):
    queryset = Startup.objects.filter(approved=True)
    serializer_class = StartupSerializer


class JobViewset(ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

        
class JobApplicationViewset(ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer


class LogoViewset(ModelViewSet):
    queryset = StartupLogo.objects.all()
    serializer_class = LogoSerializer
    