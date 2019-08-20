from django.contrib import admin
from django.urls import path
from . import views
# from utils.investor_trans import data_transfer

urlpatterns = [
    path('list/<int:year>/',views.get_investors,name="get-investors"),
    path('full_list/', views.get_investors_list),
    path('add_new/',views.add_investor,name="add-investor"),
    path('generate_spreadsheet/',views.generate_spreadsheet,name="investor-gen-csv"),
    # path('data_transfer/', data_transfer)
    ]
