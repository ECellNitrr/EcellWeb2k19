from rest_framework import serializers
from .models import Mentor


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = '__all__'
class MentorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ['id','name','email','contact','detail','description','profile_pic_url','year', 'flag']