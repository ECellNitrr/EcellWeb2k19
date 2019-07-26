from rest_framework import serializers
from .models import Startup


class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Startup
        fields = '__all__'
class StartupListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Startup
        fields = ['id','name','email','pic','pic_url','contact','url','founder','address','details','year', 'flag','ecell_user']