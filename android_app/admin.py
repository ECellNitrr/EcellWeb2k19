from django.contrib import admin
from django.db import models
from .models import App

class AppAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'log', 'link', 'flag')
    search_fields = ('id', 'name')
    #list_filter = ('user_type',)
    #ordering = ('-created_at',)
    #readonly_fields = ('created_at', 'modified_at')

admin.site.register(App, AppAdmin)