from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.get_members, name="add_team"),
]