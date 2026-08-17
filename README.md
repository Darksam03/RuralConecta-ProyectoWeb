# RuralConecta-Proyecto

## Badges

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-ff1709?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Descripción

**RuralConecta-Proyecto** es un Producto Mínimo Viable (MVP) de una aplicación web Full Stack diseñada para centralizar, organizar y facilitar el acceso a la información sobre servicios esenciales y trámites disponibles para las comunidades rurales de los municipios de Antioquia, Colombia.

---

## Problemática

En las zonas rurales del departamento de Antioquia, la información sobre servicios esenciales (salud, educación, transporte, servicios públicos y apoyos sociales) y trámites comunitarios se encuentra dispersa, desactualizada o de difícil acceso. Esta falta de centralización genera desplazamientos innecesarios, pérdida de tiempo y barreras de acceso a oportunidades y derechos para los habitantes rurales.

---

## Solución propuesta

Desarrollar una plataforma web accesible, ligera y de navegación intuitiva que permita a los ciudadanos consultar de forma rápida los servicios disponibles en su municipio, filtrados por categorías temáticas, proporcionando detalles prácticos como ubicación, horarios de atención, requisitos previos y canales de contacto directo.

---

## Objetivo general

Centralizar y facilitar el acceso a la información de servicios y trámites municipales esenciales para las comunidades rurales de Antioquia mediante una aplicación web ágil, responsiva y fundamentada en una arquitectura API REST desacoplada.

---

## Alcance del MVP

### Funcionalidades incluidas en la primera versión:
- Consultar el catálogo de municipios.
- Consultar las categorías de servicios disponibles (*Salud*, *Educación*, *Transporte*, *Servicios públicos*, *Apoyos sociales*).
- Consultar el listado de servicios.
- Filtrar servicios por municipio.
- Filtrar servicios por categoría.
- Mostrar información detallada de cada servicio.
- Mostrar dirección física o ubicación.
- Mostrar horarios de atención.
- Mostrar requisitos necesarios para el trámite o acceso.
- Mostrar información de contacto (teléfonos, correo, canales comunitarios).
- Interfaz completamente responsive adaptada a dispositivos móviles y de escritorio.
- Consumo de datos dinámico mediante API REST en formato JSON.

### Fuera del alcance del MVP (futuras ampliaciones):
- Pasarelas de pago.
- Sistemas médicos clínicos reales.
- Agendamiento real de citas médicas.
- Integraciones complejas con sistemas gubernamentales.
- Chat en tiempo real.
- Inteligencia artificial.
- Aplicación móvil nativa.
- Funcionalidades administrativas complejas.

---

## Arquitectura tecnológica

El sistema adopta una arquitectura **Full Stack desacoplada basada en API REST**:

```text
+-----------------------+           JSON / HTTP REST           +------------------------------+
|       Frontend        | <==================================> |           Backend            |
| (HTML5 + Tailwind CSS |                                      |  (Python + Django + DRF)     |
|     + JavaScript)     |                                      +------------------------------+
+-----------------------+                                                      |
                                                                               | ORM
                                                                               v
                                                               +------------------------------+
                                                               |        Base de Datos         |
                                                               |         (PostgreSQL)         |
                                                               +------------------------------+
```

---

## Stack tecnológico

- **Frontend**: HTML5, Tailwind CSS, JavaScript.
- **Backend**: Python, Django, Django REST Framework.
- **Base de datos**: PostgreSQL.
- **Control de versiones**: Git, GitHub.
- **Desarrollo**: Antigravity como asistente de desarrollo.
- **Despliegue**: Infraestructura en la nube (definida posteriormente).

---

## Flujo general del sistema

```text
Usuario
   ↓
Selecciona municipio
   ↓
Selecciona categoría
   ↓
Consulta servicios
   ↓
Frontend consume API REST
   ↓
Backend procesa la solicitud
   ↓
PostgreSQL proporciona los datos
   ↓
API devuelve información
   ↓
Frontend muestra los resultados
```

---

## Estado del proyecto

| Elemento | Estado |
|---|---|
| Análisis del problema | 🟡 En progreso |
| Alcance del MVP | 🟢 Completado |
| Arquitectura | ⚪ Pendiente |
| Base de datos | ⚪ Pendiente |
| Backend | ⚪ Pendiente |
| API REST | ⚪ Pendiente |
| Frontend | ⚪ Pendiente |
| Integración | ⚪ Pendiente |
| Pruebas | ⚪ Pendiente |
| Despliegue | ⚪ Pendiente |
| Documentación | 🟡 En progreso |
| Presentación | ⚪ Pendiente |

*Leyenda: 🟢 Completado | 🟡 En progreso | 🔴 Bloqueado | ⚪ Pendiente*

---

## 📋 Tareas y progreso

### Fase 0 — Análisis y planificación
- [ ] Definir problemática
- [ ] Definir alcance del MVP
- [ ] Definir requisitos funcionales
- [ ] Definir requisitos no funcionales
- [ ] Diseñar arquitectura del sistema
- [ ] Diseñar modelo entidad-relación
- [ ] Definir estructura de la API REST
- [ ] Definir medidas de seguridad
- [ ] Definir estrategia de despliegue en la nube

### Fase 1 — Preparación del entorno
- [ ] Configurar entorno de desarrollo
- [ ] Configurar Python
- [ ] Configurar Django
- [ ] Configurar Django REST Framework
- [ ] Configurar PostgreSQL
- [ ] Configurar frontend
- [ ] Configurar Git
- [ ] Configurar GitHub

### Fase 2 — Backend
- [ ] Crear proyecto Django
- [ ] Configurar base de datos
- [ ] Crear modelos
- [ ] Crear migraciones
- [ ] Crear serializers
- [ ] Crear vistas
- [ ] Crear endpoints
- [ ] Implementar consultas por municipio
- [ ] Implementar consultas por categoría
- [ ] Implementar validaciones
- [ ] Implementar medidas de seguridad

### Fase 3 — Frontend
- [ ] Diseñar interfaz principal
- [ ] Implementar selector de municipio
- [ ] Implementar selector de categoría
- [ ] Implementar consulta de servicios
- [ ] Mostrar información de servicios
- [ ] Mostrar ubicación
- [ ] Mostrar horarios
- [ ] Mostrar requisitos
- [ ] Mostrar contacto
- [ ] Implementar diseño responsive

### Fase 4 — Integración y pruebas
- [ ] Conectar frontend con API REST
- [ ] Probar consultas
- [ ] Validar formularios
- [ ] Validar respuestas de API
- [ ] Realizar pruebas de usabilidad
- [ ] Medir tiempos de respuesta
- [ ] Corregir errores
- [ ] Validar funcionamiento del MVP

### Fase 5 — Despliegue
- [ ] Preparar aplicación para producción
- [ ] Configurar variables de entorno
- [ ] Configurar base de datos en la nube
- [ ] Configurar backend
- [ ] Configurar frontend
- [ ] Desplegar aplicación
- [ ] Verificar funcionamiento
- [ ] Documentar despliegue

### Fase 6 — Documentación y presentación
- [ ] Completar README
- [ ] Documentar arquitectura
- [ ] Documentar base de datos
- [ ] Documentar API
- [ ] Documentar seguridad
- [ ] Agregar evidencias
- [ ] Crear diagramas
- [ ] Crear presentación
- [ ] Revisar repositorio
- [ ] Realizar revisión final

---

## 🏆 Logros

- [ ] Repositorio GitHub creado
- [ ] Estructura inicial definida
- [ ] Problemática documentada
- [ ] Arquitectura diseñada
- [ ] Modelo de datos diseñado
- [ ] API REST diseñada
- [ ] Entorno configurado
- [ ] Backend implementado
- [ ] Base de datos implementada
- [ ] API REST implementada
- [ ] Frontend implementado
- [ ] Integración completada
- [ ] MVP funcional
- [ ] Pruebas completadas
- [ ] Aplicación desplegada en la nube
- [ ] Documentación completada
- [ ] Presentación finalizada

---

## 📊 Métricas

### Rendimiento
Medir el tiempo de respuesta de las consultas principales de la API.
- **Meta inicial**: Respuesta inferior a 2 segundos en condiciones normales de prueba.

### Usabilidad
Medir el porcentaje de usuarios que pueden encontrar correctamente un servicio mediante el flujo:
`Municipio → Categoría → Servicio`.

### Funcionalidad
Medir el porcentaje de funcionalidades planificadas para el MVP que se encuentran implementadas y funcionando.

### Tiempo de desarrollo
Registrar el avance de acuerdo con el cronograma definido para el taller.

> *Nota: Las métricas se actualizarán a medida que se ejecuten pruebas y mediciones reales sobre el sistema.*

---

## Estructura del proyecto

```text
RuralConecta-Proyecto/
│
├── README.md
├── .gitignore
│
├── docs/
│   ├── arquitectura/
│   ├── base-datos/
│   └── api/
│
├── backend/
│
└── frontend/
```

---

## Instalación

Pendiente de implementación.

---

## Uso

Pendiente de implementación.

---

## API REST

Pendiente de implementación.

---

## Base de datos

Pendiente de implementación.

---

## 🔐 Seguridad

Durante el desarrollo del proyecto se contemplarán e implementarán las siguientes medidas de seguridad:
- Protección contra inyección SQL mediante el uso exclusivo del ORM de Django.
- Validación y sanitización rigurosa de datos en los serializadores y capas de entrada.
- Prevención de vulnerabilidades de tipo Cross-Site Scripting (XSS).
- Configuración estricta de Cross-Origin Resource Sharing (CORS) entre frontend y backend.
- Uso de variables de entorno para la gestión segura de parámetros de configuración y claves sensibles.
- Protección y no almacenamiento de credenciales en el repositorio de control de versiones.
- Configuración segura para el entorno de producción (`DEBUG=False`, encabezados de seguridad HTTP).
- Autenticación mediante JWT únicamente si las funcionalidades finales requieren autenticación.

---

## Pruebas

Pendiente de implementación.

---

## Despliegue en la nube

Pendiente de implementación.

---

## Documentación

La documentación técnica del proyecto se organiza dentro del directorio `docs/`:
- `docs/arquitectura/`: Diagramas de componentes, arquitectura y decisiones técnicas.
- `docs/base-datos/`: Diagrama entidad-relación y diccionario de datos.
- `docs/api/`: Especificación de contratos, endpoints y ejemplos de petición/respuesta.

---

## Presentación

Pendiente de implementación.
