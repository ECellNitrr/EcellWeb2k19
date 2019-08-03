from django.shortcuts import render
from users.views import CustomUser
from .serializers import *
from decorators import relax_ecell_user

from rest_framework.decorators import api_view, renderer_classes, parser_classes
from rest_framework.parsers import JSONParser, MultiPartParser,FileUploadParser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer
from rest_framework import generics
from rest_framework import status
import jwt

from django_filters import rest_framework as filters

from django.contrib.auth.hashers import make_password
from users.serializers import RegistrationSerializer


class EcellUserViewset(ModelViewSet):
    queryset = CustomUser.objects.filter(is_superuser=False)
    serializer_class = EcellUserSerializer


class TaskViewset(ModelViewSet):
    queryset = Task.objects.filter(deleted=False)
    serializer_class = TaskSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class RanklistView(generics.ListAPIView):
    queryset = CustomUser.objects.filter(user_type='CAB')
    serializer_class = RanklistSerializer


class TaskListAdminView(generics.ListAPIView):
    queryset = Task.objects.filter(deleted=False)
    serializer_class = TaskListAdminSerializer


class ReviewViewset(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('proof_by', 'points','task')



@api_view(['GET'])
@relax_ecell_user
def get_non_submited_tasks(req):
    user =  req.ecelluser

    non_submited_tasks = Task.objects.exclude(review__proof_by=user.id)
    return Response(LeanTaskSerializer(non_submited_tasks,many=True,context={'request': req}).data)


@api_view(['GET'])
@relax_ecell_user
def get_submited_tasks(req):
    user =  req.ecelluser

    submited_tasks = Task.objects.filter(review__proof_by=user.id).distinct()
    return Response(LeanTaskSerializer(submited_tasks,many=True,context={'request': req}).data)




@api_view(['POST'])
@renderer_classes([JSONRenderer])
def create_user(req):
    user = JSONParser().parse(req)
    user['username'] = user['email'] 
    user['verified'] = True
    user['applied'] = False

    res_message = "Registration failed! "
    res_detail = ""
    res_token = ""
    res_status = status.HTTP_400_BAD_REQUEST

    password = user['password']
    if password is None or password=='':
        res_detail+='Error in field:Password-This field must not be empty'
        
    else:
        user['password'] = make_password(password)
        user['otp'] = 0000
        serializer = EcellUserRegistrationSerializer(data=user)
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
            # payload = {
            #     'email': serializer.validated_data['email']
            # }

            # token = jwt.encode(
            #     payload,
            #     settings.SECRET_KEY,
            #     algorithm='HS256').decode('UTF-8')
            res_message = "Registration Successful!"
            # res_token = token
            res_status = status.HTTP_200_OK

        return Response({
            "message": res_message,
            "detail": res_detail,
            # "token": res_token,
            
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
        }, status=res_status)


