from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('events/', include('events.urls')),
    path('startups/', include('startups.urls')),
    path('sponsors/', include('sponsors.urls')),
    path('mentors/', include('mentors.urls')),
    path('team/', include('team.urls')),
    path('speakers/', include('speakers.urls')),
    path('portal/', include('ca_portal.urls')),
]

# for the media urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# connecting the react
urlpatterns.append(re_path('', TemplateView.as_view(template_name="index.html")))

