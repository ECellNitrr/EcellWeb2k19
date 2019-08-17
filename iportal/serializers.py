from rest_framework import serializers
from .models import *

class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = StartupLogo


class StartupSerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()

    def get_logo(self,instance):
        try:
            logo_uri = instance.startuplogo.logo.url
            request = self.context.get('request')
            return request.build_absolute_uri(logo_uri)
        except:
            return None

    class Meta:
        read_only_fields = ['startup']
        fields = "__all__"
        model = Startup


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Job


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = JobApplication