from rest_framework import serializers
from .models import Leader
from django.core.exceptions import ValidationError


class LeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leader
        fields = ['questionset', 'user', 'score']

class UserLeaderBoardSerializer(serialzers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','score']