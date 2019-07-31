from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()
router.register('users',views.EcellUserViewset)
router.register('tasks',views.TaskViewset)
router.register('submit_task',views.SubmitTaskViewset)


urlpatterns = [
    path('create_user/', views.create_user),
    path('non_submited_tasks/', views.get_non_submited_tasks),
]

urlpatterns+=router.urls