from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import *
from .models import CustomUser, CampusAmbassadorProfile

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    UserAdmin.add_fieldsets += (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name','contact', 'avatar', 'linkedin', 'facebook','user_type')}
        ),
    )
    UserAdmin.fieldsets += (
        (None, {
            'classes': ('wide',),
            'fields': ('contact','avatar', 'linkedin', 'facebook','user_type')}
        ),
    )
    list_display = ['email','contact','user_type','otp', 'bquiz_score', 'verified']

class CampusAmbassadorProfileAdmin(admin.ModelAdmin):
    def get_email(self,object):
        return object.user.email
    def get_first_name(self,object):
        return object.user.first_name
    def get_last_name(self,object):
        return object.user.last_name
    def get_contact(self,object):
        return object.user.contact
    get_email.short_description = 'email'
    get_first_name.short_description = 'first_name'
    get_last_name.short_description = 'last_name'
    get_contact.short_description = 'contact'
    get_email.admin_order_field = 'user__email'
    get_first_name.admin_order_field = 'user__first_name'
    get_last_name.admin_order_field = 'user__last_name'

    list_display = ('get_email','get_first_name','get_last_name','get_contact','college')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(CampusAmbassadorProfile, CampusAmbassadorProfileAdmin)
