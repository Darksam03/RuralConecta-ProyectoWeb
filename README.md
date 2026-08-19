# RuralConecta-ProyectoWeb

## Badges

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-A30000?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Descripción

**RuralConecta-ProyectoWeb** es un Producto Mínimo Viable (MVP) de una aplicación web Full Stack diseñada para centralizar, organizar y facilitar el acceso a la información sobre servicios esenciales y trámites disponibles para las comunidades rurales de los municipios de Antioquia, Colombia.

---

## Problemática

En las zonas rurales del departamento de Antioquia, la información sobre servicios esenciales (salud, educación, transporte, servicios públicos y apoyos sociales) y trámites comunitarios se encuentra dispersa, desactualizada o de difícil acceso. Esta falta de centralización genera desplazamientos innecesarios, pérdida de tiempo y barreras de acceso a oportunidades y derechos para los habitantes rurales.

---

## Objetivo

Centralizar y facilitar el acceso a la información de servicios y trámites municipales esenciales para las comunidades rurales de Antioquia mediante una aplicación web ágil, responsiva y fundamentada en una arquitectura API REST desacoplada.

---

## Tecnologías

### Frontend
- **HTML5** — Estructuración semántica de las páginas y vistas del cliente web.
- **CSS3** — Estilos visuales, Responsive Design (Flexbox, Grid, variables CSS, media queries).
- **JavaScript Vanilla** — Interacción del usuario, manipulación del DOM y consumo asíncrono de la API REST mediante Fetch API.

### Backend
- **Python** — Lenguaje de programación base (versión 3.10+).
- **Django** — Framework web principal (estructura, enrutamiento, seguridad y panel de administración).
- **Django REST Framework (DRF)** — Toolkit para la creación de la API REST (endpoints, serializadores, validaciones).
- **Django ORM** — Mapeador Objeto-Relacional para acceso seguro y parametrizado a la base de datos PostgreSQL.

### Base de Datos
- **PostgreSQL** — Motor de base de datos relacional principal.

### Control de Versiones
- **Git + GitHub** — Control de versiones y colaboración.

---

## Arquitectura

El sistema adopta una arquitectura **Full Stack desacoplada basada en API REST**:

```text
                    RURALCONECTA
                         │
                         ▼
              ┌─────────────────────┐
              │      FRONTEND       │
              │                     │
              │ HTML5 + CSS3        │
              │ JavaScript Vanilla  │
              └──────────┬──────────┘
                         │
                      HTTP/JSON
                         │
                         ▼
              ┌─────────────────────┐
              │      BACKEND        │
              │                     │
              │ Python + Django     │
              │ Django REST Framew. │
              │ Django ORM (API)    │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     PostgreSQL      │
              └─────────────────────┘
```

Git y GitHub se mantienen como herramientas de control de versiones y colaboración.

---

## Solución propuesta

Desarrollar una plataforma web accesible, ligera y de navegación intuitiva que permita a los ciudadanos consultar de forma rápida los servicios disponibles en su municipio, filtrados por categorías temáticas, proporcionando detalles prácticos como ubicación, horarios de atención, requisitos previos y canales de contacto directo.

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

## Estructura del proyecto

```text
RuralConecta-ProyectoWeb/
│
├── README.md
├── .gitignore
│
├── docs/
│   ├── arquitectura/
│   │   ├── especificacion-tecnica.md
│   │   ├── estructura-backend.md
│   │   └── estructura-frontend.md
│   ├── base-datos/
│   │   └── modelo-datos.md
│   └── api/
│       └── especificacion-api.md
│
├── backend/
│   (Pendiente de implementación — Django + Django REST Framework + Django ORM)
│
└── frontend/
    (Pendiente de implementación — HTML5 + CSS3 + JavaScript Vanilla)
```

---

## Flujo del sistema

```text
Usuario
   ↓
Selecciona municipio (vista HTML5)
   ↓
Selecciona categoría (vista HTML5)
   ↓
Consulta servicios (vista HTML5)
   ↓
Frontend consume API REST (JavaScript Fetch API)
   ↓
Backend Django / DRF procesa la solicitud
   ↓
PostgreSQL proporciona los datos mediante Django ORM
   ↓
API devuelve información JSON
   ↓
Frontend muestra los resultados (HTML5 + JavaScript)
```

---

## 📈 Progreso general

```text
Progreso: ███░░░░░░░ 31% (20/64 tareas completadas)
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

## 📊 Tareas y Logros

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
- ✅ Definir estructura del frontend
- ✅ Documentar endpoints de la API
- ✅ Adaptar arquitectura a HTML5 + CSS3 + JavaScript Vanilla
- ✅ Actualizar documentación tecnológica completa
- ✅ Validar arquitectura completa antes de programar

### 🟡 Fase 2 — Desarrollo Backend

- [ ] Crear proyecto Django (`backend/`) y app `servicios`
- [ ] Configurar Django REST Framework (DRF)
- [ ] Configurar conexión a PostgreSQL en `settings.py`
- [ ] Crear modelos relacionales Django ORM (`servicios/models.py`)
- [ ] Crear serializadores DRF (`servicios/serializers.py`)
- [ ] Crear vistas de la API REST (`servicios/views.py` — ViewSets)
- [ ] Configurar enrutadores de la API (`servicios/urls.py`)
- [ ] Implementar filtros por municipio y categoría
- [ ] Realizar pruebas unitarias automatizadas con `APITestCase`

### 🟣 Fase 3 — Desarrollo Frontend

- [ ] Crear estructura HTML5 del cliente web (`index.html`, `municipios.html`, `categorias.html`, `servicios.html`, `servicio-detalle.html`)
- [ ] Configurar CSS3 (`styles.css` con variables, Flexbox, Grid, media queries)
- [ ] Implementar interfaz responsive
- [ ] Implementar vista de selección de municipio (`municipios.html`)
- [ ] Implementar vista de selección de categoría (`categorias.html`)
- [ ] Implementar vista de listado de servicios (`servicios.html`)
- [ ] Implementar ficha detallada del servicio (`servicio-detalle.html`)
- [ ] Integrar frontend con API REST (JavaScript Fetch API)
- [ ] Manejar estados de carga, éxito, sin resultados y errores

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

- [ ] Preparar variables de entorno (`python-decouple` / `.env`)
- [ ] Configurar entorno de producción para Django (`ALLOWED_HOSTS`, `DEBUG = False`, `SECRET_KEY`)
- [ ] Configurar PostgreSQL en la nube
- [ ] Desplegar backend Django con Gunicorn / WSGI
- [ ] Configurar servidor para el Frontend estático
- [ ] Configurar CORS (`django-cors-headers`)
- [ ] Verificar funcionamiento en producción
- [ ] Documentar proceso de despliegue

### 📚 Documentación y presentación

- [ ] Completar documentación técnica
- ✅ Actualizar README
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

## Requisitos

### Backend
- Python 3.10+
- Django 4.x+
- Django REST Framework (DRF)
- PostgreSQL 14+
- `django-cors-headers`
- Entorno virtual Python (`venv`)

### Frontend
- Navegador web moderno (Chrome, Firefox, Edge) o servidor HTTP estático (Nginx, Netlify, Vercel)

### Herramientas
- Git
- GitHub

> *La configuración de entornos se documentará al preparar el entorno de desarrollo en la Fase 1.*

---

## Instalación / Configuración

Pendiente de implementación. Se documentará en la Fase 1 (preparación del entorno de desarrollo).

---

## 🔐 Seguridad

Durante el desarrollo del proyecto se contemplarán e implementarán las siguientes medidas de seguridad:

- Protección contra inyección SQL mediante el uso exclusivo de Django ORM (consultas parametrizadas).
- Validación y sanitización de datos mediante serializadores de Django REST Framework.
- Prevención de vulnerabilidades Cross-Site Scripting (XSS): en JavaScript, usar `textContent` en lugar de `innerHTML` sobre datos no confiables provenientes de la API REST.
- Configuración estricta de Cross-Origin Resource Sharing (CORS) mediante `django-cors-headers`.
- Uso de variables de entorno para la gestión segura de parámetros de configuración y claves sensibles (`SECRET_KEY`, `DATABASE_URL`).
- No almacenar credenciales en el repositorio de control de versiones.
- Configuración segura para el entorno de producción (`DEBUG = False`, encabezados de seguridad HTTP).
- Separación estricta entre presentación (HTML5/CSS3/JavaScript) y lógica de negocio (Django/DRF).
- No exponer información sensible en mensajes de error visibles al usuario.

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

## Buenas Prácticas

- Separación de responsabilidades: HTML5 (estructura) / CSS3 (estilos) / JavaScript (comportamiento) / Django+DRF (lógica y API) / PostgreSQL (persistencia).
- Modularidad y reutilización de estilos CSS3 y módulos JavaScript.
- Código limpio y nombres descriptivos.
- No duplicar lógica entre módulos.
- Commits semánticos y descriptivos.
- No almacenar secretos en Git.
- Documentación actualizada antes de avanzar de fase.

---

## 👥 Equipo

| Integrante | Rol | Institución |
|---|---|---|
| Samuel Arboleda Echeverri | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
| Josue Agudelo Gallego | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
