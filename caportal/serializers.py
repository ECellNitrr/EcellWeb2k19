from rest_framework.serializers import ModelSerializer, SerializerMethodField
from users.models import CustomUser
from .models import *



class EcellUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'



class EcellUserRegistrationSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'username', 'contact', 'password', 'otp','user_type', 'applied', 'verified']



class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class SubmitTaskSerializer(ModelSerializer):
    task_obj = SerializerMethodField()

    def get_task_obj(self,obj):
        return TaskSerializer(obj.task).data

    class Meta:
        model = SubmitTask
        fields = '__all__'
