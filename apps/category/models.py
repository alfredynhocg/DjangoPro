from django.db import models

class Categoria(models.Model):
    
    name = models.CharField(
        max_length = 100,
        help_text = 'Nombre de Categoria'
    )
    
    slug = models.SlugField(
        max_length = 200
    )
    
    publish = models.BooleanField(
        default = True
    )
    
    def __str__(self):
        return self.name