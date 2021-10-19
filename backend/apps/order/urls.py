from django.urls import path
from . import views

urlpatterns = [
    path('order/add/', views.OrderAdd.as_view(), name='order_add'),
    
]