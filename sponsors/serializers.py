from rest_framework import serializers
from .models import Sponsor


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'
class SponsorListSerializer(serializers.ModelSerializer):
    spons_type = serializers.SerializerMethodField()
    
    def get_spons_type(self,instance):
        return instance.get_spons_type_display()
        
    class Meta:
        model = Sponsor
        fields = ['id','name', 'details','pic','pic_url','contact','website','spons_type', 'importance', 'year', 'flag','ecell_user']
