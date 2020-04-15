from rest_framework import serializers
from users.serializers import RegistrationSerializer
from .models import *

class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = StartupLogo
    

class StartupPlanFileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = StartupPlanFile


class JobSerializer(serializers.ModelSerializer):
    total_applicants = serializers.SerializerMethodField()

    def get_total_applicants(self,instance):
        return instance.jobapplication_set.count()
    
    class Meta:
        fields = "__all__"
        model = Job
        

class StartupSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()
    logo_id = serializers.SerializerMethodField()
    startup_plan_file = serializers.SerializerMethodField()
    startup_plan_file_id = serializers.SerializerMethodField()
    
    jobs = serializers.SerializerMethodField()

    def get_jobs(self,instance):
        return JobSerializer(instance.job_set,many=True).data

    def get_logo(self,instance):
        try:
            logo_uri = instance.startuplogo.logo.url
            request = self.context.get('request')
            return request.build_absolute_uri(logo_uri)
        except:
            return None

    def get_logo_id(self,instance):
        try:
            return instance.startuplogo.id
        except:
            return None


    def get_startup_plan_file(self,instance):
        try:
            uri = instance.startupplanfile.file.url
            request = self.context.get('request')
            return request.build_absolute_uri(uri)
        except:
            return None

    def get_startup_plan_file_id(self,instance):
        try:
            return instance.startupplanfile.id
        except:
            return None

    class Meta:
        read_only_fields = ['startup']
        fields = "__all__"
        model = Startup


class JobApplicationSerializer(serializers.ModelSerializer):
    applicant_obj = serializers.SerializerMethodField()
    startup_name = serializers.SerializerMethodField()
    opening_name  = serializers.SerializerMethodField()

    def get_startup_name(self,instance):
        return instance.job.startup.name

    def get_opening_name(self,instance):
        return instance.job.name

    def get_applicant_obj(self,instance):
        applicant_obj = RegistrationSerializer(instance.applicant).data
        applicant_obj.pop('password')
        applicant_obj.pop('otp')
        return applicant_obj
    
    class Meta:
        fields = "__all__"
        model = JobApplication

class ApplicantEducationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantEducation

class ApplicantExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantExperience

class ApplicantProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantProject

class ApplicantOrganisationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantOrganisation

class ApplicantSkillSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantSkill

class ApplicantInterestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantInterest

class ApplicantLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantLanguage

class ApplicantAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = ApplicantAchievement
