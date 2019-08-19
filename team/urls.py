from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_members, name="add_team"),
    path('team_years/', views.team_years)
]