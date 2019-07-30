from django.contrib import admin
from django.urls import path
from . import views
from utils.speaker_trans import data_transfer

urlpatterns = [
    path('list/<int:year>/',views.get_speakers,name="get-speakers"),
    path('full_list/', views.get_speakers_list),
    path('add_new/',views.add_speaker,name="add-speaker"),
    path('generate_spreadsheet/',views.generate_spreadsheet,name="speaker-gen-csv"),
    path('data_transfer/', data_transfer)
    ]
