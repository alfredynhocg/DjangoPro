from django.db import models
from django.contrib.auth.models import User

class Agente(models.Model):
    user = models.OneToOneField(
        User,
        on_delete = models.CASCADE
    )
    
    photo = models.ImageField(
        upload_to = "administrador"
    )
    
    telefono = models.CharField(
        max_length = 15
    )
    
    fecha_vence = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name = "Fecha de vencimiento"
    )
    
    def __str__(self):
        return self.user.username
