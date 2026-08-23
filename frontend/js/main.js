/**
 * ==========================================================================
 * RuralConecta - JavaScript Base (Fase 3: Frontend Base)
 * ==========================================================================
 * Este archivo contiene la configuración base, utilidades comunes,
 * control de navegación móvil y la estructura para inicializar las
 * diferentes vistas de la aplicación.
 */

// --------------------------------------------------------------------------
// 1. CONFIGURACIÓN GLOBAL DE LA API REST
// --------------------------------------------------------------------------
const CONFIG = {
  // URL base del backend Django REST Framework
  API_BASE_URL: 'http://127.0.0.1:8000/api',
  ENDPOINTS: {
    MUNICIPIOS: '/municipios/',
    CATEGORIAS: '/categorias/',
    SERVICIOS: '/servicios/'
  },
  DEFAULT_TIMEOUT: 8000 // 8 segundos
};

// --------------------------------------------------------------------------
// 2. UTILIDADES Y HELPERS
// --------------------------------------------------------------------------

/**
 * Obtiene el valor de un parámetro en la URL actual (query string).
 * @param {string} param - Nombre del parámetro a buscar.
 * @returns {string|null} - Valor del parámetro o null si no existe.
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Muestra un estado visual de carga en el contenedor especificado.
 * @param {HTMLElement|string} target - Elemento o selector CSS.
 * @param {string} [message="Cargando información..."] - Mensaje a mostrar.
 */
function showLoading(target, message = 'Cargando información...') {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return;

  container.innerHTML = `
    <div class="state-container" role="status" aria-live="polite">
      <div class="spinner" aria-hidden="true"></div>
      <p class="state-title">${message}</p>
      <p class="state-desc">Por favor espera un momento mientras consultamos los datos.</p>
    </div>
  `;
}

/**
 * Muestra un estado visual de error en el contenedor especificado.
 * @param {HTMLElement|string} target - Elemento o selector CSS.
 * @param {string} message - Mensaje del error.
 * @param {Function} [retryCallback] - Función opcional para reintentar la acción.
 */
function showError(target, message = 'Ocurrió un error al cargar los datos.', retryCallback = null) {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return;

  const retryButtonHtml = retryCallback
    ? `<button class="btn btn-primary btn-sm mt-4" id="btn-retry">Intentar nuevamente</button>`
    : '';

  container.innerHTML = `
    <div class="state-container" role="alert">
      <div class="state-icon" aria-hidden="true">⚠️</div>
      <p class="state-title">No fue posible cargar la información</p>
      <p class="state-desc">${message}</p>
      ${retryButtonHtml}
    </div>
  `;

  if (retryCallback) {
    const btnRetry = container.querySelector('#btn-retry');
    if (btnRetry) {
      btnRetry.addEventListener('click', retryCallback);
    }
  }
}

/**
 * Muestra un estado visual cuando no se encuentran resultados.
 * @param {HTMLElement|string} target - Elemento o selector CSS.
 * @param {string} title - Título del estado vacío.
 * @param {string} description - Descripción orientativa para el usuario.
 */
function showEmpty(target, title = 'No se encontraron resultados', description = 'Intenta ajustar tus criterios de búsqueda o filtros.') {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return;

  container.innerHTML = `
    <div class="state-container">
      <div class="state-icon" aria-hidden="true">🔍</div>
      <p class="state-title">${title}</p>
      <p class="state-desc">${description}</p>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 3. NAVEGACIÓN Y COMPONENTES GLOBALES
// --------------------------------------------------------------------------

/**
 * Inicializa el comportamiento interactivo del menú de navegación móvil.
 */
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-open');
    });
  }
}

// --------------------------------------------------------------------------
// 4. INICIALIZADORES POR VISTA (Preparación para integración progresiva)
// --------------------------------------------------------------------------

/**
 * Inicialización específica para la página de Inicio (index.html)
 */
function initHomePage() {
  console.log('[RuralConecta] Vista de Inicio inicializada.');
}

/**
 * Inicialización específica para la página de Municipios (municipios.html)
 */
function initMunicipiosPage() {
  console.log('[RuralConecta] Vista de Municipios inicializada.');
  const searchInput = document.getElementById('search-municipio');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.municipio-card');
      cards.forEach(card => {
        const name = card.getAttribute('data-name')?.toLowerCase() || '';
        const subregion = card.getAttribute('data-subregion')?.toLowerCase() || '';
        if (name.includes(query) || subregion.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

/**
 * Inicialización específica para la página de Categorías (categorias.html)
 */
function initCategoriasPage() {
  console.log('[RuralConecta] Vista de Categorías inicializada.');
  const municipioId = getQueryParam('municipio_id');
  const municipioNombre = getQueryParam('municipio_nombre');

  if (municipioNombre) {
    const badgeMunicipio = document.getElementById('current-municipio-badge');
    if (badgeMunicipio) {
      badgeMunicipio.textContent = decodeURIComponent(municipioNombre);
    }
  }
}

/**
 * Inicialización específica para la página de Servicios (servicios.html)
 */
function initServiciosPage() {
  console.log('[RuralConecta] Vista de Servicios inicializada.');
  const searchInput = document.getElementById('search-servicio');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.servicio-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title')?.toLowerCase() || '';
        const desc = card.getAttribute('data-desc')?.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

/**
 * Inicialización específica para la página de Detalle de Servicio (servicio-detalle.html)
 */
function initDetallePage() {
  console.log('[RuralConecta] Vista de Detalle de Servicio inicializada.');
  const servicioId = getQueryParam('id');
  if (!servicioId) {
    console.warn('[RuralConecta] No se especificó ID de servicio en la URL.');
  }
}

// --------------------------------------------------------------------------
// 5. AUTO-EJECUCIÓN AL CARGAR EL DOM
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();

  // Detección de la página actual mediante atributo data-page en <body> o ruta
  const pageType = document.body.getAttribute('data-page');

  switch (pageType) {
    case 'home':
      initHomePage();
      break;
    case 'municipios':
      initMunicipiosPage();
      break;
    case 'categorias':
      initCategoriasPage();
      break;
    case 'servicios':
      initServiciosPage();
      break;
    case 'servicio-detalle':
      initDetallePage();
      break;
    default:
      console.log('[RuralConecta] Página cargada:', window.location.pathname);
      break;
  }
});
