from rest_framework import serializers
from .models import Member


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'
    