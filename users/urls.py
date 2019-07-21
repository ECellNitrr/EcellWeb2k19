from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('register/', views.RegistrationAPIView.as_view(), name="sign_up"),
    path('login/', views.LoginAPIView.as_view(), name="sign_in"),
    path('verify_otp/', views.verify_otp, name="verify_otp"),
    path('forgot_password/', csrf_exempt(views.forgot_password), name="forgot_password"),
    path('change_password/', views.change_password, name="change_password"),
    path('resend_otp', views.resend_otp, name="resend_otp"),
    path('change_contact/', views.change_contact, name="change_contact"),
    path('is_user_verified/', views.is_user_verified, name="is_verified"),
    path('check_otp/', views.check_otp, name="check_otp")
]