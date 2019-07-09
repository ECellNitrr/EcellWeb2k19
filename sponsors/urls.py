from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/<int:year>/', views.get_sponsors, name="get-sponsors"),
    path('add_new/', views.add_sponsor, name="add-sponsor"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="sponsor-gen-csv"),
]