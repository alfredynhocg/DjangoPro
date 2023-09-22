from django.contrib import admin
from .models import Categoria


@admin.action(description="Marcar los registros como publicados")
def make_published(modeladmin, request, queryset):
    queryset.update(publish="t")

@admin.action(description="Marcar los registros como no publicados")
def make_published_f(modeladmin, request, queryset):
    queryset.update(publish="f")


@admin.register(Categoria)
class AdminCategoria(admin.ModelAdmin):
    
    search_fields = ["name","slug"]
    list_filter = ("name","publish")
    actions = [make_published, make_published_f]

    list_display = [
        'id',
        'name',
        'slug',
        'publish',
    ]
    
    class Model:
        model = Categoria
        ordering = ("id")


    