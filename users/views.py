from django.shortcuts import render
import jwt
import json
from django.conf import settings

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegistrationSerializer, LoginSerializer
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from utils.auth_utils import send_otp


class RegistrationAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

    def post(self, request):
        res_message = "Registration failed! "
        res_detail = ""
        res_token = ""
        res_status = status.HTTP_400_BAD_REQUEST
        user = request.data
        user['password'] = make_password(user['password'])
        serializer = self.serializer_class(data=user)
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            error = serializer.errors
            first_name_msg = error.get('firstname', ['', ])
            last_name_msg = error.get('lastname', ['', ])
            email_msg = error.get('email', ['', ])
            contact_msg = error.get('contact', ['', ])
            print(error)
            res_detail = email_msg[0] + " " + first_name_msg[0] + \
                " " + last_name_msg[0] + " " + contact_msg[0]

        else:
            serializer.save()
            payload = {
                'email': serializer.validated_data['email']
            }
            send_otp(serializer.validated_data['contact'])
            token = jwt.encode(
                payload,
                settings.SECRET_KEY,
                algorithm='HS256').decode('UTF-8')
            res_message = "Registration Successful!"
            res_token = token
            res_status = status.HTTP_200_OK

        return Response({
            "message": res_message,
            "detail": res_detail,
            "token": res_token
        }, status=res_status)


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        res_message = "Login failed"
        res_detail = ""
        res_token = ""
        res_status = status.HTTP_400_BAD_REQUEST
        user = request.data
        serializer = self.serializer_class(data=user)
        try:
            serializer.is_valid(raise_exception=True)
        except BaseException:
            error = serializer.errors
            email_msg = error.get('email', ['', ])
            password_msg = error.get('password', ['', ])
            res_detail = email_msg[0] + " " + password_msg[0]
        else:
            try:
                serializer.ecelluser_authenticate()
            except Exception as e:
                res_detail = str(e.message)

            else:
                payload = {
                    'email': serializer.validated_data['email']
                }
                token = jwt.encode(
                    payload,
                    settings.SECRET_KEY,
                    algorithm='HS256').decode('UTF-8')
                res_message = "Login successful!"
                res_detail = ""
                res_token = token
                res_status = status.HTTP_200_OK

        return Response({
            "message": res_message,
            "detail": res_detail,
            "token": res_token
        }, status=res_status)

    # class SendOTPAPIView(APIView):
    #     permission_classes = (AllowAny,)
    #     serializer_class = SendOTPSerializer
    #     def send_otp(contact):
    #         otp = str(randint(1000, 9999))
    #         url = "http://www.merasandesh.com/api/sendsms"
    #         message = "Your OTP for E-Cell NIT Raipur APP is " + otp + "Please do not share this with anyone"
    #         querystring = {"username": config('MSG_USERNAME'), "password": config('MSG_PASSWORD'), "senderid": "SUMMIT",
    #                         "message": message, "numbers": contact, "unicode": "0"}

    #         response = requests.request("GET", url, params=querystring)
    #         print(response.text)
    #         print(response)
