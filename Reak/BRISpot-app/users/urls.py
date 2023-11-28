from django.urls import path
from .views import *

urlpatterns = [
    path('', DetailUserView.as_view(), name = 'detail-user'),
]