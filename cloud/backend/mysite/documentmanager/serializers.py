from django.urls import path
from . import views,models
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Company
        fields = "__all__"
