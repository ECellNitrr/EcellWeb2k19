from django.contrib import admin
from .models import Question, Questionset

# Register your models here.
admin.site.register(Question)
admin.site.register(Questionset)