# pyrefly: ignore [missing-import]
from rest_framework import serializers

from .models import Categoria, Municipio, Servicio


class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = '__all__'


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class ServicioSerializer(serializers.ModelSerializer):
    """
    Al leer (GET) devuelve los objetos anidados completos de municipio
    y categoria, tal como exige la especificación JSON de la API.
    Al escribir (POST/PUT/PATCH) acepta los IDs como enteros.
    """
    municipio = MunicipioSerializer(read_only=True)
    categoria = CategoriaSerializer(read_only=True)

    municipio_id = serializers.PrimaryKeyRelatedField(
        queryset=Municipio.objects.all(),
        source='municipio',
        write_only=True,
    )
    categoria_id = serializers.PrimaryKeyRelatedField(
        queryset=Categoria.objects.all(),
        source='categoria',
        write_only=True,
    )

    class Meta:
        model = Servicio
        fields = [
            'id',
            'nombre',
            'descripcion',
            'direccion',
            'horarios',
            'requisitos',
            'contacto',
            'municipio',
            'categoria',
            'municipio_id',
            'categoria_id',
        ]
