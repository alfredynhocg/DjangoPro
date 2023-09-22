from rest_framework import routers
from .viewsets import CategoryViewSet

route = routers.SimpleRouter()
route.register('categoria',CategoryViewSet)

urlpatterns = route.urls