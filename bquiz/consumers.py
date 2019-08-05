from channels.consumer import AsyncConsumer
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Answer, Question, QuestionAcknowledge
import asyncio
import json
class BquizConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()
        print('connected')
        await self.channel_layer.group_add("bquiz", self.channel_name)
        print(f"Added {self.channel_name}")

    async def disconnect(self):
        await self.channel_layer.group_discard("bquiz", self.channel_name)
        print(f"Added {self.channel_name}")

    async def quiz_question(self, event):
        await self.send_json(event)
        print(f"Got message {event}")

    async def websocket_receive(self, event): #to recieve from socket
        print(event)
        print(event['text'])
        dic = json.loads(event['text'])
        print(dic)
        option = dic['option']
        question = dic['question']
        q_id = dic['id']
        answer = Answer()
        question = Question.objects.get(id=q_id)
        question.option = option
        print(dic['option'])
        
        # print(event['option'])
        # resp = 'Failure'
        # if event['text']=='1':
        #     resp = 'Congrats'
        # await self.send_json({
        #     'type':'websocket.send',
        #     'text': resp
        # })
