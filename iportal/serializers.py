from rest_framework import serializers
from .models import *


class StartupSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Startup