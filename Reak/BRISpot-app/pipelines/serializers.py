from rest_framework import serializers
from .models import Pipeline

class PipelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipeline
        fields = '__all__'
        
class DetailPipelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipeline
        fields = '__all__'