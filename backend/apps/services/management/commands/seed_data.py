
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
                'nombre': 'Amagá',
                'subregion': 'Suroeste',
            },
            {
                'nombre': 'Betania',
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
            # --- ANDES ---
            {
                'municipio': 'Andes',
                'categoria': 'Salud',
                'nombre': 'Hospital San Rafael de Andes - Atención Rural',
                'descripcion': 'Consultas médicas y jornadas de prevención en veredas del municipio.',
                'direccion': 'Carrera 50 # 49-20, Andes, Antioquia',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 4:00 p. m.',
                'requisitos': 'Documento de identidad y afiliación a salud.',
                'contacto': 'Teléfono (604) 841-4000',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Salud',
                'nombre': 'Puesto de Salud Veredal Buenos Aires',
                'descripcion': 'Atención ambulatoria primaria y enfermería general para la comunidad veredal.',
                'direccion': 'Vereda Buenos Aires, Andes, Antioquia',
                'horarios': 'Martes y jueves, 8:00 a. m. - 2:00 p. m.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Promotora de salud veredal',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Salud',
                'nombre': 'Brigada de Salud Oral Veredal',
                'descripcion': 'Atención odontológica preventiva itinerante para estudiantes y adultos mayores.',
                'direccion': 'Sedes educativas veredales de Andes',
                'horarios': 'Jornadas programadas mensualmente.',
                'requisitos': 'Registro previo en la caseta comunal.',
                'contacto': 'Secretaría de Salud de Andes',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Educación',
                'nombre': 'Institución Educativa Rural Juan de Dios Uribe',
                'descripcion': 'Institución educativa destinada a la atención de población estudiantil rural.',
                'direccion': 'Vereda San Bartolo, Andes, Antioquia',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 3:00 p. m.',
                'requisitos': 'Consultar proceso de matrícula y certificado de notas.',
                'contacto': 'Secretaría de Educación Municipal',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Educación',
                'nombre': 'Centro de Formación Técnica Agropecuaria',
                'descripcion': 'Cursos de capacitación en técnicas de cultivo de café y diversificación agrícola.',
                'direccion': 'Km 2 Vía Tapartó, Andes',
                'horarios': 'Sábados, 8:00 a. m. - 1:00 p. m.',
                'requisitos': 'Ser mayor de 15 años y habitante rural.',
                'contacto': 'Oficina UMATA de Andes',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Transporte',
                'nombre': 'Ruta de Transporte Veredal Andes - Tapartó',
                'descripcion': 'Servicio de transporte mixto (chiva/escalera) hacia veredas del corregimiento Tapartó.',
                'direccion': 'Plaza de Mercado de Andes',
                'horarios': 'Salidas diarias a las 6:00 a. m., 12:00 m. y 4:30 p. m.',
                'requisitos': 'Pago de tarifa fija veredal.',
                'contacto': 'Cooperativa de Transportadores de Andes',
            },
            {
                'municipio': 'Andes',
                'categoria': 'Transporte',
                'nombre': 'Línea Veredal Andes - Santa Rita',
                'descripcion': 'Transporte de pasajeros y carga liviana para agricultores de Santa Rita.',
                'direccion': 'Terminal de Carga de Andes',
                'horarios': 'Lunes a sábado, 5:30 a. m. y 3:00 p. m.',
                'requisitos': 'Tiquete comprado previamente.',
                'contacto': 'Empresa de Transportes del Suroeste',
            },

            # --- AMAGÁ ---
            {
                'municipio': 'Amagá',
                'categoria': 'Salud',
                'nombre': 'Hospital San Fernando de Amagá',
                'descripcion': 'Urgencias 24 horas y consulta externa para zona urbana y rural de Amagá.',
                'direccion': 'Calle 50 # 51-12, Amagá, Antioquia',
                'horarios': 'Consulta externa: Lunes a viernes 7:00 a. m. - 5:00 p. m.',
                'requisitos': 'Cédula de ciudadanía o tarjeta de identidad.',
                'contacto': 'Teléfono (604) 847-1100',
            },
            {
                'municipio': 'Amagá',
                'categoria': 'Salud',
                'nombre': 'Puesto de Salud Minas y Camilo C.',
                'descripcion': 'Atención en medicina general y vacunación para familias de sectores mineros y rurales.',
                'direccion': 'Corregimiento Camilo C., Amagá',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 3:00 p. m.',
                'requisitos': 'Carné de vacunación / documento de identidad.',
                'contacto': 'Puesto de Salud Camilo C.',
            },
            {
                'municipio': 'Amagá',
                'categoria': 'Educación',
                'nombre': 'Institución Educativa San Ramón Veredal',
                'descripcion': 'Educación básica primaria y secundaria con énfasis ambiental e industrial.',
                'direccion': 'Vereda San Ramón, Amagá',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 1:30 p. m.',
                'requisitos': 'Documentación escolar completa.',
                'contacto': 'Rectoría I.E. San Ramón',
            },
            {
                'municipio': 'Amagá',
                'categoria': 'Servicios públicos',
                'nombre': 'Oficina de Acueducto Multiveredal Amagá',
                'descripcion': 'Punto de atención para la gestión del servicio de agua potable y mantenimiento de tuberías veredales.',
                'direccion': 'Calle del Comercio, Amagá',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Factura o código de usuario veredal.',
                'contacto': 'Junta Administradora de Acueducto',
            },
            {
                'municipio': 'Amagá',
                'categoria': 'Servicios públicos',
                'nombre': 'Punto de Recolección Selectiva y Reciclaje Rural',
                'descripcion': 'Jornadas de recolección de residuos sólidos y empaques agroquímicos en veredas.',
                'direccion': 'Caseta comunal Vereda La María, Amagá',
                'horarios': 'Primer miércoles de cada mes.',
                'requisitos': 'Entrega de residuos limpios y clasificados.',
                'contacto': 'Secretaría de Medio Ambiente de Amagá',
            },

            # --- BETANIA ---
            {
                'municipio': 'Betania',
                'categoria': 'Salud',
                'nombre': 'Hospital San Antonio de Betania',
                'descripcion': 'Atención médica general y programas de salud ocupacional para recolectores y agricultores.',
                'direccion': 'Carrera 20 # 18-05, Betania, Antioquia',
                'horarios': 'Lunes a viernes, 7:30 a. m. - 4:30 p. m.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Atención al usuario Hospital Betania',
            },
            {
                'municipio': 'Betania',
                'categoria': 'Educación',
                'nombre': 'Escuela Rural El Pedregal',
                'descripcion': 'Sede educativa primaria bajo la metodología Escuela Nueva.',
                'direccion': 'Vereda El Pedregal, Betania',
                'horarios': 'Lunes a viernes, 7:30 a. m. - 1:30 p. m.',
                'requisitos': 'Registro civil y documento del acudiente.',
                'contacto': 'Dirección Núcleo Educativo',
            },
            {
                'municipio': 'Betania',
                'categoria': 'Apoyos sociales',
                'nombre': 'Programa Subsidio Colombia Mayor Betania',
                'descripcion': 'Inscripción y entrega de incentivos económicos para adultos mayores del sector rural.',
                'direccion': 'Casa de la Cultura, Betania',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 12:00 m.',
                'requisitos': 'Cédula de ciudadanía original y encuesta SISBÉN.',
                'contacto': 'Enlace Municipal Colombia Mayor',
            },
            {
                'municipio': 'Betania',
                'categoria': 'Apoyos sociales',
                'nombre': 'Fondo de Apoyo al Pequeño Caficultor',
                'descripcion': 'Asistencia con insumos agrícolas y créditos de fomento para familias campesinas de Betania.',
                'direccion': 'Alcaldía Municipal de Betania',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Certificado de libertad del predio o contrato de arrendamiento.',
                'contacto': 'Secretaría de Desarrollo Rural',
            },

            # --- JARDÍN ---
            {
                'municipio': 'Jardín',
                'categoria': 'Salud',
                'nombre': 'Puesto de Salud Rural Verdún',
                'descripcion': 'Servicio de atención primaria y control prenatal para habitantes de zonas rurales.',
                'direccion': 'Zona rural de Jardín, Antioquia',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Centro de atención municipal Jardín',
            },
            {
                'municipio': 'Jardín',
                'categoria': 'Salud',
                'nombre': 'Hospital Gabriel Peláez Montoya',
                'descripcion': 'Servicios de urgencias, laboratorio clínico y brigadas médicas rurales.',
                'direccion': 'Calle 13 # 2-45, Jardín, Antioquia',
                'horarios': 'Atención 24 horas en urgencias.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Teléfono (604) 845-5555',
            },
            {
                'municipio': 'Jardín',
                'categoria': 'Transporte',
                'nombre': 'Línea Veredal Jardín - La Salada',
                'descripcion': 'Ruta de transporte comunitario en Jeep Willys y moto-taxis registrados.',
                'direccion': 'Parque Principal de Jardín',
                'horarios': 'Salidas cada hora de 6:00 a. m. a 6:00 p. m.',
                'requisitos': 'Pago en efectivo de pasaje.',
                'contacto': 'Asociación de Transportadores de Jardín',
            },

            # --- TÁMESIS ---
            {
                'municipio': 'Támesis',
                'categoria': 'Transporte',
                'nombre': 'Servicio de Transporte Rural Támesis - Palermo',
                'descripcion': 'Información sobre rutas de transporte entre las zonas rurales y la cabecera municipal.',
                'direccion': 'Terminal municipal de Támesis',
                'horarios': 'Lunes a domingo, salidas cada 2 horas.',
                'requisitos': 'No aplica.',
                'contacto': 'Oficina de transporte municipal Támesis',
            },
            {
                'municipio': 'Támesis',
                'categoria': 'Salud',
                'nombre': 'Hospital San Juan de Dios de Támesis',
                'descripcion': 'Atención integral en salud y telemedicina para veredas distantes.',
                'direccion': 'Carrera 11 # 10-04, Támesis',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 5:00 p. m.',
                'requisitos': 'Documento de identidad.',
                'contacto': 'Recepción Hospital Támesis',
            },

            # --- JERICÓ ---
            {
                'municipio': 'Jericó',
                'categoria': 'Servicios públicos',
                'nombre': 'Atención de Servicios Públicos Jericó',
                'descripcion': 'Punto de orientación para consultas y reportes relacionados con acueducto y energía.',
                'direccion': 'Zona urbana de Jericó, Antioquia',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 5:00 p. m.',
                'requisitos': 'Presentar información del usuario o cuenta de cobro.',
                'contacto': 'Oficina de Servicios Públicos Jericó',
            },
            {
                'municipio': 'Jericó',
                'categoria': 'Salud',
                'nombre': 'Hospital San Rafael de Jericó',
                'descripcion': 'Servicio de consulta externa, vacunación y programa de enfermería veredal.',
                'direccion': 'Calle 7 # 4-18, Jericó',
                'horarios': 'Lunes a viernes, 7:00 a. m. - 4:00 p. m.',
                'requisitos': 'Documento de identidad original.',
                'contacto': 'Atención al Ciudadano Jericó',
            },

            # --- URRAO ---
            {
                'municipio': 'Urrao',
                'categoria': 'Apoyos sociales',
                'nombre': 'Programa de Apoyo Social y Seguridad Alimentaria',
                'descripcion': 'Orientación sobre programas y ayudas sociales disponibles para la población rural.',
                'direccion': 'Alcaldía Municipal de Urrao',
                'horarios': 'Lunes a viernes, 8:00 a. m. - 4:00 p. m.',
                'requisitos': 'Depende del programa solicitado.',
                'contacto': 'Secretaría de Desarrollo Social Urrao',
            },
            {
                'municipio': 'Urrao',
                'categoria': 'Transporte',
                'nombre': 'Servicio Mixto Urrao - Mandé',
                'descripcion': 'Transporte fluvial y terrestre para las comunidades veredales más alejadas.',
                'direccion': 'Puerto de Carga Urrao',
                'horarios': 'Salidas martes y viernes a las 5:00 a. m.',
                'requisitos': 'Reserva previa.',
                'contacto': 'Cooperativa de Transportadores de Urrao',
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
                        f'Servicio creado: {servicio.nombre} ({servicio.municipio.nombre} - {servicio.categoria.nombre})'
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