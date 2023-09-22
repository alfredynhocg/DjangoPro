from django.db import models
from apps.category.models import Categoria


class Product(models.Model):
    name = models.CharField(
        max_length = 100
    )
    
    code = models.IntegerField(
        help_text = 'El codigo de Barras'
    )
    
    cost = models.DecimalField(
        help_text = 'Costo del producto', 
        max_digits = 5, 
        decimal_places = 2
    )
    
    price = models.DecimalField(
        help_text = 'Precio de venta',
        max_digits = 5, 
        decimal_places = 2
    )
    
    stock = models.IntegerField(
        help_text = 'Stock del Producto'
    )
    
    alerts = models.IntegerField(
        help_text = 'Alerta para cantidad de productos'
    )
    
    image = models.ImageField(
        upload_to = 'product'
    )
    
    document = models.FileField(
        upload_to = 'pdf', 
        storage = None, 
        max_length = 100
    )
    
    category = models.ForeignKey(
        Categoria,  
        on_delete = models.CASCADE
    )
    
    def __str__(self):
        return self.name