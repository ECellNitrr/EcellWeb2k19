from django.urls import path

from .views import RegistrationAPIView

urlpatterns = [
    path('register/', RegistrationAPIView.as_view()),
]
