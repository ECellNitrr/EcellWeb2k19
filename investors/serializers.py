from rest_framework import serializers
from .models import Investor


class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = '__all__'
class InvestorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = ['name','company','experience','profile_pic_url','profile_pic','email','contact','description','year', 'social_media', 'flag']
