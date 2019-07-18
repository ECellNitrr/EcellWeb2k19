from django.urls import path

from .views import RegistrationAPIView, LoginAPIView

urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name="Sign_up"),
    path('login/', LoginAPIView.as_view(), name="Sign_in")
]
