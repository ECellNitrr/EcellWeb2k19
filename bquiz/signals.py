from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .models import Question, Questionset
import time

@receiver(post_save, sender=Questionset)
def announce_new_questions(sender, instance, created, **kwargs):
    if instance.flag:
        questions = Question.objects.filter(set=instance)
        print(questions)
        channel_layer = get_channel_layer()
        print(channel_layer)
        time.sleep(2)
        for question in questions:
            question.flag = True
            question.save()
            wait = question.time_limit
            if question.meta is None or question.meta=='':
                meta_data = ''
            else:
                meta_data = question.meta.url
            print(question.question)
            async_to_sync(channel_layer.group_send)(
                "bquiz",{
                    "type":"quiz.question",
                    "event":"New Question",
                    "id":question.id,
                    "show":True,
                    "question":question.question,
                    "description":question.description,
                    "meta":meta_data,
                    "time_limit":question.time_limit,
                    "score":question.score,
                }
            )
            time.sleep(wait)
            #for transition between two questions
            async_to_sync(channel_layer.group_send)(
                "bquiz",{
                    "type":"quiz.question",
                    "event":"New Question",
                    "id":"",
                    "show":False,
                    "question":'',
                    "description":'',
                    "meta":'',
                    "time_limit":0,
                    "score":'',
                }
            )
            time.sleep(10) #time between two questions
            
        instance.flag = False
        instance.save()