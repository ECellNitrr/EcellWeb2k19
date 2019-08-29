from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .models import Question, Questionset, Option, ActivateQuiz
from .consumers import BquizConsumer
import time
from .tasks import *


@receiver(post_save, sender=Questionset)
def announce_new_questions(sender, instance, created, **kwargs):
    print('signal triggered')
    try:
        activate_quiz = ActivateQuiz.objects.get(questionset=instance)
    except:
        pass
    else:
        if instance.flag and activate_quiz.active:
            start_bquiz.delay(instance.id)
        print('signal is done')