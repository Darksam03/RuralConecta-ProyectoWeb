# RuralConecta-ProyectoWeb

## Badges

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-A30000?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
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

## Solución propuesta

Plataforma web accesible, ligera y de navegación intuitiva que permite a los ciudadanos consultar de forma rápida los servicios disponibles en su municipio, filtrados por categorías temáticas, proporcionando detalles prácticos como ubicación, horarios de atención, requisitos previos y canales de contacto directo.

---

## Alcance del MVP

### Funcionalidades incluidas
- Consultar el catálogo de municipios (`GET /api/municipios/`).
- Consultar las categorías de servicios disponibles (`GET /api/categorias/`).
- Consultar el listado completo de servicios (`GET /api/servicios/`).
- Filtrar servicios por municipio (`GET /api/servicios/?municipio=ID` o `?municipio=nombre`).
- Filtrar servicios por categoría (`GET /api/servicios/?categoria=ID` o `?categoria=nombre`).
- Filtrar servicios combinando municipio y categoría.
- Mostrar información detallada de un servicio individual (`GET /api/servicios/{id}/`).
- Gestión de datos desde el panel administrativo de Django (`/admin/`).
- Interfaz completamente responsive adaptada a dispositivos móviles, tabletas y escritorio.
- Consumo de datos dinámico mediante API REST en formato JSON.
- Despliegue en producción en Render (backend Web Service + frontend Static Site).

### Fuera del alcance del MVP
- Pasarelas de pago.
- Sistemas médicos clínicos reales.
- Agendamiento real de citas.
- Integraciones con sistemas gubernamentales.
- Chat en tiempo real.
- Inteligencia artificial.
- Aplicación móvil nativa.
- Funcionalidades administrativas complejas.

---

## Tecnologías

### Frontend
- **HTML5** — Estructuración semántica de las páginas y vistas del cliente web.
- **CSS3** — Estilos visuales, Responsive Design (Flexbox, Grid, variables CSS, media queries).
- **JavaScript Vanilla** — Interacción del usuario, manipulación del DOM y consumo asíncrono de la API REST mediante Fetch API.

### Backend
- **Python 3.10+** — Lenguaje de programación base.
- **Django 6.1** — Framework web principal (estructura, enrutamiento, seguridad y panel de administración).
- **Django REST Framework 3.18.0** — Toolkit para la creación de la API REST (endpoints, serializadores, validaciones).
- **django-filter 26.1** — Filtros configurados en DRF.
- **django-cors-headers 4.9.0** — Control de orígenes cruzados (CORS).
- **WhiteNoise 6.12.0** — Servicio de archivos estáticos en producción.
- **Gunicorn 26.2.0** — Servidor WSGI de producción.
- **psycopg 3.3.4** — Driver PostgreSQL.
- **dj-database-url 3.1.2** — Configuración de base de datos mediante variable de entorno.
- **python-dotenv 1.2.3** — Carga de variables de entorno desde `.env`.

### Base de Datos
- **PostgreSQL** — Motor de base de datos relacional principal (instancia gestionada en Render).

### Despliegue
- **Render** — Plataforma cloud (Web Service para backend + Static Site para frontend).

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
              │  Static Site Render │
              └──────────┬──────────┘
                         │
                      HTTP/JSON
                         │
                         ▼
              ┌─────────────────────┐
              │      BACKEND        │
              │ (Django+DRF+ORM)    │
              │  Web Service Render │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     PostgreSQL      │
              │   (Render managed)  │
              └─────────────────────┘
```

> Para más detalles sobre la arquitectura, consultar [`docs/arquitectura/`](docs/arquitectura/).

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
│   ├── api/
│   │   └── especificacion-api.md
│   ├── despliegue/
│   │   └── despliegue.md
│   ├── frontend/
│   │   └── frontend.md
│   ├── backend/
│   │   └── backend.md
│   ├── pruebas/
│   │   └── pruebas.md
│   └── Integracion-pruebas.md
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── build.sh
│   ├── .env
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
│           ├── tests.py
│           ├── urls.py
│           ├── views.py
│           ├── migrations/
│           └── management/
│               └── commands/
│                   └── seed_data.py
│
└── frontend/
    ├── index.html
    ├── municipios.html
    ├── categorias.html
    ├── servicios.html
    ├── servicio-detalle.html
    ├── css/
    │   └── styles.css
    ├── img/
    │   └── banner-rural.jpg
    └── js/
        ├── main.js
        ├── municipios.js
        ├── categorias.js
        ├── servicios.js
        └── servicio-detalle.js
```

---

## Flujo del sistema

```text
Usuario
   ↓
Selecciona municipio (municipios.html)
   ↓
Selecciona categoría (categorias.html)
   ↓
Consulta servicios (servicios.html)
   ↓
Consulta detalle de servicio (servicio-detalle.html)
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

## Frontend

El frontend está compuesto por 5 páginas HTML estáticas que consumen dinámicamente la API REST:

| Página | Archivo | Descripción |
|---|---|---|
| Inicio | `index.html` | Página principal con navegación y presentación del proyecto |
| Municipios | `municipios.html` | Catálogo de municipios cargados desde la API |
| Categorías | `categorias.html` | Catálogo de categorías cargados desde la API |
| Servicios | `servicios.html` | Listado de servicios con filtro por municipio y categoría |
| Detalle | `servicio-detalle.html` | Ficha completa de un servicio individual |

Cada página cuenta con su archivo JavaScript correspondiente en `frontend/js/` que gestiona la conexión con la API, el renderizado dinámico y el manejo de estados (carga, error, sin resultados).

El archivo `main.js` contiene la lógica compartida: menú de navegación móvil accesible con ARIA y efecto de scroll en el header.

> Para más detalles, consultar [`docs/frontend/frontend.md`](docs/frontend/frontend.md).

---

## Backend y API REST

El backend expone una API REST con los siguientes endpoints:

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/municipios/` | Listado de municipios |
| `GET` | `/api/municipios/{id}/` | Detalle de un municipio |
| `GET` | `/api/categorias/` | Listado de categorías |
| `GET` | `/api/categorias/{id}/` | Detalle de una categoría |
| `GET` | `/api/servicios/` | Listado de servicios (con filtros opcionales) |
| `GET` | `/api/servicios/{id}/` | Detalle de un servicio |

**Filtros disponibles en `/api/servicios/`:**
- `?municipio=ID` — Filtrar por ID de municipio.
- `?municipio=nombre` — Filtrar por nombre de municipio (case-insensitive).
- `?categoria=ID` — Filtrar por ID de categoría.
- `?categoria=nombre` — Filtrar por nombre de categoría (case-insensitive).
- Combinación: `?municipio=ID&categoria=ID`.

> Para documentación técnica detallada, consultar [`docs/api/especificacion-api.md`](docs/api/especificacion-api.md) y [`docs/backend/backend.md`](docs/backend/backend.md).

---

## Base de datos

El modelo relacional se compone de tres entidades:

```text
MUNICIPIO (1) ──── (N) SERVICIO (N) ──── (1) CATEGORIA
```

- **Municipio**: `id`, `nombre` (único), `subregion`.
- **Categoría**: `id`, `nombre` (único), `descripcion`, `icono`.
- **Servicio**: `id`, `municipio` (FK), `categoria` (FK), `nombre`, `descripcion`, `direccion`, `horarios`, `requisitos`, `contacto`.

> Para más detalles, consultar [`docs/base-datos/modelo-datos.md`](docs/base-datos/modelo-datos.md).

---

## CORS

La configuración de CORS en `settings.py` permite conexiones desde:
- `http://localhost:5500` (desarrollo local con Live Server)
- `http://127.0.0.1:5500` (desarrollo local)
- `https://ruralconecta-frontend.onrender.com` (producción)

---

## Responsive

El diseño responsive se implementa mediante CSS3 con:
- Variables CSS para consistencia visual.
- Flexbox y CSS Grid para layouts adaptativos.
- Media queries para breakpoints móviles (320px–480px), tabletas (768px–1024px) y escritorio (1024px+).
- Menú hamburguesa con atributos ARIA para accesibilidad.

---

## Variables de entorno

El backend utiliza las siguientes variables de entorno (configuradas en Render y en `.env` local):

| Variable | Descripción |
|---|---|
| `DJANGO_SECRET_KEY` | Clave secreta de Django |
| `DEBUG` | Modo de depuración (`True`/`False`) |
| `ALLOWED_HOSTS` | Hosts permitidos (separados por coma) |
| `DATABASE_URL` | Cadena de conexión a PostgreSQL |

---

## Instalación local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Darksam03/RuralConecta-ProyectoWeb.git
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

### 4. Configurar variables de entorno
Crear el archivo `backend/.env` con:
```env
DJANGO_SECRET_KEY=tu-clave-secreta
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/ruralconecta_db
```

### 5. Configurar PostgreSQL
Asegurarse de tener PostgreSQL en ejecución y crear la base de datos:
```sql
CREATE DATABASE ruralconecta_db;
```

### 6. Aplicar migraciones de Django
```bash
cd backend
python manage.py migrate
```

### 7. Cargar datos iniciales de prueba
```bash
python manage.py seed_data
```

### 8. Crear superusuario (opcional)
```bash
python manage.py createsuperuser
```

### 9. Iniciar el servidor de desarrollo
```bash
python manage.py runserver
```
El backend estará disponible en `http://127.0.0.1:8000/` y la API REST en `http://127.0.0.1:8000/api/`.

### 10. Iniciar el frontend
Abrir `frontend/index.html` con un servidor HTTP estático (por ejemplo, Live Server en VS Code en el puerto 5500).

---

## Pruebas

### Pruebas unitarias (Backend)
El proyecto incluye pruebas unitarias automatizadas con `APITestCase` en `backend/apps/services/tests.py`:
- Filtrado de servicios por ID de municipio.
- Filtrado de servicios por nombre de municipio.
- Verificación de aislamiento entre municipios (no mezcla de datos).

Ejecutar con:
```bash
cd backend
python manage.py test
```

### Pruebas de integración
Se verificó la comunicación completa entre el frontend y la API REST documentada en [`docs/Integracion-pruebas.md`](docs/Integracion-pruebas.md).

> Para más detalles, consultar [`docs/pruebas/pruebas.md`](docs/pruebas/pruebas.md).

---

## 🔐 Seguridad

- Protección contra inyección SQL mediante Django ORM (consultas parametrizadas).
- Validación y sanitización de datos mediante serializadores DRF.
- Prevención de XSS: el frontend utiliza `escapeHtml()` en todos los módulos JS para sanitizar datos de la API antes de renderizar.
- Configuración estricta de CORS mediante `django-cors-headers`.
- Variables de entorno para gestión segura de claves (`SECRET_KEY`, `DATABASE_URL`).
- Configuración segura en producción: `DEBUG=False`, SSL redirect, HSTS, cookies seguras, CSRF secure.
- Separación estricta entre presentación (HTML5/CSS3/JS) y lógica de negocio (Django/DRF).

---

## Despliegue

El proyecto está desplegado en **Render**:
- **Backend**: Web Service con Gunicorn, WhiteNoise para archivos estáticos y PostgreSQL gestionado.
- **Frontend**: Static Site sirviendo los archivos HTML/CSS/JS.
- **Build script**: `backend/build.sh` ejecuta pip upgrade, instalación de dependencias, collectstatic y migraciones.

> Para documentación detallada del proceso, consultar [`docs/despliegue/despliegue.md`](docs/despliegue/despliegue.md).

---

## 🌐 URLs de producción

| Componente | URL |
|---|---|
| **Frontend** | [https://ruralconecta-frontend.onrender.com](https://ruralconecta-frontend.onrender.com/) |
| **Backend / API REST** | [https://ruralconecta-backend.onrender.com/api/](https://ruralconecta-backend.onrender.com/api/) |
| **Panel de Administración** | [https://ruralconecta-backend.onrender.com/admin/](https://ruralconecta-backend.onrender.com/admin/) |

---

## 📸 Evidencias

Las evidencias visuales del funcionamiento del proyecto (capturas de pantalla de la API, frontend, responsive, panel administrativo y despliegue en Render) han sido incorporadas y documentadas exhaustivamente.

> Para visualizar todas las capturas de pantalla del sistema en producción, consultar [`docs/evidencias/evidencias.md`](docs/evidencias/evidencias.md).

---

## 📊 Checklist del proyecto

### Fase 0 — Análisis y planificación
- ☑️ Crear repositorio GitHub
- ☑️ Configurar estructura inicial del proyecto
- ☑️ Crear README.md
- ☑️ Crear .gitignore
- ☑️ Definir problemática
- ☑️ Definir objetivo general
- ☑️ Definir objetivos específicos
- ☑️ Definir alcance del MVP
- ☑️ Definir arquitectura tecnológica
- ☑️ Seleccionar stack tecnológico
- ☑️ Crear especificación técnica
- ☑️ Diseñar modelo entidad-relación
- ☑️ Definir modelo de datos PostgreSQL
- ☑️ Definir estructura inicial de la API REST

### Fase 1 — Arquitectura y documentación
- ☑️ Diseñar diagrama de arquitectura
- ☑️ Diseñar diagrama entidad-relación definitivo
- ☑️ Definir estructura del backend
- ☑️ Definir estructura del frontend
- ☑️ Documentar endpoints de la API REST
- ☑️ Adaptar arquitectura a HTML5 + CSS3 + JavaScript Vanilla
- ☑️ Actualizar documentación tecnológica completa
- ☑️ Validar arquitectura completa antes de programar

### Fase 2 — Backend
- ☑️ Configuración inicial del proyecto Django
- ☑️ Configuración del entorno virtual
- ☑️ Configuración de PostgreSQL como base de datos relacional
- ☑️ Conexión y verificación de Django + PostgreSQL
- ☑️ Configuración de la estructura de aplicaciones Django
- ☑️ Creación de la aplicación de servicios (`apps.services`)
- ☑️ Definición de modelos ORM (`Municipio`, `Categoria`, `Servicio`)
- ☑️ Creación y aplicación de migraciones de Django
- ☑️ Creación de serializadores DRF
- ☑️ Creación de vistas de la API REST mediante `ViewSets`
- ☑️ Configuración de URLs y enrutadores de la API REST (`DefaultRouter`)
- ☑️ Configuración de los endpoints de la API
- ☑️ Carga de datos iniciales mediante el comando personalizado `seed_data`
- ☑️ Verificación de la integridad de datos mediante Django Shell
- ☑️ Verificación y prueba de funcionamiento de los endpoints de la API REST
- ☑️ Prueba de filtros por municipio
- ☑️ Prueba de filtros por categoría
- ☑️ Prueba combinada de filtros
- ☑️ Prueba de consulta individual de servicios por ID
- ☑️ Configuración del panel de administración Django Admin
- ☑️ Registro de modelos en `admin.py`
- ☑️ Creación y configuración del usuario administrador
- ☑️ Verificación y validación del panel administrativo
- ☑️ Implementar pruebas unitarias automatizadas con `APITestCase`

### Fase 3 — Frontend
- ☑️ Crear estructura HTML5 base del cliente web
- ☑️ Configurar CSS3 modular
- ☑️ Implementar vista de selección de municipio
- ☑️ Implementar vista de selección de categoría
- ☑️ Implementar vista de listado de servicios
- ☑️ Implementar ficha detallada del servicio
- ☑️ Implementar responsive completo
- ☑️ Integrar frontend con API REST
- ☑️ Manejar estados de carga, éxito, sin resultados y errores

### Fase 4 — Integración y pruebas
- ☑️ Probar integración frontend-backend
- ☑️ Validar respuestas JSON en el cliente web
- ☑️ Validar filtros dinámicos desde la interfaz
- ☑️ Realizar pruebas responsive
- ☑️ Realizar pruebas de usabilidad
- ☑️ Medir tiempo de respuesta de la API REST
- ☑️ Corregir errores encontrados durante las pruebas
- ☑️ Verificar cumplimiento total de los requisitos funcionales del MVP

### Fase 5 — Despliegue
- ☑️ Configurar variables de entorno
- ☑️ Configurar entorno de producción para Django
- ☑️ Configurar PostgreSQL en la nube
- ☑️ Desplegar backend Django con Gunicorn
- ☑️ Configurar Static Site para el frontend
- ☑️ Configurar CORS en producción
- ☑️ Verificar funcionamiento general en producción
- ☑️ Documentar proceso de despliegue

### Documentación y presentación
- ☑️ Actualizar README.md
- ☑️ Documentar especificación técnica de la API REST
- ☑️ Documentar modelo de datos y arquitectura backend
- ☑️ Completar documentación técnica final
- ☑️ Agregar diagramas de arquitectura y entidad-relación actualizados
- ☑️ Preparar presentación del proyecto
- ☑️ Exportar presentación a PDF y adjuntar al repositorio
- ☑️ Realizar revisión final del repositorio antes de la entrega

---

## 📚 Documentación técnica

La documentación técnica detallada del proyecto se organiza dentro del directorio `docs/`:

| Documento | Ubicación | Contenido |
|---|---|---|
| Especificación técnica | [`docs/arquitectura/especificacion-tecnica.md`](docs/arquitectura/especificacion-tecnica.md) | Requisitos funcionales, no funcionales, arquitectura y métricas |
| Estructura del backend | [`docs/arquitectura/estructura-backend.md`](docs/arquitectura/estructura-backend.md) | Diseño interno del backend Django/DRF |
| Estructura del frontend | [`docs/arquitectura/estructura-frontend.md`](docs/arquitectura/estructura-frontend.md) | Diseño de la capa de presentación |
| Modelo de datos | [`docs/base-datos/modelo-datos.md`](docs/base-datos/modelo-datos.md) | Modelo E-R, diccionario de datos |
| Especificación de API | [`docs/api/especificacion-api.md`](docs/api/especificacion-api.md) | Contrato de endpoints, respuestas JSON |
| Despliegue | [`docs/despliegue/despliegue.md`](docs/despliegue/despliegue.md) | Proceso de despliegue en Render |
| Frontend | [`docs/frontend/frontend.md`](docs/frontend/frontend.md) | Implementación real del frontend |
| Backend | [`docs/backend/backend.md`](docs/backend/backend.md) | Implementación real del backend |
| Pruebas | [`docs/pruebas/pruebas.md`](docs/pruebas/pruebas.md) | Registro de pruebas realizadas |
| Integración y pruebas | [`docs/Integracion-pruebas.md`](docs/Integracion-pruebas.md) | Informe de la Fase 4 |
| Evidencias Visuales | [`docs/evidencias/evidencias.md`](docs/evidencias/evidencias.md) | Capturas de pantalla de la aplicación en producción |

---

## Buenas Prácticas

- Separación de responsabilidades: HTML5 (estructura) / CSS3 (estilos) / JavaScript (comportamiento) / Django+DRF (lógica y API REST) / PostgreSQL (persistencia).
- Modularidad y reutilización de estilos CSS3 y módulos JavaScript.
- Código limpio y nombres descriptivos.
- No duplicar lógica entre módulos.
- Commits semánticos y descriptivos.
- No almacenar secretos ni contraseñas en Git.
- Documentación actualizada.

---

## 👥 Equipo

| Integrante | Rol | Institución |
|---|---|---|
| Samuel Arboleda Echeverri | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
| Josue Agudelo Gallego | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
