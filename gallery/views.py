from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from decouple import config
import os


@api_view(['GET'])
@permission_classes([AllowAny])
def normal_gallery_imgs(request):
    gallery_list = {}
    base_dir = './static/gallery_imgs/'

    for img_folder in os.listdir(base_dir):
        gallery_list[img_folder] = []
        for img in os.listdir(base_dir+img_folder):
            if not img.count('ab.'):
                big_img = config('HOST')+base_dir.replace('.','/media')+img_folder+'/'+img
                small_img = big_img.replace('a.','ab.')
                gallery_list[img_folder].append({
                    'big': big_img,
                    'small': small_img
                })


    return JsonResponse({
        'gallery': gallery_list
    })