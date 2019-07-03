from rest_framework import serializers
from .models import startup

class startupSerializer(serializers.ModelSerializer):
    class Meta:
        model = startup
        fields = '__all__'
