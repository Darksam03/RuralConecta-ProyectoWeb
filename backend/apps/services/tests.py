from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from apps.services.models import Municipio, Categoria, Servicio


class ServicioAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        
        self.mun_andes = Municipio.objects.create(nombre='Andes', subregion='Suroeste')
        self.mun_amaga = Municipio.objects.create(nombre='Amagá', subregion='Suroeste')
        
        self.cat_salud = Categoria.objects.create(nombre='Salud', descripcion='Servicios de salud')
        self.cat_educacion = Categoria.objects.create(nombre='Educación', descripcion='Servicios de educación')
        
        # Andes services
        self.s1 = Servicio.objects.create(
            municipio=self.mun_andes, categoria=self.cat_salud, nombre='Hospital Andes',
            descripcion='Atención rural', direccion='Calle 1', horarios='8am-4pm',
            requisitos='Doc', contacto='123'
        )
        self.s2 = Servicio.objects.create(
            municipio=self.mun_andes, categoria=self.cat_salud, nombre='Puesto de Salud Andes',
            descripcion='Atención veredal', direccion='Vereda 1', horarios='8am-2pm',
            requisitos='Doc', contacto='123'
        )
        self.s3 = Servicio.objects.create(
            municipio=self.mun_andes, categoria=self.cat_educacion, nombre='Escuela Rural Andes',
            descripcion='Educación primaria', direccion='Vereda 2', horarios='7am-3pm',
            requisitos='Doc', contacto='123'
        )
        
        # Amagá services
        self.s4 = Servicio.objects.create(
            municipio=self.mun_amaga, categoria=self.cat_salud, nombre='Hospital Amagá',
            descripcion='Urgencias', direccion='Calle Principal', horarios='24h',
            requisitos='Doc', contacto='456'
        )

    def test_filter_servicios_by_municipio_id(self):
        response = self.client.get(f'/api/servicios/?municipio={self.mun_andes.id}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json()
        self.assertEqual(len(data), 3)
        for item in data:
            self.assertEqual(item['municipio']['id'], self.mun_andes.id)

    def test_filter_servicios_by_municipio_name(self):
        response = self.client.get('/api/servicios/?municipio=Andes')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json()
        self.assertEqual(len(data), 3)
        
        response_amaga = self.client.get('/api/servicios/?municipio=Amagá')
        self.assertEqual(response_amaga.status_code, status.HTTP_200_OK)
        data_amaga = response_amaga.json()
        self.assertEqual(len(data_amaga), 1)
        self.assertEqual(data_amaga[0]['nombre'], 'Hospital Amagá')

    def test_no_mixing_between_municipios(self):
        response = self.client.get(f'/api/servicios/?municipio={self.mun_amaga.id}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json()
        names = [item['nombre'] for item in data]
        self.assertIn('Hospital Amagá', names)
        self.assertNotIn('Hospital Andes', names)
        self.assertNotIn('Puesto de Salud Andes', names)
        self.assertNotIn('Escuela Rural Andes', names)

