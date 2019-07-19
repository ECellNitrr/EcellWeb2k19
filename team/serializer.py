from rest_framework import serializers
from .models import Member


class HigherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class LowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'