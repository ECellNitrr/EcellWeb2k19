from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from team.views import get_members
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    #re_path('', TemplateView.as_view(template_name="index.html")),
    path('users/', include('users.urls')),
    path('events/', include('events.urls')),
    path('startups/', include('startups.urls')),
    path('sponsors/', include('sponsors.urls')),
    path('mentors/', include('mentors.urls')),
    path('team/', include('team.urls')),
    path('speakers/', include('speakers.urls')),
    # path('events/list/2019/^static/(?P<path>.*)$/')
]
urlpatterns+=staticfiles_urlpatterns()