from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


def ecell_user(function):
    def wrap(request, *args, **kwargs):
        NO_TOKEN = Response({
                        "message":"No Token Provided"
                    }, status=status.HTTP_401_UNAUTHORIZED)
        
        INCORRECT_TOKEN = Response({
                            "message":"Incorrect Token"
                        }, status=status.HTTP_401_UNAUTHORIZED)


        try:
            token = request.META.get("HTTP_AUTHORIZATION", None)
            
            token = Token.objects.filter(key=token)
            if len(token)>0:
                token = token[0]
                request.ecelluser = token.user
            else:
                return INCORRECT_TOKEN
        except:
            if request.user.is_authenticated:    
                request.ecelluser = request.user
            else:
                return NO_TOKEN
            return function(request, *args, **kwargs)
    wrap.__doc__ = function.__doc__
    wrap.__name__ = function.__name__
    return wrap