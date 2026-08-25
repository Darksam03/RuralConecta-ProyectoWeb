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
    pagination_class = None


    def get_queryset(self):
        queryset = super().get_queryset()
        municipio = self.request.query_params.get('municipio')
        if municipio:
            if municipio.isdigit():
                queryset = queryset.filter(municipio_id=int(municipio))
            else:
                queryset = queryset.filter(municipio__nombre__iexact=municipio)
        
        categoria = self.request.query_params.get('categoria')
        if categoria:
            if categoria.isdigit():
                queryset = queryset.filter(categoria_id=int(categoria))
            else:
                queryset = queryset.filter(categoria__nombre__iexact=categoria)

        return queryset