from django.apps import AppConfig


class IportalConfig(AppConfig):
    name = 'iportal'
    
    def ready(self):
        from . import signals