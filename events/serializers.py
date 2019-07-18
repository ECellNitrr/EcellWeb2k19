from rest_framework import serializers
from .models import Event

# icon = serializers.ImageField(default='http://127.0.0.1:8000/static/defaults/ecell.png')
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        # Event.icon= serializers.CharField(default=config('HOST')+'static/defaults/ecell.png')
