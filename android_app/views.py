from django.shortcuts import render
from .models import App
# from django.http import Response
from rest_framework import status
from .models import App
from rest_framework.decorators import api_view
from rest_framework.response import Response

# def get_app(request):
# 	app_ver = app.objects.all().values()
# 	app_ver_list = list(app_ver)
# 	return JsonResponse(app_ver_list, safe=False)
@api_view(['GET',])
def latest_build(request):
    res_version = " "
    res_url = ""
    res_message = "Sorry no updates available"
    if(App.objects.filter(flag=True).exists()):
        app = App.objects.get(flag=True)
        res_status= status.HTTP_200_OK
        res_version=app.version
        res_url= app.link
        res_message= app.log
    else:
        res_status= status.HTTP_404_NOT_FOUND
    return Response({
        "message": res_message,
        "version": res_version,
        "URL": res_url,
        }, status= res_status
    )