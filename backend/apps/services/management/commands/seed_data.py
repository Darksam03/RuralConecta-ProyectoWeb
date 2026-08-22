
# pyrefly: ignore [missing-import]
from django.core.management.base import BaseCommand

# pyrefly: ignore [missing-import]
from apps.services.models import Categoria, Municipio, Servicio


class Command(BaseCommand):
    help = 'Crea datos iniciales para RuralConecta'

    def handle(self, *args, **options):
        # ---------------------------------------------------------
        # MUNICIPIOS
        # ---------------------------------------------------------

        municipios_data = [
            {
                'nombre': 'Jardín',
                'subregion': 'Suroeste',
            },
            {
                'nombre': 'Andes',
                'subregion': 'Suroeste',
            },
            {
                'nombre': 'Támesis',
                'subregion': 'Suroeste',
            },
            {
                'nombre': 'Jericó',
                'subregion': 'Suroeste',
            },
            {
                'nombre': 'Urrao',
                'subregion': 'Suroeste',
            },
        ]

        municipios = {}

        for data in municipios_data:
            municipio, created = Municipio.objects.get_or_create(
                nombre=data['nombre'],
                defaults={
                    'subregion': data['subregion'],
                }
            )

            municipios[municipio.nombre] = municipio

            if created:
                self.stdout.write(
                    self.style.SUCCESS(
                        f'Municipio creado: {municipio.nombre}'
                    )
                )

        # ---------------------------------------------------------
        # CATEGORÍAS
        # ---------------------------------------------------------

        categorias_data = [
            {
                'nombre': 'Salud',
                'descripcion': (
                    'Servicios de salud, atención primaria, '
                    'jornadas y programas de prevención.'
                ),
                'icono': 'salud',
            },
            {
                'nombre': 'Educación',
                'descripcion': (
                    'Instituciones educativas, programas de formación '
                    'y oportunidades de capacitación.'
                ),
                'icono': 'educacion',
            },
            {
                'nombre': 'Transporte',
                'descripcion': (
                    'Información sobre rutas, horarios y servicios '
                    'de transporte rural.'
                ),
                'icono': 'transporte',
            },
            {
                'nombre': 'Servicios públicos',
                'descripcion': (
                    'Información relacionada con agua, energía, '
                    'residuos y otros servicios públicos.'
                ),
                'icono': 'servicios-publicos',
            },
            {
                'nombre': 'Apoyos sociales',
                'descripcion': (
                    'Programas sociales, subsidios y ayudas '
                    'disponibles para la comunidad.'
                ),
                'icono': 'apoyos-sociales',
            },
        ]

        categorias = {}

        for data in categorias_data:
            categoria, created = Categoria.objects.get_or_create(
                nombre=data['nombre'],
                defaults={
                    'descripcion': data['descripcion'],
                    'icono': data['icono'],
                }
            )

            categorias[categoria.nombre] = categoria

            if created:
                self.stdout.write(
                    self.style.SUCCESS(
                        f'Categoría creada: {categoria.nombre}'
                    )
                )

        # ---------------------------------------------------------
        # SERVICIOS
        # ---------------------------------------------------------

        servicios_data = [
            {
                'municipio': 'Jardín',
                'categoria': 'Salud',
                'nombre': 'Puesto de Salud Rural',
                'descripcion': (
                    'Servicio de atención primaria para habitantes '
                    'de las zonas rurales.'
                ),
                'direccion': 'Zona rural de Jardín, Antioquia',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Centro de atención municipal',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Educación',
                'nombre': 'Institución Educativa Rural',
                'descripcion': (
                    'Institución educativa destinada a la atención '
                    'de población estudiantil rural.'
                ),
                'direccion': 'Zona rural de Andes, Antioquia',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 3:00 p. m.',
                'requisitos': 'Consultar proceso de matrícula.',
                'contacto': 'Secretaría de Educación Municipal',
            },
            {
                'municipio': 'Támesis',
                'categoria': 'Transporte',
                'nombre': 'Servicio de Transporte Rural',
                'descripcion': (
                    'Información sobre rutas de transporte entre '
                    'las zonas rurales y la cabecera municipal.'
                ),
                'direccion': 'Terminal municipal de Támesis',
                'horarios': 'Consultar horarios según la ruta.',
                'requisitos': 'No aplica.',
                'contacto': 'Oficina de transporte municipal',
            },
            {
                'municipio': 'Jericó',
                'categoria': 'Servicios públicos',
                'nombre': 'Atención de Servicios Públicos',
                'descripcion': (
                    'Punto de orientación para consultas y reportes '
                    'relacionados con servicios públicos.'
                ),
                'direccion': 'Zona urbana de Jericó, Antioquia',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 5:00 p. m.',
                'requisitos': 'Presentar información del usuario o servicio.',
                'contacto': 'Oficina de Servicios Públicos',
            },
            {
                'municipio': 'Urrao',
                'categoria': 'Apoyos sociales',
                'nombre': 'Programa de Apoyo Social',
                'descripcion': (
                    'Orientación sobre programas y ayudas sociales '
                    'disponibles para la población.'
                ),
                'direccion': 'Alcaldía Municipal de Urrao',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Depende del programa solicitado.',
                'contacto': 'Secretaría de Desarrollo Social',
            },
        ]

        for data in servicios_data:
            servicio, created = Servicio.objects.get_or_create(
                municipio=municipios[data['municipio']],
                categoria=categorias[data['categoria']],
                nombre=data['nombre'],
                defaults={
                    'descripcion': data['descripcion'],
                    'direccion': data['direccion'],
                    'horarios': data['horarios'],
                    'requisitos': data['requisitos'],
                    'contacto': data['contacto'],
                }
            )

            if created:
                self.stdout.write(
                    self.style.SUCCESS(
                        f'Servicio creado: {servicio.nombre}'
                    )
                )

        # ---------------------------------------------------------
        # FINAL
        # ---------------------------------------------------------

        self.stdout.write(
            self.style.SUCCESS(
                'Datos iniciales de RuralConecta cargados correctamente.'
            )
        )