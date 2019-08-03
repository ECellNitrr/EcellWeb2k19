from rest_framework import serializers
from .models import Leader
from django.core.exceptions import ValidationError
from users.models import CustomUser

class LeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leader
        fields = ['questionset', 'user', 'score']

class UserLeaderBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','score']