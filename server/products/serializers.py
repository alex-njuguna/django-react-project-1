from rest_framework import serializers

from .models import Product


"""serialize the product model to json"""
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__' 