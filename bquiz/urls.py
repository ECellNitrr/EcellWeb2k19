from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('live/', TemplateView.as_view(template_name="bquiz.html")),
]