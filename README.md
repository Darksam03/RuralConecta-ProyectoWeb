# RuralConecta-ProyectoWeb

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

**RuralConecta-ProyectoWeb** es un Producto Mínimo Viable (MVP) de una aplicación web Full Stack diseñada para centralizar, organizar y facilitar el acceso a la información sobre servicios esenciales y trámites disponibles para las comunidades rurales de los municipios de Antioquia, Colombia.

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

## 📈 Progreso general

```text
Progreso: ███░░░░░░░ 30% (19/64 tareas completadas)
```

> **Nota:** Este indicador visual representa el avance global del proyecto calculado a partir de las tareas completadas versus el total planificado en el tablero. Debe actualizarse manualmente a medida que se ejecuten y verifiquen nuevas actividades con evidencia respaldada en el repositorio.

---

## 📌 Convención para actualizar el progreso

Para mantener la consistencia, trazabilidad y rigor técnico en el seguimiento del proyecto:

- `[ ]` = Tarea pendiente por iniciar o en ejecución.
- `✅` = Tarea completada y verificada.
- Las tareas deben marcarse como completadas únicamente cuando exista evidencia tangible del trabajo realizado en el repositorio.
- Cada avance significativo debe estar respaldado por un commit descriptivo en Git siguiendo las pautas de commits semánticos (`feat:`, `fix:`, `docs:`, `chore:`, etc.).
- No marcar tareas futuras como completadas anticipadamente.

---

## 📊 Estado del proyecto

Este apartado permite realizar un seguimiento estructurado e interactivo del ciclo de vida y desarrollo de **RuralConecta-ProyectoWeb**, dividido por fases y áreas de trabajo:

### 🟢 Fase 0 — Análisis y planificación

- ✅ Crear repositorio GitHub
- ✅ Configurar estructura inicial del proyecto
- ✅ Crear README.md
- ✅ Crear .gitignore
- ✅ Definir problemática
- ✅ Definir objetivo general
- ✅ Definir objetivos específicos
- ✅ Definir alcance del MVP
- ✅ Definir arquitectura tecnológica
- ✅ Seleccionar stack tecnológico
- ✅ Crear especificación técnica
- ✅ Diseñar modelo entidad-relación
- ✅ Definir modelo de datos PostgreSQL
- ✅ Definir estructura inicial de la API REST

### 🔵 Fase 1 — Diseño y arquitectura

- ✅ Diseñar diagrama de arquitectura
- ✅ Diseñar diagrama entidad-relación definitivo
- ✅ Definir estructura del backend
- [ ] Definir estructura del frontend
- ✅ Documentar endpoints de la API
- [ ] Revisar arquitectura antes de programar

### 🟡 Fase 2 — Desarrollo Backend

- [ ] Crear proyecto Django
- [ ] Configurar Django REST Framework
- [ ] Configurar PostgreSQL
- [ ] Crear modelos
- [ ] Crear migraciones
- [ ] Crear serializers
- [ ] Crear endpoints
- [ ] Implementar filtros por municipio
- [ ] Implementar filtros por categoría
- [ ] Realizar pruebas de API

### 🟣 Fase 3 — Desarrollo Frontend

- [ ] Crear estructura HTML
- [ ] Configurar Tailwind CSS
- [ ] Implementar interfaz responsive
- [ ] Implementar selección de municipio
- [ ] Implementar selección de categoría
- [ ] Implementar listado de servicios
- [ ] Implementar ficha detallada del servicio
- [ ] Integrar frontend con API REST
- [ ] Manejar estados de carga y errores

### 🟠 Fase 4 — Integración y pruebas

- [ ] Probar integración frontend-backend
- [ ] Validar respuestas JSON
- [ ] Validar filtros
- [ ] Realizar pruebas responsive
- [ ] Realizar pruebas de usabilidad
- [ ] Medir tiempo de respuesta de la API
- [ ] Corregir errores encontrados
- [ ] Verificar cumplimiento de requisitos funcionales

### ☁️ Fase 5 — Despliegue

- [ ] Preparar variables de entorno
- [ ] Configurar producción
- [ ] Configurar PostgreSQL en la nube
- [ ] Desplegar backend
- [ ] Desplegar frontend
- [ ] Configurar CORS
- [ ] Verificar funcionamiento en producción
- [ ] Documentar proceso de despliegue

### 📚 Documentación y presentación

- [ ] Completar documentación técnica
- [ ] Actualizar README
- [ ] Agregar diagrama de arquitectura
- [ ] Agregar diagrama entidad-relación
- ✅ Documentar API
- [ ] Preparar presentación
- [ ] Exportar presentación a PDF
- [ ] Agregar presentación al repositorio
- [ ] Realizar revisión final del repositorio

---

## 🏆 Logros alcanzados

Registro de hitos consolidados a lo largo del ciclo del proyecto:

- ✅ Repositorio inicial creado
- ✅ Arquitectura tecnológica definida
- ✅ Stack tecnológico seleccionado
- ⬜ MVP implementado
- ⬜ API REST funcional
- ⬜ Frontend integrado
- ⬜ Pruebas completadas
- ⬜ Aplicación desplegada en la nube

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

---

## 👥 Equipo

| Integrante | Rol | Institución |
|---|---|---|
| Samuel Arboleda Echeverri | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
| Josue Agudelo Gallego | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |

