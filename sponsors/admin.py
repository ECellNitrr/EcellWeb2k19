from django.contrib import admin
from .models import Sponsor


class SponsorAdmin(admin.ModelAdmin):
    list_display=('name','importance','year','flag')

admin.site.register(Sponsor,SponsorAdmin)