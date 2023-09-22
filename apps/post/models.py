from django.db import models
from apps.category.models import Categoria

class Post(models.Model):
    title = models.CharField(
        max_length = 100
    )
    
    content = models.TextField(
        help_text = 'descripcion'
    )
    
    slug = models.SlugField(
        max_length = 100
    )
    
    category = models.ForeignKey(
        Categoria, 
        on_delete = models.CASCADE
    )
    
    publish = models.BooleanField(
        default = True
    )
    
    def __str__(self):
        return self.title
