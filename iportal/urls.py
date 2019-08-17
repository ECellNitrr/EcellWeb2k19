from django.urls import path
from .views import *
from rest_framework.routers import BaseRouter 

router = BaseRouter()
router.register('startup',StartupViewset)

url_patterns = []

url_patterns+=router.urls