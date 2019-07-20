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
from rest_framework.decorators import api_view
from decorators import ecell_user
from random import randint
from .models import CustomUser


class RegistrationAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

    def post(self, request):
        res_message = "Registration failed! "
        res_detail = ""
        res_token = ""
        res_status = status.HTTP_400_BAD_REQUEST
        user = request.data
        otp = str(randint(1000, 9999))
        user['password'] = make_password(user['password'])
        user['otp'] = otp
        serializer = self.serializer_class(data=user)
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            error = serializer.errors
            error_msg = ""
            for err in error:
                error_msg += "Error in field: " + \
                    str(err) + "- " + str(error[err][0]) + " "
            res_detail = error_msg

        else:
            serializer.save()
            payload = {
                'email': serializer.validated_data['email']
            }
            otp = send_otp(serializer.validated_data['contact'], otp=otp)
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
                user = serializer.ecelluser_authenticate()
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

        try:
            return Response({
                "message": res_message,
                "detail": res_detail,
                "token": res_token,
                
                'first_name' : user['first_name'],
                'last_name' : user['last_name'],
                'email' : user['email'],
                'verified' : user['verified'],
                'contact' : user['contact'],
                'bquiz_score' : user['bquiz_score'],
                'avatar' : user['avatar'],
                'user_type' : user['user_type'],
                'linkedin' : user['linkedin'],
                'facebook' : user['facebook'],
                'created_at' : user['created_at'],
                'modified_at' : user['modified_at'],
            }, status=res_status)
        except:
            return Response({
                "message": res_message,
                "detail": res_detail,
                "token": res_token,
            }, status=res_status)


@api_view(['POST'])
def forgot_password(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data
    email = req_data['email']
    try:
        user = CustomUser.objects.get(email=email)
        print(user)
    except:
        message = "Account with this email id doesn't exists. Kindly signup."
    else:
        contact = user.contact
        otp = send_otp(contact)
        user.otp = otp
        user.save()
        message = "An otp has been sent to your mobile no to reset your password"
        res_status = status.HTTP_200_OK

    return Response({
            "message": message,
        }, status=res_status)

@api_view(['POST'])
@ecell_user
def verify_otp(request):
    res_status = status.HTTP_400_BAD_REQUEST
    user = request.ecelluser
    req_data = request.data
    if 'otp' not in req_data:
        message='Please enter otp to verify your account'
    else:
        otp = req_data['otp']
        if str(otp)==user.otp:
            user.verified=True
            user.save()
            message = 'Account verified successfully'
            res_status = status.HTTP_200_OK
        else:
            message = 'Invalid otp'

    return Response({
            "message": message,
        }, status=res_status)

@api_view(['POST'])
def change_password(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data
    email = req_data['email']
    otp = req_data['otp']
    password = req_data['password']
    try:
        user = CustomUser.objects.get(email=email)
    except:
        message = "Account with this email id doesn't exists. Kindly signup."
    else:
        contact = user.contact
        user_otp = user.otp
        if str(otp)==user_otp:
            user.set_password(password)
            user.save()
            message = 'Password changed successfully'
            res_status = status.HTTP_200_OK
        else:
            message = 'Invalid otp'
            
    return Response({
            "message": message,
        }, status=res_status)

@api_view(['GET'])
@ecell_user
def resend_otp(request):
    res_status = status.HTTP_400_BAD_REQUEST
    user = request.ecelluser
    otp = user.otp
    contact = user.contact
    print(otp)
    if otp:
        duration = user.last_modified
        print(duration)
        if duration<=10000:
            otp = send_otp(contact, otp=otp)
        else:
            otp = send_otp(contact)
            user.otp = otp
            user.save()
        message = "An otp has been sent to your mobile no to reset your password"
        res_status = status.HTTP_200_OK

    return Response({
            "message": message,
        }, status=res_status)

@api_view(['POST'])
@ecell_user
def change_contact(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data
    new_contact = req_data['contact']
    user = request.ecelluser
    otp = send_otp(new_contact)
    user.otp = otp
    user.contact = new_contact
    user.verified = False
    user.save()
    message = "An otp has been sent to new mobile no."
    res_status = status.HTTP_200_OK
    return Response({
            "message": message,
        }, status=res_status)