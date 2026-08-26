/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DINÁMICA DE CATEGORÍAS (categorias.js)
 * Carga categorías desde la API REST y direcciona a servicios.html?categoria=ID
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoriasApp();
});

const API_BASE_URL = getApiBaseUrl();

function getApiBaseUrl() {
  const host = (window.location.hostname && window.location.hostname !== '') ? window.location.hostname : '127.0.0.1';
  const protocol = (window.location.protocol === 'https:') ? 'https:' : 'http:';
  return `${protocol}//${host}:8000/api`;
}

async function initCategoriasApp() {
  const categoriasContainer = document.getElementById('categorias-container');
  const categoriasBadge = document.getElementById('categorias-total-badge') || document.querySelector('.toolbar-badge');

  if (!categoriasContainer) return;

  try {
    const response = await fetch(`${API_BASE_URL}/categorias/`);
    if (!response.ok) {
      throw new Error(`Error en API categorías: ${response.status}`);
    }

    const data = await response.json();
    const categorias = Array.isArray(data) ? data : (data.results || []);

    if (categoriasBadge) {
      const badgeText = categoriasBadge.querySelector('span') || categoriasBadge;
      badgeText.textContent = `${categorias.length} categorí${categorias.length === 1 ? 'a' : 'as'} registrada${categorias.length === 1 ? '' : 's'}`;
    }

    if (categorias.length === 0) {
      categoriasContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🗂️</div>
          <h3 class="empty-state-title">No hay categorías registradas</h3>
          <p class="empty-state-desc">Actualmente no existen categorías en la base de datos.</p>
        </div>
      `;
      return;
    }

    categoriasContainer.innerHTML = '';

    categorias.forEach(cat => {
      const article = document.createElement('article');
      article.className = 'categoria-card';
      article.setAttribute('role', 'listitem');

      article.innerHTML = `
        <div class="categoria-card-header">
          <div class="categoria-icon-box" aria-hidden="true">
            <span style="font-size: 1.5rem;">${getCategoriaEmoji(cat.nombre)}</span>
          </div>
          <span class="categoria-badge">${escapeHtml(cat.nombre)}</span>
        </div>

        <div class="categoria-card-body">
          <h3 class="categoria-name">${escapeHtml(cat.nombre)}</h3>
          <p class="categoria-description">
            ${escapeHtml(cat.descripcion || 'Servicios y trámites esenciales clasificados en esta categoría.')}
          </p>
        </div>

        <div class="categoria-card-footer">
          <a href="servicios.html?categoria=${cat.id}" class="btn btn-outline-primary categoria-btn" aria-label="Consultar servicios de ${escapeHtml(cat.nombre)}">
            <span>Consultar servicios</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      `;

      categoriasContainer.appendChild(article);
    });

  } catch (error) {
    console.error('Error al cargar la lista de categorías:', error);
    if (categoriasBadge) {
      const badgeText = categoriasBadge.querySelector('span') || categoriasBadge;
      badgeText.textContent = 'Error de conexión';
    }
    if (categoriasContainer) {
      categoriasContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">⚠️</div>
          <h3 class="empty-state-title">No fue posible cargar las categorías</h3>
          <p class="empty-state-desc">Ocurrió un error al conectar con el servidor REST (${API_BASE_URL}). Por favor verifica que el backend de Django esté en ejecución.</p>
        </div>
      `;
    }
  }
}

function getCategoriaEmoji(catNombre) {
  if (!catNombre) return '📋';
  const nombreLower = catNombre.toLowerCase();
  if (nombreLower.includes('salud')) return '🏥';
  if (nombreLower.includes('educación') || nombreLower.includes('educacion')) return '📚';
  if (nombreLower.includes('transporte')) return '🚌';
  if (nombreLower.includes('públicos') || nombreLower.includes('publicos')) return '⚡';
  if (nombreLower.includes('social')) return '🤝';
  return '📋';
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
