from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ReporteProductoSerializer(serializers.Serializer):
    categoria_nombre = serializers.CharField()
    productos = ProductSerializer(many=True)