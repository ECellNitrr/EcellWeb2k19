from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_mentors, name="get_mentors"),
    path('add_new/', views.add_mentor, name="add_mentor"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="mentor_gen_csv"),
]