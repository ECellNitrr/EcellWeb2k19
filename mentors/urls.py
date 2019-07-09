from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_mentors, name="get-mentors"),
    path('add_new/', views.add_mentor, name="add-mentor"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="mentor-gen-csv"),
]