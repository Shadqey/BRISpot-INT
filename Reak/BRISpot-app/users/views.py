from django.shortcuts import render
from users.models import User
from django.http import HttpResponse, Http404
from users.serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

# Create your views here.

class DetailUserView(generics.APIView):
    def get(self, request, pk=None, format=None):
        data = self.get_object(pk)
        serializer = UserSerializer(data)
        
    def post(self, request, format=None):
        data = request.data
        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = Response()
        response.data = {
            'message' : 'A New User is Created',
            'data' : serializer.data
        }
        
        return response