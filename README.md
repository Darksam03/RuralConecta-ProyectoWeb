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

### Frontend (En desarrollo)
- **HTML5** — Estructuración semántica de las páginas y vistas del cliente web.
- **CSS3** — Estilos visuales, Responsive Design (Flexbox, Grid, variables CSS, media queries).
- **JavaScript Vanilla** — Interacción del usuario, manipulación del DOM y consumo asíncrono de la API REST mediante Fetch API.

### Backend (Implementado y verificado)
- **Python** — Lenguaje de programación base (versión 3.10+).
- **Django** — Framework web principal (estructura, enrutamiento, seguridad y panel de administración).
- **Django REST Framework (DRF)** — Toolkit para la creación de la API REST (endpoints, serializadores, validaciones, filtros).
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
              │ (HTML5+CSS3+JS)     │
              └──────────┬──────────┘
                         │
                      HTTP/JSON
                         │
                         ▼
              ┌─────────────────────┐
              │      BACKEND        │
              │ (Python+Django+DRF) │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     PostgreSQL      │
              └─────────────────────┘
```

---

## Solución propuesta

Desarrollar una plataforma web accesible, ligera y de navegación intuitiva que permita a los ciudadanos consultar de forma rápida los servicios disponibles en su municipio, filtrados por categorías temáticas, proporcionando detalles prácticos como ubicación, horarios de atención, requisitos previos y canales de contacto directo.

---

## Alcance del MVP

### Funcionalidades incluidas en la primera versión:
- Consultar el catálogo de municipios (`GET /api/municipios/`).
- Consultar las categorías de servicios disponibles (`GET /api/categorias/`).
- Consultar el listado completo de servicios (`GET /api/servicios/`).
- Filtrar servicios por municipio (`GET /api/servicios/?municipio=ID`).
- Filtrar servicios por categoría (`GET /api/servicios/?categoria=ID`).
- Filtrar servicios combinando municipio y categoría (`GET /api/servicios/?municipio=ID&categoria=ID`).
- Mostrar información detallada de un servicio individual (`GET /api/servicios/{id}/`).
- Gestión de datos desde el panel administrativo de Django (`/admin/`).
- Interfaz completamente responsive adaptada a dispositivos móviles y de escritorio (Frontend en desarrollo).
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
│   ├── manage.py
│   ├── requirements.txt
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   └── apps/
│       └── services/
│           ├── __init__.py
│           ├── admin.py
│           ├── apps.py
│           ├── models.py
│           ├── serializers.py
│           ├── urls.py
│           ├── views.py
│           ├── migrations/
│           └── management/
│               └── commands/
│                   └── seed_data.py
│
└── frontend/
    ├── css/
    │   └── styles.css          # Hoja de estilos CSS3 modular y responsive
    ├── js/
    │   └── main.js             # Lógica de navegación móvil y UI compartida
    ├── index.html              # Vista principal (Página de inicio)
    ├── municipios.html         # Vista del catálogo de municipios (Paso 3)
    ├── categorias.html         # Vista del catálogo de categorías (Paso 4)
    ├── servicios.html          # Vista del catálogo de servicios (Paso 5)
    └── servicio-detalle.html   # Vista de ficha y detalle de servicio (Paso 6)
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
Consulta detalle de servicio (vista HTML5)
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
Progreso: ███████░░░ 70% (55/79 tareas completadas)
```

> **Nota:** Este indicador visual representa el avance global del proyecto calculado a partir de las tareas completadas versus el total planificado en el tablero. Debe actualizarse manualmente a medida que se ejecuten y verifiquen nuevas actividades con evidencia respaldada en el repositorio.

---

## 📌 Convención para actualizar el progreso

Para mantener la consistencia, trazabilidad y rigor técnico en el seguimiento del proyecto:

- `[ ]` = Tarea pendiente por iniciar o en ejecución.
- `[x]` = Tarea completada y verificada en el repositorio.
- Las tareas deben marcarse como completadas únicamente cuando exista evidencia tangible del trabajo realizado en el repositorio.
- No marcar tareas futuras como completadas anticipadamente.

---

## 📊 Tareas y Logros

Este apartado permite realizar un seguimiento estructurado e interactivo del ciclo de vida y desarrollo de **RuralConecta-ProyectoWeb**, dividido por fases y áreas de trabajo:

### 🟢 Fase 0 — Análisis y planificación

- [x] Crear repositorio GitHub
- [x] Configurar estructura inicial del proyecto
- [x] Crear README.md
- [x] Crear .gitignore
- [x] Definir problemática
- [x] Definir objetivo general
- [x] Definir objetivos específicos
- [x] Definir alcance del MVP
- [x] Definir arquitectura tecnológica
- [x] Seleccionar stack tecnológico
- [x] Crear especificación técnica
- [x] Diseñar modelo entidad-relación
- [x] Definir modelo de datos PostgreSQL
- [x] Definir estructura inicial de la API REST

### 🔵 Fase 1 — Arquitectura y documentación

- [x] Diseñar diagrama de arquitectura
- [x] Diseñar diagrama entidad-relación definitivo
- [x] Definir estructura del backend
- [x] Definir estructura del frontend
- [x] Documentar endpoints de la API REST
- [x] Adaptar arquitectura a HTML5 + CSS3 + JavaScript Vanilla
- [x] Actualizar documentación tecnológica completa
- [x] Validar arquitectura completa antes de programar

### 🟡 Fase 2 — Backend

- [x] Configuración inicial del proyecto Django (`backend/`)
- [x] Configuración del entorno virtual (`venv`)
- [x] Configuración de PostgreSQL como base de datos relacional
- [x] Conexión y verificación de Django + PostgreSQL (`settings.py`)
- [x] Configuración de la estructura de aplicaciones Django
- [x] Creación de la aplicación de servicios (`apps.services`)
- [x] Definición de modelos ORM (`Municipio`, `Categoria`, `Servicio`)
- [x] Creación y aplicación de migraciones de Django
- [x] Creación de serializadores DRF (`MunicipioSerializer`, `CategoriaSerializer`, `ServicioSerializer`)
- [x] Creación de vistas de la API REST mediante `ViewSets`
- [x] Configuración de URLs y enrutadores de la API REST (`DefaultRouter`)
- [x] Configuración de los endpoints de la API (`/api/municipios/`, `/api/categorias/`, `/api/servicios/`)
- [x] Carga de datos iniciales mediante el comando personalizado `seed_data`
- [x] Verificación de la integridad de datos mediante Django Shell
- [x] Verificación y prueba de funcionamiento de los endpoints de la API REST
- [x] Prueba de filtros por municipio (`?municipio=ID`)
- [x] Prueba de filtros por categoría (`?categoria=ID`)
- [x] Prueba combinada de filtros (municipio + categoría)
- [x] Prueba de consulta individual de servicios por ID (`/api/servicios/{id}/`)
- [x] Configuración del panel de administración Django Admin
- [x] Registro de los modelos `Municipio`, `Categoria` y `Servicio` en `admin.py`
- [x] Creación y configuración del usuario administrador (superuser)
- [x] Verificación y validación del panel administrativo de Django
- [x] Implementar pruebas unitarias automatizadas con `APITestCase`

### 🟣 Fase 3 — Frontend (En desarrollo)

- [x] Crear estructura HTML5 base del cliente web y diseño de `index.html` (Pasos 1 y 2)
- [x] Configurar CSS3 modular (`styles.css` con variables, Flexbox, Grid, header, tarjetas y utilidades)
- [x] Implementar vista de selección de municipio (`municipios.html`) (Paso 3)
- [x] Implementar vista de selección de categoría (`categorias.html`) (Paso 4)
- [x] Implementar vista de listado de servicios (`servicios.html`) (Paso 5)
- [x] Implementar ficha detallada del servicio (`servicio-detalle.html`) (Paso 6)
- [ ] Implementar responsive completo
- [ ] Integrar frontend con API REST (JavaScript Fetch API)
- [ ] Manejar estados de carga, éxito, sin resultados y errores en el cliente

#### Estado actual de Fase 3

| Paso | Actividad | Estado |
| ---: | --- | :---: |
| 1 | Estructura HTML5/CSS/JS base | ✅ |
| 2 | Diseño de `index.html` | ✅ |
| 3 | Vista `municipios.html` | ✅ |
| 4 | Vista `categorias.html` | ✅ |
| 5 | Vista `servicios.html` | ✅ |
| 6 | Vista `servicio-detalle.html` | ✅ |
| 7 | Responsive completo | ⏳ |
| 8 | Integración Fetch API | ⏳ |
| 9 | Estados de carga/éxito/sin resultados/error | ⏳ |
| 10 | Pruebas e integración final | ⏳ |

#### Documentación de Vistas del Frontend

##### 1. Vista de Municipios (`municipios.html`)
- **Archivo**: [`frontend/municipios.html`](frontend/municipios.html).
- **Estructura semántica**: Header institucional, encabezado de página (`.page-header`), contenedor `#municipios-container` con cuadrícula flexible (`.municipios-grid`), 5 tarjetas demostrativas (*Jardín*, *Andes*, *Támesis*, *Jericó*, *Urrao*), cuadro de cobertura territorial y footer.
- **Componentes reutilizados**: Header, menú móvil accesible (`main.js`), tokens de diseño CSS (`styles.css`), botones (`.btn`), footer.

##### 2. Vista de Categorías (`categorias.html`)
- **Archivo**: [`frontend/categorias.html`](frontend/categorias.html).
- **Estructura semántica**: 
  - `<header class="site-header">` con logotipo y menú de navegación accesible con estado activo (`.nav-link.active` en Categorías).
  - `<main id="main-content">` que contiene el encabezado de vista (`.page-header`) con título "Categorías", badge temático *"Áreas de Servicio"* y descripción de alcance.
  - Barra de herramientas (`.section-toolbar`) y contenedor dedicado `#categorias-container` con disposición en `.categorias-catalog-grid` flexible.
  - Tarjetas demostrativas (`.categoria-card`) para las 5 categorías oficiales (*Salud*, *Educación*, *Transporte*, *Servicios públicos*, *Apoyos sociales*), incluyendo icono temático SVG, badge de área, descripción oficial del modelo y botón de acción hacia `servicios.html`.
  - Cuadro informativo de orientación (`.categorias-info-box`) para guiar la consulta por municipio o servicios generales.
  - `<footer class="site-footer">` idéntico y consistente con el pie de página institucional.
- **Componentes reutilizados**: Header institucional, menú móvil accesible (`main.js`), tokens de variables CSS (`styles.css`), botones y enlaces (`.btn`, `.btn-outline-primary`), footer y layout de cuadrícula.
- **Preparación para datos dinámicos**: El elemento `#categorias-container` está formalmente identificado para permitir la futura inyección dinámica desde JavaScript (`categorias.js`).
- **Estado de Fetch API**: Fetch API y la conexión con los endpoints HTTP (`GET /api/categorias/`) **todavía NO están integradas**. Se implementarán en el Paso 8 de esta fase.

##### 3. Vista de Servicios (`servicios.html`)
- **Archivo**: [`frontend/servicios.html`](frontend/servicios.html).
- **Estructura semántica**:
  - `<header class="site-header">` con logotipo y menú de navegación accesible con estado activo (`.nav-link.active` en Servicios).
  - `<main id="main-content">` que contiene el encabezado de vista (`.page-header`) con título "Servicios", badge temático *"Catálogo de Servicios"* y descripción introductoria clara de la oferta comunitaria.
  - Barra de herramientas (`.section-toolbar`) y contenedor dedicado `#servicios-container` con disposición en `.servicios-grid` flexible y adaptada.
  - Tarjetas demostrativas (`.servicio-card`) para los 5 servicios oficiales alineados al modelo real del proyecto (*Puesto de Salud Rural*, *Institución Educativa Rural*, *Servicio de Transporte Rural*, *Atención de Servicios Públicos*, *Programa de Apoyo Social*). Cada tarjeta incluye:
    - Encabezado con icono temático SVG de la categoría y badges identificadores de categoría y municipio (`.servicio-badge-categoria`, `.servicio-badge-municipio`).
    - Cuerpo con título del servicio, descripción del alcance y lista de metadatos rápidos (`.servicio-meta-list`: dirección/ubicación, horario de atención y canal de contacto con iconos SVG accesibles).
    - Pie de tarjeta con botón de acción accesible preparado para el enlace hacia `servicio-detalle.html`.
  - Cuadro informativo de orientación (`.servicios-info-box`) para guiar la navegación complementaria hacia `municipios.html` y `categorias.html`.
  - `<footer class="site-footer">` idéntico y consistente con el pie de página institucional.
- **Componentes reutilizados**: Header institucional, menú móvil accesible (`main.js`), tokens de variables CSS (`styles.css`), botones y enlaces (`.btn`, `.btn-outline-primary`), footer y layout de cuadrícula flexible.
- **Preparación para datos dinámicos**: El elemento `#servicios-container` está formalmente identificado y estructurado para permitir la futura inyección dinámica desde JavaScript (`servicios.js` / Fetch API).
- **Preparación para el detalle de servicio**: Cada tarjeta cuenta con su acción/enlace visualmente preparado hacia `servicio-detalle.html` (sin crear todavía la vista ni implementar parámetros dinámicos en este paso).
- **Estado de Fetch API**: Fetch API y la conexión con los endpoints HTTP (`GET /api/servicios/`) **todavía NO están integradas**. Se implementarán en el Paso 8 de esta fase.

##### 4. Vista de Detalle de Servicio (`servicio-detalle.html`)
- **Archivo**: [`frontend/servicio-detalle.html`](frontend/servicio-detalle.html).
- **Estructura semántica**:
  - `<header class="site-header">` con menú de navegación accesible y logotipo oficial.
  - `<main id="main-content">` que incorpora:
    - Encabezado de página (`.page-header`) con barra de migas de pan (`.page-breadcrumbs`: *Inicio / Servicios / Detalle del Servicio*), badge *"Ficha Informativa"*, título y descripción.
    - Botón de retorno rápido (`.btn-back`) hacia `servicios.html`.
    - Contenedor principal `#servicio-detalle-container` con tarjeta estructurada (`.servicio-detalle-card`):
      - Encabezado con icono temático SVG (`#servicio-icono-box`), nombre del servicio (`#servicio-nombre`), badge de categoría (`#servicio-categoria`), badge de municipio (`#servicio-municipio`) y subregión (`#servicio-subregion`).
      - Bloque de descripción general del servicio (`#servicio-descripcion`).
      - Cuadrícula de datos operativos (`.detalle-info-grid`) con los 4 campos exactos del modelo backend de Django: Ubicación/Dirección (`#servicio-direccion`), Horarios de atención (`#servicio-horarios`), Requisitos previos (`#servicio-requisitos`) y Contacto/Orientación (`#servicio-contacto`).
      - Barra de acciones de navegación inferior (`.detalle-card-actions`) con botón principal *"Volver al Catálogo de Servicios"* y enlaces secundarios a municipios y categorías.
    - Cuadro informativo complementario con recomendaciones al ciudadano antes de desplazarse (`.servicios-info-box`).
  - `<footer class="site-footer">` idéntico y consistente con el pie de página institucional.
- **Componentes reutilizados**: Header institucional, menú móvil accesible (`main.js`), tokens de diseño CSS (`styles.css`), botones (`.btn`, `.btn-primary`, `.btn-outline-primary`), footer y cuadro informativo.
- **Navegación**: Permite regresar ágilmente a `servicios.html` mediante migas de pan, botón superior (`.btn-back`) y acción principal del pie de la ficha, además de mantener enlaces hacia `municipios.html`, `categorias.html` e `index.html`.
- **Preparación para datos dinámicos**: Los elementos del contenedor `#servicio-detalle-container` poseen selectores e identificadores específicos (`#servicio-nombre`, `#servicio-categoria`, `#servicio-municipio`, `#servicio-descripcion`, `#servicio-direccion`, `#servicio-horarios`, `#servicio-requisitos`, `#servicio-contacto`) preparados para la inyección de datos desde JavaScript en el Paso 8.
- **Estado de Fetch API**: Fetch API y la lectura de parámetros URL dinámicos (`?id=ID` / `GET /api/servicios/{id}/`) **todavía NO están integradas**. Se implementarán en el Paso 8 de esta fase.

#### Archivos creados / modificados en este paso

- `frontend/servicio-detalle.html` (Creado): Vista de ficha detallada del servicio con HTML5 semántico.
- `frontend/css/styles.css` (Modificado): Incorporación de estilos modulares para `.page-breadcrumbs`, `.btn-back`, `.servicio-detalle-wrapper`, `.servicio-detalle-card`, `.detalle-card-header`, `.detalle-info-grid`, `.detalle-info-card`, `.detalle-card-actions` y reglas responsive.
- `README.md` (Modificado): Documentación del progreso de la Fase 3, estado del Paso 6 y especificación de la vista de detalle de servicio.

### 🟠 Fase 4 — Integración y pruebas

- [ ] Probar integración frontend-backend
- [ ] Validar respuestas JSON en el cliente web
- [ ] Validar filtros dinámicos desde la interfaz
- [ ] Realizar pruebas responsive en múltiples dispositivos y resoluciones
- [ ] Realizar pruebas de usabilidad con usuarios finales
- [ ] Medir tiempo de respuesta de la API REST
- [ ] Corregir errores encontrados durante las pruebas de integración
- [ ] Verificar cumplimiento total de los requisitos funcionales del MVP

### ☁️ Fase 5 — Despliegue

- [ ] Preparar variables de entorno (`python-dotenv` / `.env`)
- [ ] Configurar entorno de producción para Django (`ALLOWED_HOSTS`, `DEBUG = False`, `SECRET_KEY`)
- [ ] Configurar PostgreSQL en la nube
- [ ] Desplegar backend Django con Gunicorn / WSGI
- [ ] Configurar servidor para el Frontend estático
- [ ] Configurar CORS en producción (`django-cors-headers`)
- [ ] Verificar funcionamiento general en producción
- [ ] Documentar proceso de despliegue en la nube

### 📚 Documentación y presentación

- [x] Actualizar README.md con el estado actual y verificado del backend
- [x] Documentar especificación técnica de la API REST
- [x] Documentar modelo de datos y arquitectura backend
- [ ] Completar documentación técnica final
- [ ] Agregar diagramas de arquitectura y entidad-relación actualizados
- [ ] Preparar presentación del proyecto
- [ ] Exportar presentación a PDF y adjuntar al repositorio
- [ ] Realizar revisión final del repositorio antes de la entrega

---

## 🏆 Logros alcanzados

Registro de hitos consolidados a lo largo del ciclo del proyecto:

- ✅ Repositorio inicial creado y configurado.
- ✅ Arquitectura tecnológica desacoplada (Django REST + PostgreSQL + HTML/CSS/JS) definida.
- ✅ Stack tecnológico seleccionado y documentado.
- ✅ Entorno backend Django + PostgreSQL + Django REST Framework configurado.
- ✅ Aplicación `apps.services` estructurada.
- ✅ Modelos ORM relacionales (`Municipio`, `Categoria`, `Servicio`) implementados y migrados en PostgreSQL.
- ✅ Serializadores DRF con soporte para lectura anidada y escritura por ID configurados.
- ✅ ViewSets y enrutamiento con `DefaultRouter` en `/api/` completamente operativos.
- ✅ Carga de datos iniciales mediante comando `seed_data` ejecutada y verificada.
- ✅ Verificación funcional de la API mediante Django Shell y pruebas de consulta HTTP (listados, detalles, filtros por municipio, categoría y combinados).
- ✅ Panel administrativo Django Admin configurado con búsqueda, filtros y superusuario funcional.
- ⬜ Frontend HTML5/CSS3/JavaScript Vanilla desarrollado e integrado.
- ⬜ Pruebas de integración frontend-backend completadas.
- ⬜ Aplicación desplegada en la nube.

---

## 📊 Métricas

### Rendimiento
Medir el tiempo de respuesta de las consultas principales de la API REST.
- **Meta inicial**: Respuesta inferior a 2 segundos en condiciones normales de prueba.

### Usabilidad
Medir el porcentaje de usuarios que pueden encontrar correctamente un servicio mediante el flujo:
`Municipio → Categoría → Servicio`.

### Funcionalidad
Medir el porcentaje de funcionalidades planificadas para el MVP que se encuentran implementadas y funcionando.

### Tiempo de desarrollo
Registrar el avance de acuerdo con el cronograma definido para el proyecto.

---

## Requisitos

### Backend
- Python 3.10+
- Django 6.x+
- Django REST Framework (DRF) 3.18+
- PostgreSQL 14+ / Drivers `psycopg`
- `django-cors-headers`
- `django-filter`
- Entorno virtual Python (`venv`)

### Frontend
- Navegador web moderno (Chrome, Firefox, Edge) o servidor HTTP estático (Nginx, Netlify, Vercel)

### Herramientas
- Git
- GitHub

---

## Instalación / Configuración del Backend

Para ejecutar el backend localmente y preparar la base para el desarrollo del frontend:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/RuralConecta-ProyectoWeb.git
cd RuralConecta-ProyectoWeb
```

### 2. Configurar el entorno virtual
En Windows (PowerShell):
```powershell
python -m venv backend/venv
.\backend\venv\Scripts\Activate.ps1
```
En Linux / macOS:
```bash
python3 -m venv backend/venv
source backend/venv/bin/activate
```

### 3. Instalar dependencias Python
```bash
pip install -r backend/requirements.txt
```

### 4. Configurar PostgreSQL
Asegurarse de tener PostgreSQL en ejecución y contar con la base de datos `ruralconecta_db` creada:
```sql
CREATE DATABASE ruralconecta_db;
```

### 5. Aplicar migraciones de Django
```bash
cd backend
python manage.py migrate
```

### 6. Cargar datos iniciales de prueba
```bash
python manage.py seed_data
```

### 7. Iniciar el servidor de desarrollo
```bash
python manage.py runserver
```
El backend estará disponible en `http://127.0.0.1:8000/` y la API REST en `http://127.0.0.1:8000/api/`.

---

## 🔐 Seguridad

Durante el desarrollo del proyecto se contemplan e implementan las siguientes medidas de seguridad:

- Protección contra inyección SQL mediante el uso exclusivo de Django ORM (consultas parametrizadas).
- Validación y sanitización de datos mediante serializadores de Django REST Framework.
- Prevención de vulnerabilidades Cross-Site Scripting (XSS): en JavaScript, usar `textContent` en lugar de `innerHTML` sobre datos no confiables provenientes de la API REST.
- Configuración estricta de Cross-Origin Resource Sharing (CORS) mediante `django-cors-headers`.
- Uso de variables de entorno para la gestión segura de parámetros de configuración y claves sensibles (`SECRET_KEY`, credenciales de PostgreSQL).
- No almacenar credenciales ni contraseñas en el repositorio de control de versiones.
- Configuración segura para el entorno de producción (`DEBUG = False`, encabezados de seguridad HTTP).
- Separación estricta entre presentación (HTML5/CSS3/JavaScript) y lógica de negocio (Django/DRF).

---

## Pruebas

- **Backend**: Verificados los endpoints, filtros y la consistencia de datos mediante Django Shell y cliente REST. Pendiente añadir suite automatizada con `APITestCase`.
- **Frontend / Integración**: Pendiente de ejecución en la Fase 4.

---

## Despliegue en la nube

Pendiente de implementación en la Fase 5.

---

## Documentación

La documentación técnica del proyecto se organiza dentro del directorio `docs/`:
- `docs/arquitectura/`: Diagramas de componentes, especificación técnica, estructura del backend y del frontend.
- `docs/base-datos/`: Modelo entidad-relación y diccionario de datos.
- `docs/api/`: Especificación de contratos, endpoints y ejemplos de petición/respuesta de la API REST.

---

## Buenas Prácticas

- Separación de responsabilidades: HTML5 (estructura) / CSS3 (estilos) / JavaScript (comportamiento) / Django+DRF (lógica y API REST) / PostgreSQL (persistencia).
- Modularidad y reutilización de estilos CSS3 y módulos JavaScript.
- Código limpio, tipado y nombres descriptivos.
- No duplicar lógica entre módulos.
- Commits semánticos y descriptivos.
- No almacenar secretos ni contraseñas en Git.
- Documentación actualizada antes de avanzar de fase.

---

## 👥 Equipo

| Integrante | Rol | Institución |
|---|---|---|
| Samuel Arboleda Echeverri | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
| Josue Agudelo Gallego | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
