from django.contrib import admin
from .models import Question, Questionset, Option

# Register your models here.
admin.site.register(Question)
admin.site.register(Questionset)
admin.site.register(Option)