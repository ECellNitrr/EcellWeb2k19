from django.contrib import admin
from .models import *
from django import forms
from server import settings
from django_summernote.admin import SummernoteModelAdmin


class EventAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
        summernote_fields = ('details_html',)


admin.site.register(Event, EventAdmin)
admin.site.register(EventRegister)
admin.site.register(NoticeBoard)
admin.site.register(Inauguration)
