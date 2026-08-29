# Implementación del Backend — RuralConecta-ProyectoWeb

## 1. Descripción general

El backend de RuralConecta está construido con **Django 6.1** y **Django REST Framework 3.18.0**. Provee una API REST que expone los recursos de municipios, categorías y servicios almacenados en **PostgreSQL**. Está desplegado en Render como Web Service utilizando Gunicorn como servidor WSGI.

---

## 2. Estructura del backend

```text
backend/
├── manage.py
├── requirements.txt
├── build.sh
├── .env
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
└── apps/
    └── services/
        ├── __init__.py
        ├── admin.py
        ├── apps.py
        ├── models.py
        ├── serializers.py
        ├── tests.py
        ├── urls.py
        ├── views.py
        ├── migrations/
        └── management/
            └── commands/
                └── seed_data.py
```

---

## 3. Configuración del proyecto (`config/`)

### 3.1. `settings.py`

Configuración principal del proyecto Django. Aspectos relevantes:

- **Secret Key**: Obtenida de `os.getenv('DJANGO_SECRET_KEY')`.
- **Debug**: Obtenido de `os.getenv('DEBUG', 'False')`.
- **Allowed Hosts**: Obtenidos de `os.getenv('ALLOWED_HOSTS')`, separados por coma.
- **Base de datos**: Configurada con `dj-database-url` que lee `DATABASE_URL`.
- **Aplicaciones instaladas**: `corsheaders`, `rest_framework`, `django_filters`, `apps.services`.
- **Middleware**: Incluye `CorsMiddleware` (primero), `SecurityMiddleware`, `WhiteNoiseMiddleware`.
- **REST Framework**: Configura `DjangoFilterBackend` como filtro por defecto.
- **CORS**: Orígenes permitidos definidos en `CORS_ALLOWED_ORIGINS`.
- **Producción**: Cuando `DEBUG=False`, se activan SSL redirect, HSTS, cookies seguras y CSRF secure.

### 3.2. `urls.py`

El enrutamiento principal incluye:
- `/admin/` — Panel de administración de Django.
- `/api/` — API REST, delegada a `apps.services.urls`.

### 3.3. `wsgi.py`

Punto de entrada WSGI para Gunicorn en producción: `config.wsgi:application`.

---

## 4. Aplicación `apps.services`

### 4.1. Modelos (`models.py`)

Tres modelos ORM mapeados a tablas en PostgreSQL:

#### Municipio
| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | `BigAutoField` | PK, auto-generado |
| `nombre` | `CharField(max_length=100)` | `unique=True` |
| `subregion` | `CharField(max_length=100)` | Obligatorio |

- Ordenamiento por defecto: `['nombre']`.

#### Categoria
| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | `BigAutoField` | PK, auto-generado |
| `nombre` | `CharField(max_length=100)` | `unique=True` |
| `descripcion` | `TextField` | `blank=True` |
| `icono` | `CharField(max_length=100)` | `blank=True` |

- Ordenamiento por defecto: `['nombre']`.

#### Servicio
| Campo | Tipo | Restricciones |
|---|---|---|
| `id` | `BigAutoField` | PK, auto-generado |
| `municipio` | `ForeignKey(Municipio)` | `on_delete=CASCADE`, `related_name='servicios'` |
| `categoria` | `ForeignKey(Categoria)` | `on_delete=CASCADE`, `related_name='servicios'` |
| `nombre` | `CharField(max_length=200)` | Obligatorio |
| `descripcion` | `TextField` | Obligatorio |
| `direccion` | `CharField(max_length=255)` | Obligatorio |
| `horarios` | `TextField` | Obligatorio |
| `requisitos` | `TextField` | Obligatorio |
| `contacto` | `CharField(max_length=255)` | Obligatorio |

- Ordenamiento por defecto: `['nombre']`.
- Relación con `Municipio`: Muchos a uno (un municipio tiene muchos servicios).
- Relación con `Categoria`: Muchos a uno (una categoría tiene muchos servicios).

### 4.2. Serializadores (`serializers.py`)

#### `MunicipioSerializer`
- Serializa todos los campos del modelo `Municipio`.

#### `CategoriaSerializer`
- Serializa todos los campos del modelo `Categoria`.

#### `ServicioSerializer`
- **Lectura (GET)**: Incluye objetos anidados completos de `municipio` y `categoria` mediante `MunicipioSerializer(read_only=True)` y `CategoriaSerializer(read_only=True)`.
- **Escritura (POST/PUT/PATCH)**: Acepta `municipio_id` y `categoria_id` como enteros mediante `PrimaryKeyRelatedField(write_only=True)`.
- Campos serializados: `id`, `nombre`, `descripcion`, `direccion`, `horarios`, `requisitos`, `contacto`, `municipio`, `categoria`, `municipio_id`, `categoria_id`.

### 4.3. Vistas (`views.py`)

Tres ViewSets basados en `ModelViewSet`:

#### `MunicipioViewSet`
- Queryset: `Municipio.objects.all()`.
- Serializer: `MunicipioSerializer`.

#### `CategoriaViewSet`
- Queryset: `Categoria.objects.all()`.
- Serializer: `CategoriaSerializer`.

#### `ServicioViewSet`
- Queryset: `Servicio.objects.select_related('municipio', 'categoria').all()`.
- Serializer: `ServicioSerializer`.
- `pagination_class = None` — Paginación deshabilitada.
- **`get_queryset()`** personalizado con filtros:
  - `?municipio=ID` → Filtra por `municipio_id` (si el valor es numérico).
  - `?municipio=nombre` → Filtra por `municipio__nombre__iexact` (si el valor es texto).
  - `?categoria=ID` → Filtra por `categoria_id` (si el valor es numérico).
  - `?categoria=nombre` → Filtra por `categoria__nombre__iexact` (si el valor es texto).

La optimización `select_related` evita consultas N+1 al pre-cargar las relaciones de municipio y categoría.

### 4.4. URLs (`urls.py` de la app)

Utiliza `DefaultRouter` de DRF para registrar los tres ViewSets:

```python
router = DefaultRouter()
router.register(r'municipios', MunicipioViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'servicios', ServicioViewSet)
```

Genera automáticamente los endpoints CRUD estándar para cada recurso.

### 4.5. Administración (`admin.py`)

Los tres modelos están registrados en Django Admin con configuración personalizada:
- Campos de búsqueda.
- Filtros laterales.
- Columnas de visualización en lista.

El panel administrativo es accesible en `/admin/` con las credenciales del superusuario.

### 4.6. Comando `seed_data` (`management/commands/seed_data.py`)

Comando personalizado de Django para cargar datos iniciales de prueba. Se ejecuta con:

```bash
python manage.py seed_data
```

Carga datos de ejemplo con municipios del Suroeste antioqueño, las 5 categorías temáticas y servicios asociados.

### 4.7. Pruebas (`tests.py`)

Contiene una suite de pruebas unitarias con `APITestCase`:

- **`test_filter_servicios_by_municipio_id`**: Verifica que el filtro por ID de municipio retorna solo los servicios del municipio indicado.
- **`test_filter_servicios_by_municipio_name`**: Verifica que el filtro por nombre de municipio funciona correctamente.
- **`test_no_mixing_between_municipios`**: Verifica que los servicios de un municipio no se mezclan con los de otro.

---

## 5. CORS

Configurado con `django-cors-headers`. Orígenes permitidos:

| Origen | Uso |
|---|---|
| `http://localhost:5500` | Desarrollo local (Live Server) |
| `http://127.0.0.1:5500` | Desarrollo local |
| `https://ruralconecta-frontend.onrender.com` | Producción |

---

## 6. Archivos estáticos

- **Middleware**: `WhiteNoise` sirve archivos estáticos directamente desde Django en producción.
- **`STATIC_URL`**: `/static/`.
- **`STATIC_ROOT`**: `backend/staticfiles/`.
- **Recolección**: `python manage.py collectstatic --no-input` (ejecutado en `build.sh`).

---

## 7. Servidor de producción

- **Gunicorn** como servidor WSGI.
- Comando de inicio: `gunicorn config.wsgi:application`.
- `conn_max_age=600` para reutilización de conexiones a PostgreSQL.
