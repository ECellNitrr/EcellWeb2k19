import shlex
import subprocess

from django.core.management.base import BaseCommand
from django.utils import autoreload
from decouple import config


def restart_celery():
    cmd = 'pkill celery'
    subprocess.call(shlex.split(cmd))
    cmd = 'celery worker -B -l info -A server'
    subprocess.call(shlex.split(cmd))


class Command(BaseCommand):

    def handle(self, *args, **options):
        print('Starting celery worker with autoreload....')
        # autoreload.main(restart_celery)
        restart_celery()