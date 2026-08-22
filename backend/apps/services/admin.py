
# pyrefly: ignore [missing-import]
from django.contrib import admin

from .models import Categoria, Municipio, Servicio


@admin.register(Municipio)
class MunicipioAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'nombre',
        'subregion',
    )

    search_fields = (
        'nombre',
        'subregion',
    )


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'nombre',
        'icono',
    )

    search_fields = (
        'nombre',
        'descripcion',
    )


@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'nombre',
        'municipio',
        'categoria',
    )

    list_filter = (
        'municipio',
        'categoria',
    )

    search_fields = (
        'nombre',
        'descripcion',
        'direccion',
        'contacto',
    )