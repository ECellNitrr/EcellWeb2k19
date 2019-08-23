from celery import shared_task
from .models import *
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .models import Question, Questionset, Option
from .consumers import BquizConsumer
import time


@shared_task
def hello_celery():
    print('hello world celry')

@shared_task
def start_bquiz(qs_id):
    instance = Questionset.objects.get(pk=qs_id)

    questions = Question.objects.filter(set=instance)
    print(questions)
    channel_layer = get_channel_layer()
    print(channel_layer)
    time.sleep(5)


    for question in questions:
        question.flag = True
        question.save()
        wait = question.time_limit
        options = [opt.option for opt in Option.objects.filter(question=question)]
        options_id = [opt.id for opt in Option.objects.filter(question=question)]
        if question.meta is None or question.meta=='':
            meta_data = ''
        else:
            meta_data = 'https://ecell.nitrr.ac.in'+question.meta.url
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
                "options":options,
                "option_id":options_id,
                "right_answer":question.right_answer.right_option.id,
                "end":False
            }
        )
        time.sleep(wait)
        #for transition between two questions
        async_to_sync(channel_layer.group_send)(
            "bquiz",{
                "type":"quiz.question",
                "event":"New Question",
                "id":0,
                "show":False,
                "question":'',
                "description":'',
                "meta":'',
                "time_limit":0,
                "score":0,
                "options":[],
                "option_id":[],
                "right_answer":0,
                "end":False
            }
        )
        time.sleep(20) #time between two questions
            
    async_to_sync(channel_layer.group_send)(
    "bquiz",{
        "type":"quiz.question",
        "event":"New Question",
        "id":0,
        "show":False,
        "question":'',
        "description":'',
        "meta":'',
        "time_limit":0,
        "score":0,
        "options":[],
        "option_id":[],
        "right_answer":0,
        "end":True
    })