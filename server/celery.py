import os
from celery import Celery

# normal configurations needed to integrate celery
# more in dashboard/management/commands
# to start celery run 'python3 manage.py celery'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')

app = Celery('server')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()