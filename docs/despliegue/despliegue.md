# Documentación de Despliegue — RuralConecta-ProyectoWeb

## 1. Plataforma de despliegue

El proyecto RuralConecta está desplegado en **Render** (https://render.com), utilizando dos servicios independientes:

| Componente | Tipo de servicio en Render | URL de producción |
|---|---|---|
| **Backend (Django/DRF)** | Web Service | https://ruralconecta-backend.onrender.com |
| **Frontend (HTML/CSS/JS)** | Static Site | https://ruralconecta-frontend.onrender.com |

---

## 2. Preparación del backend para producción

### 2.1. Dependencias (`requirements.txt`)

El archivo `backend/requirements.txt` contiene todas las dependencias necesarias:

```
asgiref==3.12.1
dj-database-url==3.1.2
Django==6.1
django-cors-headers==4.9.0
django-filter==26.1
djangorestframework==3.18.0
gunicorn==26.2.0
psycopg==3.3.4
psycopg-binary==3.3.4
python-dotenv==1.2.3
sqlparse==0.6.0
tzdata==2026.3
whitenoise==6.12.0
```

### 2.2. Script de construcción (`build.sh`)

El archivo `backend/build.sh` es ejecutado automáticamente por Render durante cada despliegue:

```bash
#!/usr/bin/env bash
set -o errexit

python -m pip install --upgrade pip
pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate
```

Este script realiza:
1. Actualización de pip.
2. Instalación de dependencias desde `requirements.txt`.
3. Recolección de archivos estáticos con `collectstatic`.
4. Aplicación de migraciones de Django sobre PostgreSQL.

### 2.3. Configuración de Django para producción (`settings.py`)

La configuración del proyecto distingue entre desarrollo y producción mediante variables de entorno:

- **`SECRET_KEY`**: Se obtiene de la variable de entorno `DJANGO_SECRET_KEY`.
- **`DEBUG`**: Se obtiene de la variable de entorno `DEBUG`. En producción se configura como `False`.
- **`ALLOWED_HOSTS`**: Se obtiene de la variable de entorno `ALLOWED_HOSTS` (separados por coma).
- **`DATABASE_URL`**: La conexión a PostgreSQL se configura mediante `dj-database-url`, que lee automáticamente la variable `DATABASE_URL`.

Cuando `DEBUG=False`, se activan automáticamente las siguientes medidas de seguridad:

| Configuración | Valor |
|---|---|
| `SECURE_SSL_REDIRECT` | `True` |
| `SECURE_HSTS_SECONDS` | `31536000` (1 año) |
| `SECURE_HSTS_INCLUDE_SUBDOMAINS` | `True` |
| `SECURE_HSTS_PRELOAD` | `True` |
| `SESSION_COOKIE_SECURE` | `True` |
| `CSRF_COOKIE_SECURE` | `True` |
| `SECURE_PROXY_SSL_HEADER` | `('HTTP_X_FORWARDED_PROTO', 'https')` |

### 2.4. Archivos estáticos

Se utiliza **WhiteNoise** como middleware para servir archivos estáticos directamente desde Django en producción, sin necesidad de un servidor externo como Nginx.

- Middleware configurado en `MIDDLEWARE` como `whitenoise.middleware.WhiteNoiseMiddleware`.
- `STATIC_ROOT` apunta a `backend/staticfiles/`.
- `collectstatic` recopila todos los archivos estáticos en esa carpeta durante el build.

---

## 3. Variables de entorno

Las siguientes variables de entorno se configuran en el panel de Render para el Web Service del backend:

| Variable | Descripción | Ejemplo |
|---|---|---|
| `DJANGO_SECRET_KEY` | Clave secreta de Django | (cadena aleatoria segura) |
| `DEBUG` | Modo de depuración | `False` |
| `ALLOWED_HOSTS` | Hosts permitidos | `ruralconecta-backend.onrender.com` |
| `DATABASE_URL` | Cadena de conexión PostgreSQL | `postgres://user:pass@host:5432/dbname` |

---

## 4. Base de datos PostgreSQL

Se utiliza una instancia de PostgreSQL gestionada por Render. La conexión se establece mediante la variable de entorno `DATABASE_URL` que Render provee automáticamente al vincular la base de datos al Web Service.

La librería `dj-database-url` parsea esta variable y configura `DATABASES` en Django con `conn_max_age=600` para reutilización de conexiones.

---

## 5. Configuración de CORS

El middleware `django-cors-headers` está configurado en `settings.py` con los siguientes orígenes permitidos:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://ruralconecta-frontend.onrender.com",
]
```

Esto permite:
- Desarrollo local con Live Server (puerto 5500).
- Producción desde el frontend desplegado en Render.

---

## 6. Configuración del Web Service en Render (Backend)

| Parámetro | Valor |
|---|---|
| **Environment** | Python |
| **Build Command** | `cd backend && chmod +x build.sh && ./build.sh` |
| **Start Command** | `cd backend && gunicorn config.wsgi:application` |
| **Root Directory** | (raíz del repositorio) |
| **Branch** | `main` |
| **Auto-Deploy** | Activado |

---

## 7. Configuración del Static Site en Render (Frontend)

| Parámetro | Valor |
|---|---|
| **Build Command** | (sin comando de build) |
| **Publish Directory** | `frontend` |
| **Branch** | `main` |
| **Auto-Deploy** | Activado |

---

## 8. Conexión frontend → backend

El frontend se conecta al backend mediante la URL base hardcodeada en cada archivo JavaScript:

```javascript
function getApiBaseUrl() {
  return 'https://ruralconecta-backend.onrender.com/api';
}
```

Esta función se invoca en `municipios.js`, `categorias.js`, `servicios.js` y `servicio-detalle.js`.

---

## 9. Verificación posterior al despliegue

Después de cada despliegue se verifican:

1. Acceso al frontend: https://ruralconecta-frontend.onrender.com
2. Acceso a la API: https://ruralconecta-backend.onrender.com/api/
3. Acceso al panel administrativo: https://ruralconecta-backend.onrender.com/admin/
4. Carga dinámica de municipios desde el frontend.
5. Carga dinámica de categorías desde el frontend.
6. Filtrado de servicios por municipio.
7. Vista de detalle de servicio.
8. Funcionamiento de CORS (sin errores de origen cruzado en consola).

---

## 10. URLs finales de producción

| Componente | URL |
|---|---|
| **Frontend** | https://ruralconecta-frontend.onrender.com |
| **Backend / API REST** | https://ruralconecta-backend.onrender.com/api/ |
| **Panel de Administración** | https://ruralconecta-backend.onrender.com/admin/ |
| **Municipios** | https://ruralconecta-backend.onrender.com/api/municipios/ |
| **Categorías** | https://ruralconecta-backend.onrender.com/api/categorias/ |
| **Servicios** | https://ruralconecta-backend.onrender.com/api/servicios/ |
