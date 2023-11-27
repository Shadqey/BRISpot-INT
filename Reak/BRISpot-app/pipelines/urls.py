from django.urls import path
from .views import *

urlpatterns = [
    path('list/', PipelineView.as_view(), name = 'pipeline'),
    path('detail/<int:id>/', DetailPipelineView.as_view(), name = 'detail-pipeline'),
]