from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import App
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

# def get_app(request):
# 	app_ver = app.objects.all().values()
# 	app_ver_list = list(app_ver)
# 	return JsonResponse(app_ver_list, safe=False)
@api_view(['GET', ])
def latest_build(request):
	res_version=""
	res_url=""
	res_log=""
	if(App.objects.filter(flag=True).exists()):
		app = App.objects.get(flag=True)
		res_message='App details returned'
		res_version = app.version
		res_url = app.link
		res_log = app.log
		res_status=status.HTTP_200_OK
	else:
		res_message = 'App details not available'
		res_status= status.HTTP_404_NOT_FOUND
	return Response({
        "message": res_message,
		"version": res_version,
		"URL": res_url,
		"Log": res_log
	}, status=res_status)