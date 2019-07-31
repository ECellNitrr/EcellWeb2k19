from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Question, Questionset
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
 
