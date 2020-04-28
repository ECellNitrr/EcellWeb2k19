from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter
from .serializers import *
from .models import *
import math
from django_filters import rest_framework as filters
from rest_framework.pagination import PageNumberPagination
from decorators import relax_ecell_user, ecell_user
from django.http import HttpResponseNotFound, HttpResponse
import json
from rest_framework import status
from .tasks import mail
from django.template.loader import render_to_string


class GeneralPagination(PageNumberPagination):
    page_size = 14

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
    queryset = Startup.objects.all()
    serializer_class = StartupSerializer
    search_fields = ['name','job__name','sector']
    filter_backends = (filters.DjangoFilterBackend, SearchFilter)
    filterset_fields = ('name','idea_approved','can_hire_interns','sector','user')
    pagination_class = GeneralPagination

class JobViewset(ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup','name','location','start_date','duration','job_type','skills_required','stipend','startup__user')
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
    filterset_fields = ('startup',)    
    pagination_class = GeneralPagination

class StartupPlanFileViewset(ModelViewSet):
    queryset = StartupPlanFile.objects.all()
    serializer_class = StartupPlanFileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('startup',)    
    pagination_class = GeneralPagination

# ansh stuff
class ApplicantEducationViewset(ModelViewSet):
    queryset = ApplicantEducation.objects.all()
    serializer_class = ApplicantEducationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('study_program','applicant')    
    pagination_class = GeneralPagination

class ApplicantExperienceViewset(ModelViewSet):
    queryset = ApplicantExperience.objects.all()
    serializer_class = ApplicantExperienceSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','company','title')    
    pagination_class = GeneralPagination

class ApplicantSkillViewset(ModelViewSet):
    queryset = ApplicantSkill.objects.all()
    serializer_class = ApplicantSkillSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','skill')    
    pagination_class = GeneralPagination

class ApplicantOrganisationViewset(ModelViewSet):
    queryset = ApplicantOrganisation.objects.all()
    serializer_class = ApplicantOrganisationSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','organisation_name','role')    
    pagination_class = GeneralPagination

class ApplicantProjectViewset(ModelViewSet):
    queryset = ApplicantProject.objects.all()
    serializer_class = ApplicantProjectSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant',)    
    pagination_class = GeneralPagination


class ApplicantLanguageViewset(ModelViewSet):
    queryset = ApplicantLanguage.objects.all()
    serializer_class = ApplicantLanguageSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','language')    
    pagination_class = GeneralPagination   

class ApplicantInterestViewset(ModelViewSet):
    queryset = ApplicantInterest.objects.all()
    serializer_class = ApplicantInterestSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant','interest')    
    pagination_class = GeneralPagination

class ApplicantAchievementViewset(ModelViewSet):
    queryset = ApplicantAchievement.objects.all()
    serializer_class = ApplicantAchievementSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('applicant',)    
    pagination_class = GeneralPagination
# @api_view(['get'])
# @relax_ecell_user
# def pro_get_startup(req):
#     ecelluser = req.ecelluser
#     sdata = StartupSerializer(ecelluser.startup)
#     return Response(sdata.data)
@api_view(['PUT', ])
@ecell_user
def update_startup_permissions(request,id):
    if request.ecelluser.user_type in ['CDC','DRT']:
        try:
            previous = Startup.objects.get(id=id)
        except:
            return Response({"message": "Startup Not Found!"}, status=status.HTTP_404_NOT_FOUND)
        else:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            previous.idea_approved = body["idea_approved"]
            previous.save()
            startup = Startup.objects.get(id=id)
            subject='An Update from Career Development Cell NIT Raipur'
            if startup.idea_approved == True:
                html_content=render_to_string('idea_approved_mail.html',{'startup_name': startup.name})
                mail.delay(subject,html_content,startup.email)
            else:                
                html_content=render_to_string('idea_rejected_mail.html',{'startup_name': startup.name})
                mail.delay(subject,html_content,startup.email) 
            return Response({"message": "Startup Permissions Updated!"}, status=status.HTTP_200_OK)
    else:
        return Response({"message": "Unauthorized Access!"}, status=status.HTTP_401_UNAUTHORIZED)

