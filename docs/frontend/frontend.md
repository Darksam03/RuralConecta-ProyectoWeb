# Implementación del Frontend — RuralConecta-ProyectoWeb

## 1. Descripción general

El frontend de RuralConecta es una aplicación web estática compuesta por páginas HTML5 que consumen dinámicamente la API REST del backend mediante JavaScript Vanilla y Fetch API. No utiliza frameworks ni librerías externas.

---

## 2. Páginas implementadas

| Archivo | Ruta | Descripción | JS asociado |
|---|---|---|---|
| `index.html` | `/` | Página principal de presentación del proyecto | `main.js` |
| `municipios.html` | `/municipios.html` | Catálogo dinámico de municipios | `main.js` + `municipios.js` |
| `categorias.html` | `/categorias.html` | Catálogo dinámico de categorías | `main.js` + `categorias.js` |
| `servicios.html` | `/servicios.html` | Listado de servicios con filtros por municipio y categoría | `main.js` + `servicios.js` |
| `servicio-detalle.html` | `/servicio-detalle.html?id=N` | Ficha completa de un servicio individual | `main.js` + `servicio-detalle.js` |

---

## 3. Archivos JavaScript

### 3.1. `main.js` — Lógica compartida

Cargado en todas las páginas. Contiene:

- **`initMobileNavigation()`**: Control del menú de navegación móvil accesible. Gestiona la apertura/cierre del menú hamburguesa, atributos ARIA (`aria-expanded`), cierre con tecla Escape, cierre al hacer clic fuera y restauración del estado en redimensionado de ventana.
- **`initHeaderScrollEffect()`**: Añade la clase `scrolled` al header cuando el usuario hace scroll vertical superior a 20px.

No realiza peticiones HTTP ni consume la API REST.

### 3.2. `municipios.js` — Catálogo de municipios

- Consume `GET /api/municipios/`.
- Renderiza tarjetas (`municipio-card`) con nombre del municipio, subregión y un enlace a `servicios.html?municipio=ID`.
- Muestra badge con el total de municipios registrados.
- Maneja estado vacío (sin municipios) y estado de error (fallo de conexión).
- Incluye función `escapeHtml()` para prevención de XSS.

### 3.3. `categorias.js` — Catálogo de categorías

- Consume `GET /api/categorias/`.
- Renderiza tarjetas (`categoria-card`) con nombre, descripción y un enlace a `servicios.html?categoria=ID`.
- Asigna emojis dinámicos según el nombre de la categoría mediante `getCategoriaEmoji()`.
- Muestra badge con el total de categorías registradas.
- Maneja estados vacío y error.
- Incluye función `escapeHtml()`.

### 3.4. `servicios.js` — Listado y filtrado de servicios

Es el archivo JavaScript más extenso y complejo. Implementa:

- **Carga de municipios** en un selector desplegable (`<select>`).
- **Detección de parámetros URL**: Lee `?municipio=` y `?categoria=` de la URL para preseleccionar filtros.
- **Carga de servicios filtrados**: Consume `GET /api/servicios/?municipio=ID` (opcionalmente con `&categoria=ID`).
- **Agrupación por categoría**: Los servicios se organizan y renderizan agrupados bajo secciones por nombre de categoría.
- **Actualización de URL**: Utiliza `History API` (`pushState`) para actualizar la URL del navegador sin recargar la página al cambiar el municipio.
- **Navegación adelante/atrás**: Escucha el evento `popstate` para soportar los botones de navegación del navegador.
- **Tarjetas de servicio**: Cada servicio muestra nombre, descripción, dirección, horarios, contacto, badges de categoría y municipio, y un enlace a `servicio-detalle.html?id=ID`.
- **Estados**: Cargando (⏳), sin resultados (📭), error de conexión (⚠️).
- Funciones auxiliares: `crearTarjetaServicioHtml()`, `getCategoriaIconEmoji()`, `renderEmptyState()`, `escapeHtml()`.

### 3.5. `servicio-detalle.js` — Detalle de un servicio

- Lee el parámetro `?id=` de la URL.
- Consume `GET /api/servicios/{id}/`.
- Actualiza los elementos DOM existentes en `servicio-detalle.html` usando sus IDs reales: `#servicio-nombre`, `#servicio-categoria`, `#servicio-municipio`, `#servicio-subregion`, `#servicio-descripcion`, `#servicio-direccion`, `#servicio-horarios`, `#servicio-requisitos`, `#servicio-contacto`.
- Actualiza el `<title>` del navegador con el nombre del servicio.
- Maneja error 404 (servicio no encontrado) y errores de conexión.
- Incluye botón de regreso al catálogo en caso de error.

---

## 4. Conexión con la API REST

Todos los archivos JS (excepto `main.js`) definen la URL base de la API mediante:

```javascript
function getApiBaseUrl() {
  return 'https://ruralconecta-backend.onrender.com/api';
}
```

Las peticiones se realizan con `fetch()` nativo, verificando siempre `response.ok` antes de procesar el JSON.

---

## 5. Manejo de estados

Todas las vistas implementan manejo de estados visuales:

| Estado | Indicador | Descripción |
|---|---|---|
| Cargando | ⏳ | Mostrado mientras se espera la respuesta de la API |
| Sin resultados | 📭 / 🏞️ / 🗂️ | Mostrado cuando la API retorna un arreglo vacío |
| Error de conexión | ⚠️ | Mostrado cuando `fetch()` falla o la respuesta no es `ok` |
| Éxito | Tarjetas renderizadas | Los datos se muestran en tarjetas HTML dinámicas |

---

## 6. Prevención de XSS

Cada archivo JavaScript incluye una función `escapeHtml()` que sanitiza cadenas antes de insertarlas en el DOM:

```javascript
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

---

## 7. Estilos CSS

El archivo `frontend/css/styles.css` implementa:

- Variables CSS para colores, tipografía y espaciado.
- Layouts con Flexbox y CSS Grid.
- Tarjetas para municipios, categorías y servicios.
- Responsive design con media queries para:
  - Móviles: 320px – 480px (1 columna, menú hamburguesa).
  - Tabletas: 768px – 1024px (2 columnas).
  - Escritorio: 1024px+ (3-4 columnas).
- Componentes de estado vacío (`empty-state`).
- Header con efecto scroll (clase `.scrolled`).

---

## 8. Imagen

El directorio `frontend/img/` contiene:
- `banner-rural.jpg` — Banner visual utilizado en la página de inicio.

---

## 9. Navegación

La navegación principal está presente en todas las páginas mediante un `<header>` con enlaces a:
- Inicio (`index.html`)
- Municipios (`municipios.html`)
- Categorías (`categorias.html`)
- Servicios (`servicios.html`)

En resoluciones móviles, la navegación se colapsa en un menú hamburguesa accesible con atributos ARIA.
