from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_speakers, name="get-speakers"),
    path('add_new/', views.add_speaker, name="add-speaker"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="speaker-gen-csv"),
]
