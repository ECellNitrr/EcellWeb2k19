from rest_framework import serializers

from .models import CustomUser
class RegistrationSerializer(serializers.ModelSerializer):


    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'contact', 'password']
