from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_events, name="get-events"),
    path('add_new/', views.add_event, name="add-event"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="event-gen-csv"),
]