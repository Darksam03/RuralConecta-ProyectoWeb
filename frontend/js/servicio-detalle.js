/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DE DETALLE DE SERVICIO (servicio-detalle.js)
 * Carga dinámica del detalle de un servicio desde API REST por ID.
 * Utiliza los IDs existentes en servicio-detalle.html:
 *   #servicio-nombre, #servicio-categoria, #servicio-municipio,
 *   #servicio-subregion, #servicio-descripcion, #servicio-direccion,
 *   #servicio-horarios, #servicio-requisitos, #servicio-contacto
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initServicioDetalleApp();
});

function getApiBaseUrl() {
  const host = (window.location.hostname && window.location.hostname !== '') ? window.location.hostname : '127.0.0.1';
  const protocol = (window.location.protocol === 'https:') ? 'https:' : 'http:';
  return `${protocol}//${host}:8000/api`;
}

async function initServicioDetalleApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');
  const container = document.getElementById('servicio-detalle-container');

  // Si no hay ID en la URL, mostrar mensaje orientativo
  if (!idParam) {
    mostrarError(container, 'No se especificó un servicio para consultar. Regresa al catálogo y selecciona un servicio.');
    return;
  }

  try {
    const API_BASE_URL = getApiBaseUrl();
    const response = await fetch(`${API_BASE_URL}/servicios/${idParam}/`);

    if (!response.ok) {
      if (response.status === 404) {
        mostrarError(container, `El servicio solicitado (ID: ${escapeHtml(idParam)}) no fue encontrado en la base de datos.`);
      } else {
        mostrarError(container, `Error al consultar el servicio (código ${response.status}). Intenta nuevamente más tarde.`);
      }
      return;
    }

    const servicio = await response.json();

    // ---------------------------------------------------------------
    // Actualizar los elementos DOM existentes en servicio-detalle.html
    // usando los IDs reales del HTML
    // ---------------------------------------------------------------

    // Nombre del servicio
    const nombre = document.getElementById('servicio-nombre');
    if (nombre) nombre.textContent = servicio.nombre || 'Servicio sin nombre';

    // Badge de categoría
    const categoria = document.getElementById('servicio-categoria');
    if (categoria) {
      categoria.textContent = (servicio.categoria && servicio.categoria.nombre)
        ? servicio.categoria.nombre
        : 'General';
    }

    // Badge de municipio
    const municipio = document.getElementById('servicio-municipio');
    if (municipio) {
      municipio.textContent = (servicio.municipio && servicio.municipio.nombre)
        ? servicio.municipio.nombre
        : '';
    }

    // Badge de subregión
    const subregion = document.getElementById('servicio-subregion');
    if (subregion) {
      subregion.textContent = (servicio.municipio && servicio.municipio.subregion)
        ? servicio.municipio.subregion
        : '';
    }

    // Descripción general
    const descripcion = document.getElementById('servicio-descripcion');
    if (descripcion) descripcion.textContent = servicio.descripcion || 'Sin descripción disponible.';

    // Dirección / Ubicación
    const direccion = document.getElementById('servicio-direccion');
    if (direccion) direccion.textContent = servicio.direccion || 'Ubicación no especificada.';

    // Horarios de atención
    const horarios = document.getElementById('servicio-horarios');
    if (horarios) horarios.textContent = servicio.horarios || 'Consultar en la entidad.';

    // Requisitos del trámite
    const requisitos = document.getElementById('servicio-requisitos');
    if (requisitos) requisitos.textContent = servicio.requisitos || 'No requiere documentación previa.';

    // Contacto y orientación
    const contacto = document.getElementById('servicio-contacto');
    if (contacto) contacto.textContent = servicio.contacto || 'No disponible.';

    // Actualizar el título de la página del navegador
    document.title = `${servicio.nombre || 'Detalle'} | RuralConecta`;

  } catch (error) {
    console.error('Error al cargar el detalle del servicio:', error);
    mostrarError(container, 'No se pudo conectar con el servidor de RuralConecta. Verifica que el backend esté en ejecución e intenta nuevamente.');
  }
}

/**
 * Muestra un mensaje de error dentro del contenedor de detalle,
 * reutilizando las clases CSS existentes del sistema de diseño.
 * @param {HTMLElement|null} container
 * @param {string} mensaje
 */
function mostrarError(container, mensaje) {
  if (!container) return;
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">⚠️</div>
      <h3 class="empty-state-title">Servicio no disponible</h3>
      <p class="empty-state-desc">${escapeHtml(mensaje)}</p>
      <a href="servicios.html" class="btn btn-primary" style="margin-top: 1.5rem;">
        <span>Volver al catálogo de servicios</span>
      </a>
    </div>
  `;
}

/**
 * Escapa HTML para prevenir vulnerabilidades XSS
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
