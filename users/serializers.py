from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser
from django.core.exceptions import ValidationError


class RegistrationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        read_only_fields = ['id']
        fields = ['first_name', 'last_name', 'email', 'contact', 'password', 'otp','id']


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)

    class Meta:
        model = CustomUser
        fields = '__all__'


    def ecelluser_authenticate(self):
        data = self.validated_data
        email = data['email']
        password = data['password']
        user = authenticate(username=email, password=password)
        if user is None:
            raise ValidationError(
                'Invalid Credentials!'
            )
        return user