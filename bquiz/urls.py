from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('live/', TemplateView.as_view(template_name="bquiz.html")),
    path('daily_leaderboard/',views.get_daily_leaderboard),
    path('leaderboard/',views.get_leaderboard),
    path('answer/',views.submit_answer),
    path('is_active/', views.is_bquiz_active)
]