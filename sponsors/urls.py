from django.contrib import admin
from django.urls import path
from . import views
from utils.sponsors_trans import data_transfer

urlpatterns = [
    path('list/<int:year>/', views.get_sponsors, name="get_sponsors"),
    path('sorted_list/<int:year>/', views.get_sorted_sponsors, name="get_sponsors"),
    path('add_new/', views.add_sponsor, name="add_sponsor"),
    path('generate_spreadsheet/', views.generate_spreadsheet, name="sponsor_gen_csv"),
    path('data_transfer/', data_transfer),
    path('spons_years/', views.spons_years)
]