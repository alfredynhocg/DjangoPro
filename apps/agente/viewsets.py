from rest_framework import viewsets
from .models import Agente
from .serializer import AgenteSerializer

class AgenteViewSet(viewsets.ModelViewSet):
    queryset = Agente.objects.all()
    serializer_class = AgenteSerializer