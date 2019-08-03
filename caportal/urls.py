from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()
router.register('users',views.EcellUserViewset)
router.register('tasks',views.TaskViewset)
router.register('reviews',views.ReviewViewset)


urlpatterns = [
    path('create_user/', views.create_user),
    path('non_submited_tasks/', views.get_non_submited_tasks),
    path('submited_tasks/', views.get_submited_tasks),
    path('task_list_admin/',views.TaskListAdminView.as_view()),
    path('ranklist/',views.RanklistView.as_view()),
    # path('submit_task_score/', views.submit_task_score),
    # path('submit_task_patch_alt/<int:review_id>/',views.submit_task_patch_alt),
]

urlpatterns+=router.urls