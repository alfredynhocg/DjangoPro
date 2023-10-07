from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import  JsonResponse
from .models import Product
from .serializer import ReporteProductoSerializer
# Create your views here.

@api_view(["GET"])
def reporte_productos(request,catego_name):
    """
    Listado de productos filtrado por categoria
    """
    try:
        productos = Product.objects.filter(category__name=catego_name)
        return JsonResponse(
            ReporteProductoSerializer({
                "categoria_nombre": "cantidad",
                "productos": productos
            }).data,
            safe=False,
            status=200,
        )
    except Exception as e:
        #logger.critical("Error al obtener el reporte de productos: %s", e)
        return JsonResponse({"message": str(e)}, safe=False, status=400)