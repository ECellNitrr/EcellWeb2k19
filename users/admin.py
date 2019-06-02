from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import *
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    UserAdmin.add_fieldsets += (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'avatar', 'linkedin', 'facebook')}
        ),
    )
    UserAdmin.fieldsets += (
        (None, {
            'classes': ('wide',),
            'fields': ('avatar', 'linkedin', 'facebook')}
        ),
    )
    list_display = ['email','contact','user_type','verified']

admin.site.register(CustomUser, CustomUserAdmin)