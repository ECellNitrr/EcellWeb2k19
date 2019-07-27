from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.normal_gallery_imgs)
]
