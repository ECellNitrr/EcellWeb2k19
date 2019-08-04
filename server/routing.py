from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from channels.auth import AuthMiddlewareStack
from bquiz.consumers import BquizConsumer
from django.conf.urls import url

application = ProtocolTypeRouter({
    'websocket':URLRouter([
        path('bquiz/live/question/',BquizConsumer),
    ])
})