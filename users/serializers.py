from rest_framework import serializers

from .models import CustomUser
class RegistrationSerializer(serializers.ModelSerializer):
    """Serializers registration requests and creates a new user."""


    class Meta:
        model = CustomUser
        # List all of the fields that could possibly be included in a request
        # or response, including fields specified explicitly above.
        fields = ['email', 'username', 'password', 'token']
