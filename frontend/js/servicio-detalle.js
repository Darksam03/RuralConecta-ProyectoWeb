/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DE DETALLE DE SERVICIO (servicio-detalle.js)
 * Carga dinámica del detalle de un servicio desde API REST por ID
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initServicioDetalleApp();
});

const API_BASE_URL = getApiBaseUrl();

function getApiBaseUrl() {
  const host = window.location.hostname || '127.0.0.1';
  return `${window.location.protocol}//${host}:8000/api`;
}

async function initServicioDetalleApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');

  if (!idParam) return;

  try {
    const response = await fetch(`${API_BASE_URL}/servicios/${idParam}/`);
    if (!response.ok) {
      throw new Error(`Error al obtener servicio ${idParam}: ${response.status}`);
    }

    const servicio = await response.json();

    // Actualizar elementos DOM si existen
    const catBadge = document.getElementById('detail-category-badge');
    const munBadge = document.getElementById('detail-municipio-badge');
    const title = document.getElementById('detail-title');
    const entity = document.getElementById('detail-entity');
    const breadcrumbTitle = document.getElementById('breadcrumb-service-title');
    const description = document.getElementById('detail-description');
    const requirements = document.getElementById('detail-requirements');
    const hours = document.getElementById('detail-hours');
    const address = document.getElementById('detail-address');
    const phone = document.getElementById('detail-phone');

    if (catBadge) catBadge.textContent = servicio.categoria ? servicio.categoria.nombre : 'General';
    if (munBadge) munBadge.textContent = servicio.municipio ? servicio.municipio.nombre : '';
    if (title) title.textContent = servicio.nombre;
    if (breadcrumbTitle) breadcrumbTitle.textContent = servicio.nombre;
    if (entity) entity.innerHTML = `Entidad prestadora: <strong>${escapeHtml(servicio.contacto || 'Administración Municipal')}</strong>`;
    if (description) description.textContent = servicio.descripcion;
    if (requirements) requirements.innerHTML = `<li>${escapeHtml(servicio.requisitos || 'No requiere documentación previa.')}</li>`;
    if (hours) hours.textContent = servicio.horarios || 'Consultar en la entidad.';
    if (address) address.textContent = servicio.direccion || 'Ubicación municipal.';
    if (phone) phone.textContent = servicio.contacto || 'No disponible.';

  } catch (error) {
    console.error('Error al cargar el detalle del servicio:', error);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
