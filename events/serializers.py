from rest_framework import serializers
from .models import *
from decorators import get_user



class NoticeBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoticeBoard
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventListSerializer(serializers.ModelSerializer):
    registered  = serializers.SerializerMethodField()
    no_of_ppl_registered = serializers.SerializerMethodField()

    def get_no_of_ppl_registered(self,obj):
        return obj.eventregister_set.count()

    def get_registered(self,obj):
        token = self.context['request'].headers.get('Authorization')

        if (not token == 'undefined') and token:
            user = get_user(token)
            user_registered = user.eventregister_set.filter(event_id=obj.id).count() 
            return True if user_registered else False
        return False

    class Meta:
        model = Event
        fields = ['id','name','venue','date','time','details','cover_pic','cover_pic_url','icon','icon_url','email',  'flag', 'year', 'ecell_user','registered','no_of_ppl_registered']