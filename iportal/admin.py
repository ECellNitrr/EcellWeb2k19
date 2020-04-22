from django.contrib import admin
from .models import *

admin.site.register(Job)
admin.site.register(JobApplication)
admin.site.register(Startup)
admin.site.register(StartupLogo)
admin.site.register(StartupPlanFile)