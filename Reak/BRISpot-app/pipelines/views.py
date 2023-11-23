from django.shortcuts import render
from pipelines.models import Pipeline
from django.http import HttpResponse
from .serializers import PipelineSerializer
from .models import Pipeline
from rest_framework.views import APIView
from rest_framework import generics

# Create your views here.

class PipelineView(generics.APIView):
    queryset = Pipeline.objects.all()
    serializer_class = PipelineSerializer