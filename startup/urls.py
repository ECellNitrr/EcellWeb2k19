from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_startups, name="get-startups"),
    path('add_new/', views.add_startup, name="add-startup"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="startup-gen-csv"),
]
