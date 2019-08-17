from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *
from django_filters import rest_framework as filters

class StartupViewset(ModelViewSet):
    queryset = Startup.objects.filter(approved=True)
    serializer_class = StartupSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('name','approved','sector')

class JobViewset(ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup','name','location','start_date','durtion','job_type','skills_required','stipend')
        
class JobApplicationViewset(ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','status','job')

class LogoViewset(ModelViewSet):
    queryset = StartupLogo.objects.all()
    serializer_class = LogoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup','logo')    