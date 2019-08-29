from rest_framework import serializers
from .models import Sponsor, spons_types


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'
        
class SponsorListSerializer(serializers.ModelSerializer):
    spons_type = serializers.SerializerMethodField()
    category_importance = serializers.SerializerMethodField()

    def get_category_importance(self,instance):
        return spons_types[instance.spons_type]['importance']

    def get_spons_type(self,instance):
        return instance.get_spons_type_display()
        
    class Meta:
        model = Sponsor
        fields = ['id','name', 'details','pic','pic_url','contact','website','spons_type', 'importance', 'category_importance', 'year', 'flag','ecell_user']