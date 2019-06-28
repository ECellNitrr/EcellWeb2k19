from django.shortcuts import render
import jwt
import json
from django.conf import settings

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegistrationSerializer
from django.http import JsonResponse

class RegistrationAPIView(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


    def post(self, request):
        user = json.loads(request.body.decode('UTF-8'))
        print('here')
        serializer = self.serializer_class(data=user)
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            error = serializer.errors
            error_msg = ""
            first_name = error.get('firstname',['',])
            last_name =error.get('lastname',['',])
            email_msg = error.get('email',['',])
            contact= error.get('contact',['',])
            print(email_msg[0]+first_name[0]+last_name[0]+contact[0])
            dict={
                "message": "Registration failed!",
                "token": " "
                }
            return Response(dict, status=status.HTTP_400_BAD_REQUEST)

        else:
            print('save')
            serializer.save()
            payload = {
            'email': serializer.validated_data['email']
            }
            token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256').decode('UTF-8')
            #return JsonResponse(serializer.errors, safe=False)
            dict1={
                  "message": "Registration successful!",
                  "token": token
                }
            return Response(dict1, status=status.HTTP_201_CREATED)
