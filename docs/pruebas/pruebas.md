# Documentación de Pruebas — RuralConecta-ProyectoWeb

## 1. Pruebas unitarias (Backend)

### 1.1. Ubicación

`backend/apps/services/tests.py`

### 1.2. Framework

`django.test.TestCase` con `rest_framework.test.APIClient`.

### 1.3. Datos de prueba

El método `setUp()` crea datos de prueba aislados en cada ejecución:

- **Municipios**: Andes (Suroeste), Amagá (Suroeste).
- **Categorías**: Salud, Educación.
- **Servicios**: 3 servicios en Andes (2 de Salud, 1 de Educación), 1 servicio en Amagá (Salud).

### 1.4. Tests implementados

| Test | Endpoint | Descripción | Resultado |
|---|---|---|---|
| `test_filter_servicios_by_municipio_id` | `GET /api/servicios/?municipio={id}` | Verifica que al filtrar por ID de municipio se retornan solo los servicios de ese municipio | ☑️ |
| `test_filter_servicios_by_municipio_name` | `GET /api/servicios/?municipio=Andes` | Verifica que al filtrar por nombre de municipio funciona correctamente, probando con Andes (3 resultados) y Amagá (1 resultado) | ☑️ |
| `test_no_mixing_between_municipios` | `GET /api/servicios/?municipio={id}` | Verifica que los servicios de Amagá no incluyen servicios de Andes | ☑️ |

### 1.5. Ejecución

```bash
cd backend
python manage.py test
```

---

## 2. Pruebas de API (Endpoints)

Las siguientes pruebas fueron realizadas durante el desarrollo para verificar el correcto funcionamiento de los endpoints:

| Endpoint | Método | Verificación | Resultado |
|---|---|---|---|
| `/api/municipios/` | `GET` | Retorna listado completo de municipios en formato JSON | ☑️ |
| `/api/municipios/{id}/` | `GET` | Retorna detalle de un municipio específico | ☑️ |
| `/api/categorias/` | `GET` | Retorna listado completo de categorías en formato JSON | ☑️ |
| `/api/categorias/{id}/` | `GET` | Retorna detalle de una categoría específica | ☑️ |
| `/api/servicios/` | `GET` | Retorna listado completo de servicios con objetos anidados | ☑️ |
| `/api/servicios/{id}/` | `GET` | Retorna detalle completo de un servicio individual | ☑️ |
| `/api/servicios/?municipio=ID` | `GET` | Filtra servicios por ID de municipio | ☑️ |
| `/api/servicios/?municipio=nombre` | `GET` | Filtra servicios por nombre de municipio (case-insensitive) | ☑️ |
| `/api/servicios/?categoria=ID` | `GET` | Filtra servicios por ID de categoría | ☑️ |
| `/api/servicios/?categoria=nombre` | `GET` | Filtra servicios por nombre de categoría (case-insensitive) | ☑️ |
| `/api/servicios/?municipio=ID&categoria=ID` | `GET` | Filtra combinando municipio y categoría | ☑️ |

---

## 3. Pruebas de integración Frontend ↔ API

Documentadas en detalle en [`docs/Integracion-pruebas.md`](../Integracion-pruebas.md).

Resumen de verificaciones:

| Verificación | Resultado |
|---|---|
| `municipios.js` consume `GET /api/municipios/` | ☑️ |
| `categorias.js` consume `GET /api/categorias/` | ☑️ |
| `servicios.js` consume `GET /api/servicios/` con filtros | ☑️ |
| `servicio-detalle.js` consume `GET /api/servicios/{id}/` | ☑️ |
| Parseo correcto de JSON (arreglos y objetos anidados) | ☑️ |
| Manejo de arreglos vacíos (`[]`) | ☑️ |
| Validación de `response.ok` antes de parsear JSON | ☑️ |
| Filtro por municipio desde la interfaz | ☑️ |
| Filtro por categoría desde la interfaz | ☑️ |
| Filtro combinado desde la interfaz | ☑️ |
| Actualización de URL con `pushState` | ☑️ |

---

## 4. Pruebas de CORS

| Origen | Verificación | Resultado |
|---|---|---|
| `http://localhost:5500` | Peticiones desde Live Server en desarrollo | ☑️ |
| `http://127.0.0.1:5500` | Peticiones desde Live Server en desarrollo | ☑️ |
| `https://ruralconecta-frontend.onrender.com` | Peticiones desde el frontend desplegado en Render | ☑️ |

---

## 5. Pruebas responsive

| Resolución | Tipo | Verificación | Resultado |
|---|---|---|---|
| 320px – 480px | Móvil | Layouts de 1 columna, menú hamburguesa funcional | ☑️ |
| 768px – 1024px | Tableta | Layouts de 2 columnas | ☑️ |
| 1024px+ | Escritorio | Layouts de 3-4 columnas | ☑️ |

---

## 6. Pruebas de producción

| Verificación | URL | Resultado |
|---|---|---|
| Acceso al frontend | https://ruralconecta-frontend.onrender.com | ☑️ |
| Acceso a la API | https://ruralconecta-backend.onrender.com/api/ | ☑️ |
| Acceso al panel admin | https://ruralconecta-backend.onrender.com/admin/ | ☑️ |
| Carga de municipios desde frontend en producción | https://ruralconecta-frontend.onrender.com/municipios.html | ☑️ |
| Carga de categorías desde frontend en producción | https://ruralconecta-frontend.onrender.com/categorias.html | ☑️ |
| Detalle de servicio desde frontend en producción | https://ruralconecta-frontend.onrender.com/servicio-detalle.html?id=1 | ☑️ |

---

## 7. Estados de interfaz verificados

| Estado | Componente | Verificación | Resultado |
|---|---|---|---|
| Cargando (⏳) | servicios.js | Se muestra indicador de carga durante la petición | ☑️ |
| Sin resultados (📭) | servicios.js | Se muestra mensaje cuando no hay servicios | ☑️ |
| Error de conexión (⚠️) | Todos los JS | Se muestra mensaje descriptivo cuando el backend no responde | ☑️ |
| Sin municipios (🏞️) | municipios.js | Se muestra estado vacío si no hay municipios registrados | ☑️ |
| Sin categorías (🗂️) | categorias.js | Se muestra estado vacío si no hay categorías registradas | ☑️ |
| Servicio no encontrado (404) | servicio-detalle.js | Se muestra mensaje y botón de regreso al catálogo | ☑️ |
