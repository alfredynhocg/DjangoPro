from rest_framework import routers
from .viewsets import AgenteViewSet

route = routers.SimpleRouter()
route.register('agente',AgenteViewSet)

urlpatterns = route.urls