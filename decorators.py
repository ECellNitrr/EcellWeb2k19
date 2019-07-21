import jwt
from decouple import config
from users.models import CustomUser
from rest_framework import status
from rest_framework.response import Response

def ecell_user(function):
    def wrap(request, *args, **kwargs):
        
        NO_TOKEN = Response({
                        "message":"No Token Provided!"
                    }, status=status.HTTP_401_UNAUTHORIZED)
        
        DOES_NOT_EXIST = Response({
                            "message":"User does not exist!"
                    }, status=status.HTTP_404_NOT_FOUND)
        
        ACCESS_ERROR = Response({
                            "message": "You are not authorized to use this API"
                    }, status=status.HTTP_401_UNAUTHORIZED)

        token = request.META.get("HTTP_AUTHORIZATION", None)
        if token is not None: 
            try:
                payload = jwt.decode(token, config('SECRET_KEY'))
            except:
                return DOES_NOT_EXIST
            else:
                ecell_user_email = payload['email']
                try:
                    ecell_user = CustomUser.objects.get(email=ecell_user_email)
                except:
                    DOES_NOT_EXIST['message'] = 'The account has been deleted or banned'
                    return DOES_NOT_EXIST
                else:
                    request.ecelluser = ecell_user
        else:
            return NO_TOKEN

        return function(request, *args, **kwargs)
        wrap.__doc__ = function.__doc__
        wrap.__name__ = function.__name__
    return wrap