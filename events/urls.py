from django.contrib import admin
from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt
from utils.events_trans import data_transfer
urlpatterns = [
    path('list/<int:year>/',views.get_events,name="get_events"),
    path('add_new/',views.add_event,name="add_event"),
    path('generate_spreadsheet/',views.generate_spreadsheet,name="event_gen_csv"),
    path('register/<int:id>/', csrf_exempt(views.event_register), name='eventregister'),
    path('data_transfer/', data_transfer)
]
