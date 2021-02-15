from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.authentication import TokenAuthentication

from models import TsunModel
from .serializers import TsunSerializer
from .paginations import TsunPagination


class TsunViewSet(GenericViewSet):
    ordering = "-id"
    queryset = TsunModel.objects.all()
    serializer_class = TsunSerializer
    pagination_class = TsunPagination
    permission_classes = (AllowAny, )
    authentication_classes = (TokenAuthentication, )
