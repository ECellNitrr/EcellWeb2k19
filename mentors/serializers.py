from rest_framework import serializers
from .models import mentors

class mentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = mentors
        fields = '__all__'
