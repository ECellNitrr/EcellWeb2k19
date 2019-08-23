from django.contrib import admin
from django.urls import path
from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('', views.FullInvestorsAPIView)


urlpatterns = [
    path('generate_spreadsheet/',views.generate_spreadsheet,name="investor-gen-csv"),
]

urlpatterns += router.urls