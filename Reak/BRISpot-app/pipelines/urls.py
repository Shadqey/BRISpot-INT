from django.urls import path
from .views import *

urlpatterns = [
    path('', PipelineView.as_view(), name = 'Pipeline'),
    
]