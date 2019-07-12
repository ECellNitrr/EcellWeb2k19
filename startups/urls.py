from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_startups, name="get_startups"),
    path('add_new/', views.add_startup, name="add_startup"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="startup_gen_csv"),
]