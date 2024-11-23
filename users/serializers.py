from django.contrib import auth
from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import *


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128, min_length=8,write_only=True)
    token = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'token']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)