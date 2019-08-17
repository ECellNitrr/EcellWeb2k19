from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .serializers import *
from .models import *
import math
from django_filters import rest_framework as filters
from rest_framework.pagination import PageNumberPagination

class GeneralPagination(PageNumberPagination):
    page_size = 2

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'current_page': int(self.request.GET.get('page','1')),
            'total_pages': math.ceil(self.page.paginator.count / self.page_size),
            'results': data
        })
        

class StartupViewset(ModelViewSet):
    queryset = Startup.objects.filter(approved=True)
    serializer_class = StartupSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('name','approved','sector')
    pagination_class = GeneralPagination


class JobViewset(ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup','name','location','start_date','durtion','job_type','skills_required','stipend')
    pagination_class = GeneralPagination
        
class JobApplicationViewset(ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','status','job')
    pagination_class = GeneralPagination

class LogoViewset(ModelViewSet):
    queryset = StartupLogo.objects.all()
    serializer_class = LogoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup','logo')    
    pagination_class = GeneralPagination