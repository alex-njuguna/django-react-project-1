from django.shortcuts import render
from rest_framework import viewsets

from .models import Product
from .serializers import Productserializer


"""dispay/export contents of the product models"""
class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Productserializer

