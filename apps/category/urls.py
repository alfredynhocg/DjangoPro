from django.urls import path
from .views import CategoriaListView, CategoriaCreateView, CategoriaUpdateView, CategoriaEliminarView

urlpatterns = [
    path('listar_categoria/',CategoriaListView.as_view(),name="listar-cat"),
    path('crear_categoria/',CategoriaCreateView.as_view(),name="crear-cat"),
    path('modificar_categoria/<int:pk>',CategoriaUpdateView.as_view(),name="modificar-cat"),
    path('eliminar_categoria/<int:pk>',CategoriaEliminarView.as_view(),name="eliminar-cat")
]

