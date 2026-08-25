/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DINÁMICA DE MUNICIPIOS (municipios.js)
 * Carga municipios desde la API REST y direcciona a servicios.html?municipio=ID
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMunicipiosApp();
});

const API_BASE_URL = getApiBaseUrl();

function getApiBaseUrl() {
  const host = window.location.hostname || '127.0.0.1';
  return `${window.location.protocol}//${host}:8000/api`;
}

async function initMunicipiosApp() {
  const municipiosContainer = document.getElementById('municipios-container');
  const municipiosBadge = document.getElementById('municipios-total-badge');

  if (!municipiosContainer) return;

  try {
    const response = await fetch(`${API_BASE_URL}/municipios/`);
    if (!response.ok) {
      throw new Error(`Error en API municipios: ${response.status}`);
    }

    const data = await response.json();
    const municipios = Array.isArray(data) ? data : (data.results || []);

    if (municipiosBadge) {
      municipiosBadge.textContent = `${municipios.length} municipio${municipios.length === 1 ? '' : 's'} registrado${municipios.length === 1 ? '' : 's'}`;
    }

    if (municipios.length === 0) {
      municipiosContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🏞️</div>
          <h3 class="empty-state-title">No hay municipios registrados</h3>
          <p class="empty-state-desc">Actualmente no existen municipios en la base de datos.</p>
        </div>
      `;
      return;
    }

    municipiosContainer.innerHTML = '';

    municipios.forEach(m => {
      const article = document.createElement('article');
      article.className = 'municipio-card';
      article.setAttribute('role', 'listitem');

      article.innerHTML = `
        <div class="municipio-card-header">
          <div class="municipio-icon-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span class="municipio-subregion">Subregión ${escapeHtml(m.subregion || 'Suroeste')}</span>
        </div>

        <div class="municipio-card-body">
          <h3 class="municipio-name">${escapeHtml(m.nombre)}</h3>
          <p class="municipio-description">
            Consulta los servicios esenciales y trámites rurales registrados en el municipio de ${escapeHtml(m.nombre)}.
          </p>
        </div>

        <div class="municipio-card-footer">
          <a href="servicios.html?municipio=${m.id}" class="btn btn-outline-primary municipio-btn" aria-label="Consultar servicios disponibles en ${escapeHtml(m.nombre)}">
            <span>Consultar servicios</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      `;

      municipiosContainer.appendChild(article);
    });

  } catch (error) {
    console.error('Error al cargar la lista de municipios:', error);
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
