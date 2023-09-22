from django.contrib import admin
from .models import Agente

@admin.register(Agente)
class AgenteAdmin(admin.ModelAdmin):

    list_filter = ("user","fecha_vence")

    list_display = [
        'user',
        'photo',
        'telefono',
        'fecha_vence'
    ]



    class Meta:
        model = Agente