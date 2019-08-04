from django.apps import AppConfig


class BquizConfig(AppConfig):
    name = 'bquiz'

    def ready(self):
        from . import signals