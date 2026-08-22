# pyrefly: ignore [missing-import]
from rest_framework import viewsets

from .models import Categoria, Municipio, Servicio
from .serializers import (
    CategoriaSerializer,
    MunicipioSerializer,
    ServicioSerializer,
)


class MunicipioViewSet(viewsets.ModelViewSet):
    queryset = Municipio.objects.all()
    serializer_class = MunicipioSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.select_related(
        'municipio',
        'categoria'
    ).all()
    serializer_class = ServicioSerializer
    filterset_fields = ['municipio', 'categoria']