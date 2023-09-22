from rest_framework import viewsets

from .models import Categoria
from .serializer import CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategorySerializer