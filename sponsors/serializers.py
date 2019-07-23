from rest_framework import serializers
from .models import Sponsor


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'
class SponsorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ['name', 'details','pic_url','contact','website','spons_type','year', 'flag','ecell_user']