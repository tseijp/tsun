from rest_framework.serializers import ModelSerializer, SerializerMethodField
from django.contrib.auth.models import User

from models import TsunModel


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username',)


class TsunSerializer(ModelSerializer):
    is_author = SerializerMethodField()
    author_name = SerializerMethodField()

    class Meta:
        model = TsunModel
        fields = ["id", "posted_time"]
