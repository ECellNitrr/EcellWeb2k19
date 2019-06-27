from rest_framework import serializers

from .models import CustomUser
class RegistrationSerializer(serializers.ModelSerializer):


    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password']
