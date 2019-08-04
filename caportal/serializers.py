from rest_framework.serializers import ModelSerializer, SerializerMethodField, ImageField
from django.db.models import Sum
from users.models import CustomUser
from decorators import get_user
from .models import *



class EcellUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class RanklistSerializer(ModelSerializer):
    total_points = SerializerMethodField() 
    
    def get_total_points(req,obj):
        return obj.review_set.exclude(points=-1).aggregate(Sum('points'))['points__sum']
    
    class Meta:
        model = CustomUser
        fields = '__all__'


class EcellUserRegistrationSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'username', 'contact', 'password', 'otp','user_type', 'applied', 'verified']



class ReviewSerializer(ModelSerializer):
    proof_by_name = SerializerMethodField()
    proof_by_email = SerializerMethodField()

    def get_proof_by_name(self,obj):
        return obj.proof_by.first_name + ' ' + obj.proof_by.last_name

    def get_proof_by_email(self,obj):
        return obj.proof_by.email
    
    class Meta:
        model = Review
        fields = '__all__'


class TaskSerializer(ModelSerializer):
    submissions = SerializerMethodField()
    uploaded_imgs = SerializerMethodField()

    def get_uploaded_imgs(self,obj):
        token = self.context['request'].headers.get('Authorization','')

        if not token=='':
            user = get_user(token)
            reviews = user.review_set.filter(task=obj.id)
            return ReviewSerializer(reviews, many=True).data
        return []


    def get_submissions(self,obj):
        return obj.review_set.all().count()

    class Meta:
        model = Task
        fields = '__all__'


class LeanTaskSerializer(ModelSerializer):
    submissions = SerializerMethodField()
    uploaded_imgs = SerializerMethodField()

    def get_uploaded_imgs(self,obj):
        token = self.context['request'].headers.get('Authorization','')

        if not token=='':
            user = get_user(token)
            reviews = user.review_set.filter(task=obj.id)
            return {
                'total': reviews.count(),
                'reviewed': reviews.exclude(points=-1).count(),
                'points': reviews.exclude(points=-1).aggregate(Sum('points'))['points__sum'],
            }
        return {}


    def get_submissions(self,obj):
        return obj.review_set.all().count()

    class Meta:
        model = Task
        fields = '__all__'



class TaskListAdminSerializer(ModelSerializer):
    pending = SerializerMethodField()
    accepted = SerializerMethodField()

    def get_pending(self,obj):
        return obj.review_set.filter(points=-1).count()


    def get_accepted(self,obj):
        return obj.review_set.exclude(points=-1).count()

    class Meta:
        model = Task
        fields = '__all__'