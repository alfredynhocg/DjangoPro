from django.urls import path
from .views import PostListView, PostCreateView
# , PostCreateView, PostUpdateView, PostEliminarView
# listar, crear , modificar,eliminar, detalle
# c r u d 

urlpatterns = [
    path('listar_post/',PostListView.as_view(),name="listar-post"),
    path('crear_post/',PostCreateView.as_view(),name="crear-post"),
    # path('modificar_post/<int:pk>',PostUpdateView.as_view(),name="modificar-post"),
    # path('eliminar_post/<int:pk>',PostEliminarView.as_view(),name="eliminar-post")
]

