from rest_framework import serializers
from .models import Event

# icon = serializers.ImageField(default='http://127.0.0.1:8000/static/defaults/ecell.png')
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class EventListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name','venue','date','time','details','cover_pic_url','icon_url','email',  'flag', 'year', 'ecell_user']
