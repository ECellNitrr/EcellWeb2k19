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
    submissions = SerializerMethodField()

    def get_submissions(self,obj):
        return obj.review_set.all().count()

    class Meta:
        model = Task
        fields = '__all__'



class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'



# class SubmitTaskSerializer(ModelSerializer):
#     task_obj = SerializerMethodField()
#     proof_by_name = SerializerMethodField()
#     proof_by_email = SerializerMethodField()


#     def get_proof_by_email(self,obj):
#         return obj.proof_by.email


#     def get_proof_by_name(self,obj):
#         return obj.proof_by.first_name.capitalize() + ' ' + obj.proof_by.last_name.capitalize()


#     def get_task_obj(self,obj):
#         return TaskSerializer(obj.task).data

#     class Meta:
#         model = SubmitTask
#         fields = '__all__'
