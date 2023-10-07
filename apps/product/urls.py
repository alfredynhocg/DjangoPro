from django.urls import path
from . import views
urlpatterns = [
  path('reporte/productos/<str:catego_name>', views.reporte_productos),

]

