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
from utils.auth_utils import send_otp, send_email_otp
from rest_framework.decorators import api_view
from decorators import ecell_user, client_check
from random import randint
from .models import CustomUser
import traceback

class RegistrationAPIView(APIView):
    authentication_classes = []
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    
    def post(self, request):
        res_message = "Registration failed"
        res_detail = ""
        res_token = ""
        res_status = status.HTTP_400_BAD_REQUEST
        user = request.data

        otp = str(randint(1000, 9999))
        password = user['password']
        if password is None or password=='':
            res_detail+='Error in field:Password-This field must not be empty'
            
        else:
            user['password'] = make_password(password)
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
                user = serializer.validated_data
                payload = {
                    'email': serializer.validated_data['email']
                }
                otp = send_email_otp(recipient_list=[serializer.validated_data['email']], otp=otp)
                token = jwt.encode(
                    payload,
                    settings.SECRET_KEY,
                    algorithm='HS256').decode('UTF-8')
                res_message = "Registration Successful"
                res_token = token
                res_status = status.HTTP_200_OK

            user_obj = CustomUser.objects.get(email=user['email'])

            return Response({
                "message": res_message,
                "detail": res_detail,
                "token": res_token,
                
                'first_name' : user['first_name'],
                'last_name' : user['last_name'],
                'email' : user['email'],
                'verified' : False,
                'contact' : user['contact'],
                'bquiz_score' : 0,
                'user_type' : 'GST',
                'linkedin' : 0,
                'facebook' : 0,
                'applied' : 0,
                'id': user_obj.id
            }, status=res_status)

class LoginAPIView(APIView):
    authentication_classes = []
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
        except Exception as e:
            error = serializer.errors
            error_msg = ""
            for err in error:
                error_msg += "Error in field: " + \
                    str(err) + "- " + str(error[err][0]) + " "
            res_detail = error_msg
        else:
            try:
                user = serializer.ecelluser_authenticate()
            except Exception as e:
                res_detail = str(e.message)
                return Response({
                    "message": res_message,
                    "detail": res_detail,
                    "token": res_token,
                }, status=res_status)

            else:
                payload = {
                    'email': serializer.validated_data['email']
                }
                token = jwt.encode(
                    payload,
                    settings.SECRET_KEY,
                    algorithm='HS256').decode('UTF-8')
                res_message = "Login successful"
                res_detail = ""
                res_token = token
                res_status = status.HTTP_200_OK

        # try:
                return Response({
                    "message": res_message,
                    "detail": res_detail,
                    "token": res_token,
                    
                    'first_name' : user.first_name,
                    'last_name' : user.last_name,
                    'email' : user.email,
                    'verified' : user.verified,
                    'contact' : user.contact,
                    'bquiz_score' : user.bquiz_score,
                    'user_type' : user.user_type,
                    'linkedin' : user.linkedin,
                    'facebook' : user.facebook,
                    'applied' : user.applied,
                    'id': user.id
                }, status=res_status)
        # except:
            # traceback.print_exc()



@api_view(['POST'])
@client_check
def forgot_password(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data
    email = req_data['email']
    print(email)
    try:
        user = CustomUser.objects.get(email=email)
        print(user)
    except:
        message = "Account with this email id doesn't exists. Kindly signup."
    else:
        email = user.email
        otp = send_email_otp([email])
        user.otp = otp
        user.save()
        message = "An otp has been sent to your mobile no to reset your password"
        res_status = status.HTTP_200_OK

    return Response({
            "message": message,
        }, status=res_status)

@api_view(['POST',])
@ecell_user 
@client_check
def verify_otp(request):
    res_status = status.HTTP_400_BAD_REQUEST
    user = request.ecelluser
    print(user)
    req_data = request.data
    print(req_data)
    if 'otp' not in req_data:
        message ='Please enter otp to verify your account'
    elif user.verified==True:
        message = 'Account already verified'
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
@client_check
def check_otp(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data 
    verified = False
    email = req_data['email']
    otp = req_data['otp']
    try:
        user = CustomUser.objects.get(email=email)
    except:
        message = "User account with this email id doesn't exist"
    else:
        user_otp = user.otp
        if str(otp)==user_otp:
            verified = True
            message = 'Otp verified'
            res_status = status.HTTP_200_OK
        else:
            message = 'Invlaid Otp'
    return Response({
        "message":message,
        "verified":verified
    }, status=res_status)

@api_view(['POST'])
@client_check
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
    email = user.email
    if otp:
        duration = user.last_modified
        if duration<=1200:
            otp = send_email_otp([email], otp=otp)
        else:
            otp = send_email_otp([email])
            user.otp = otp
            user.save()
        message = "An otp has been sent to your mobile no to reset your password"
        res_status = status.HTTP_200_OK

    return Response({
            "message": message,
        }, status=res_status)

@api_view(['POST'])
@ecell_user
@client_check
def change_contact(request):
    res_status = status.HTTP_400_BAD_REQUEST
    req_data = request.data
    new_email = req_data['email']
    user = request.ecelluser
    otp = send_email_otp([new_email])
    user.otp = otp
    user.email = new_email
    user.verified = False
    user.save()
    message = "An otp has been sent to new mobile no."
    res_status = status.HTTP_200_OK
    return Response({
            "message": message,
        }, status=res_status)
    
@api_view(['GET'])
@ecell_user
@client_check
def is_user_verified(request):
    user = request.ecelluser
    verified = user.verified
    res_status = status.HTTP_200_OK
    return Response({
        "verified":verified,
    }, status=res_status)



@api_view(['GET'])
@ecell_user
def request_ca_approval(request):
    res_status = status.HTTP_400_BAD_REQUEST
    user = request.ecelluser
    user.applied = True
    user.save()
    message = "Congradulations. Applied for CA successfully"
    res_status = status.HTTP_200_OK
    return Response({
            "message": message,
        }, status=res_status)


@api_view(['GET'])
@ecell_user
def get_user_details(request):
    res_status = status.HTTP_400_BAD_REQUEST
    user = request.ecelluser
    
    res_status = status.HTTP_200_OK
    return Response({
        'first_name' : user.first_name,
        'last_name' : user.last_name,
        'email' : user.email,
        'verified' : user.verified,
        'contact' : user.contact,
        'bquiz_score' : user.bquiz_score,
        'user_type' : user.user_type,
        'linkedin' : user.linkedin,
        'facebook' : user.facebook,
        'applied' : user.applied,
        'id': user.id
    }, status=res_status)
