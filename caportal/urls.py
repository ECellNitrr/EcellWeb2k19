from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()
router.register('users',views.EcellUserViewset)


urlpatterns = [
    
]

urlpatterns+=router.urls