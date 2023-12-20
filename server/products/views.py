from django.shortcuts import render
from rest_framework import viewsets

from .models import Product
from .serializers import ProductSerializer


"""dispay/export contents of the product models"""
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()[::-1]
    serializer_class = ProductSerializer

