from django.urls import path

from .views import RegistrationAPIView

urlpatterns = [
    path('signup/', RegistrationAPIView.as_view()),
]
