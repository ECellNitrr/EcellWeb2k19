from rest_framework import serializers
from .models import Leader
from users.models import CustomUser
from django.core.exceptions import ValidationError
from users.models import CustomUser

class LeaderSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    def get_username(self,instance):
        return instance.user.first_name + ' ' + instance.user.last_name
    
    class Meta:
        model = Leader
        fields = ['questionset', 'user', 'score','username']

class UserLeaderBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username','email','score']