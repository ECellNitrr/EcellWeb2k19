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
    path('submit_task_score/', views.submit_task_score),
    # path('submit_task_patch_alt/<int:review_id>/',views.submit_task_patch_alt),
]

urlpatterns+=router.urls