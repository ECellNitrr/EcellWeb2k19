from rest_framework import serializers
from .models import Member


class HigherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['name', 'profile_url','image_url','image']
    
class LowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('name',)
        