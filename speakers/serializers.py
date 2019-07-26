from rest_framework import serializers
from .models import Speaker


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = '__all__'
class SpeakerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ['name','company','experience','profile_pic_url','profile_pic','email','contact','description','year', 'social_media', 'flag']
