from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from team.views import get_members
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from android_app.views import latest_build

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('events/', include('events.urls')),
    path('startups/', include('startups.urls')),
    path('sponsors/', include('sponsors.urls')),
    path('mentors/', include('mentors.urls')),
    path('team/', include('team.urls')),
    path('speakers/', include('speakers.urls')),
    url(r'^is_update_available', latest_build),
]
urlpatterns+=staticfiles_urlpatterns()
# for the media urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# connecting the react
urlpatterns.append(re_path('', TemplateView.as_view(template_name="index.html")))

