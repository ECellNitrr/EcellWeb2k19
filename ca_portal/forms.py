from django import forms
from django.contrib.auth.models import User
from .models import CA_Requests
from users.models import CustomUser
from django.http import JsonResponse

SOCIAL_TYPE = (
        ('FB', 'Facebook'),
        ('TW', 'Twitter'),
        ('LI', 'LinkedIn'),
		('WP', 'Whatsapp'),
    )

class UserForm(forms.ModelForm):
	username = forms.CharField(required=False)
	password = forms.CharField()
	email = forms.CharField()
	first_name = forms.CharField(required=True)
	last_name = forms.CharField(required=True)
	class Meta():
		model = User
		fields = ('first_name','last_name','email', 'password')
	def clean_email(self):
		email = self.cleaned_data.get('email')
		
		if email and User.objects.filter(email=email).exists():
			return JsonResponse({
				'success':False,
				'message':'Email must be unique'
			})
		return email

class UserProfileInfoForm(forms.ModelForm):
	contact_no = forms.CharField(required=True)
	avatar = forms.ImageField(required=False)
	linkedin = forms.CharField(required=False)
	facebook = forms.CharField(required=False)
	class Meta():
		model= CustomUser
		fields = ('contact_no','facebook','linkedin','avatar')

class ContactForm(forms.ModelForm):
	contact_no = forms.CharField()
	class Meta():
		model = CustomUser
		fields = ('contact_no',)

class RequestApprovalForm(forms.ModelForm):
	screenshot = forms.ImageField(required=True)
	social_platform = forms.CharField()
	class Meta():
		model = CA_Requests
		fields = ('screenshot','social_platform')