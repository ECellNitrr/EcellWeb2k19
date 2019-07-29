from rest_framework.serializers import ModelSerializer
from users.models import CustomUser


class EcellUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

