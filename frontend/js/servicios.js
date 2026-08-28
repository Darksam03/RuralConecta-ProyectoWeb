/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DINÁMICA DE SERVICIOS POR MUNICIPIO (servicios.js)
 * Carga dinámica desde la API REST, filtrado dinámico por municipio,
 * agrupación por categoría y renderizado de TODOS los servicios.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initServiciosApp();
});

const API_BASE_URL = getApiBaseUrl();


function getApiBaseUrl() {
  return 'https://ruralconecta-backend.onrender.com/api';
}

async function initServiciosApp() {
  const selectMunicipio = document.getElementById('select-municipio');
  const serviciosContainer = document.getElementById('servicios-container');

  if (!selectMunicipio || !serviciosContainer) {
    console.warn('RuralConecta: Elementos principales de la vista servicios no encontrados.');
    return;
  }

  try {
    // 1. Obtener todos los municipios existentes desde la API REST
    const response = await fetch(`${API_BASE_URL}/municipios/`);
    if (!response.ok) {
      throw new Error(`Error en API municipios: ${response.status}`);
    }

    const municipios = await response.json();
    const municipiosList = Array.isArray(municipios) ? municipios : (municipios.results || []);

    if (municipiosList.length === 0) {
      renderEmptyState(serviciosContainer, 'No hay municipios registrados en la base de datos.');
      return;
    }

    // 2. Poblar el selector desplegable de municipios
    selectMunicipio.innerHTML = '';
    municipiosList.forEach(m => {
      const option = document.createElement('option');
      option.value = m.id;
      option.textContent = `${m.nombre} (${m.subregion || 'Antioquia'})`;
      option.dataset.nombre = m.nombre;
      selectMunicipio.appendChild(option);
    });

    // 3. Determinar el municipio a seleccionar inicialmente (por parámetro URL ?municipio= o primer municipio)
    const urlParams = new URLSearchParams(window.location.search);
    const municipioParam = urlParams.get('municipio');
    const categoriaParam = urlParams.get('categoria');

    let initialMunicipio = null;
    if (municipioParam) {
      initialMunicipio = municipiosList.find(m => 
        String(m.id) === String(municipioParam) || 
        m.nombre.toLowerCase() === municipioParam.toLowerCase()
      );
    }

    if (!initialMunicipio) {
      initialMunicipio = municipiosList[0];
    }

    selectMunicipio.value = initialMunicipio.id;

    // 4. Cargar y renderizar los servicios del municipio seleccionado
    await cargarServiciosPorMunicipio(initialMunicipio.id, initialMunicipio.nombre, categoriaParam);

    // 5. Escuchar cambios en el selector para actualizar dinámicamente
    selectMunicipio.addEventListener('change', async (e) => {
      const selectedId = e.target.value;
      const selectedOption = selectMunicipio.options[selectMunicipio.selectedIndex];
      const selectedNombre = selectedOption ? (selectedOption.dataset.nombre || selectedOption.textContent) : '';

      // Actualizar la URL del navegador de forma transparente (sin recargar la página)
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('municipio', selectedId);
      window.history.pushState({ municipioId: selectedId }, '', newUrl);

      const currentParams = new URLSearchParams(window.location.search);
      const activeCat = currentParams.get('categoria');
      await cargarServiciosPorMunicipio(selectedId, selectedNombre, activeCat);
    });

    // Escuchar el evento popstate para soportar navegación adelante/atrás en el navegador
    window.addEventListener('popstate', async () => {
      const currentUrlParams = new URLSearchParams(window.location.search);
      const currentMunicipioParam = currentUrlParams.get('municipio');
      const activeCat = currentUrlParams.get('categoria');
      if (currentMunicipioParam) {
        const found = municipiosList.find(m => String(m.id) === String(currentMunicipioParam));
        if (found) {
          selectMunicipio.value = found.id;
          await cargarServiciosPorMunicipio(found.id, found.nombre, activeCat);
        }
      }
    });

  } catch (error) {
    console.error('Error al inicializar los servicios:', error);
    renderEmptyState(
      serviciosContainer,
      'No se pudo conectar con el servidor backend de RuralConecta. Por favor verifica que el backend de Django esté en ejecución.'
    );
  }
}

/**
 * Consulta la API para obtener TODOS los servicios de un municipio específico y los renderiza agrupados por categoría.
 * @param {number|string} municipioId 
 * @param {string} municipioNombre 
 * @param {string|number} [categoriaIdParam]
 */
async function cargarServiciosPorMunicipio(municipioId, municipioNombre, categoriaIdParam) {
  const serviciosContainer = document.getElementById('servicios-container');
  const serviciosHeading = document.getElementById('servicios-heading');
  const totalBadge = document.getElementById('servicios-total-badge');

  // Indicar estado de carga
  serviciosContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">⏳</div>
      <h3 class="empty-state-title">Cargando servicios...</h3>
      <p class="empty-state-desc">Consultando la oferta de servicios para ${escapeHtml(municipioNombre) || 'el municipio seleccionado'}.</p>
    </div>
  `;

  try {
    let url = `${API_BASE_URL}/servicios/?municipio=${municipioId}`;
    if (categoriaIdParam) {
      url += `&categoria=${categoriaIdParam}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en API servicios: ${response.status}`);
    }

    const data = await response.json();
    const servicios = Array.isArray(data) ? data : (data.results || []);

    // Actualizar encabezados y totales
    if (serviciosHeading) {
      serviciosHeading.textContent = `Servicios disponibles en ${municipioNombre || 'el municipio'}`;
    }

    if (totalBadge) {
      totalBadge.textContent = `${servicios.length} servicio${servicios.length === 1 ? '' : 's'} registrado${servicios.length === 1 ? '' : 's'}`;
    }

    if (servicios.length === 0) {
      renderEmptyState(
        serviciosContainer,
        `No se encontraron servicios registrados para ${municipioNombre || 'este municipio'}.`
      );
      return;
    }

    // -------------------------------------------------------------------
    // AGRUPACIÓN POR CATEGORÍA
    // Organizar todos los servicios recibidos según su objeto categoría
    // -------------------------------------------------------------------
    const serviciosPorCategoria = {};

    servicios.forEach(servicio => {
      const catNombre = (servicio.categoria && servicio.categoria.nombre) 
        ? servicio.categoria.nombre 
        : 'Sin categoría';

      if (!serviciosPorCategoria[catNombre]) {
        serviciosPorCategoria[catNombre] = [];
      }
      serviciosPorCategoria[catNombre].push(servicio);
    });

    // Renderizar las secciones de categorías con TODOS sus servicios
    serviciosContainer.innerHTML = '';

    Object.keys(serviciosPorCategoria).sort().forEach(catNombre => {
      const listaServiciosCategoria = serviciosPorCategoria[catNombre];

      const catSection = document.createElement('section');
      catSection.className = 'categoria-group-section';

      const catHeader = document.createElement('div');
      catHeader.className = 'categoria-group-header';
      catHeader.innerHTML = `
        <div class="categoria-group-title-wrapper">
          <span style="font-size: 1.5rem;">${getCategoriaIconEmoji(catNombre)}</span>
          <h3 class="categoria-group-title">${escapeHtml(catNombre)}</h3>
        </div>
        <span class="categoria-group-count">${listaServiciosCategoria.length} servicio${listaServiciosCategoria.length === 1 ? '' : 's'}</span>
      `;
      catSection.appendChild(catHeader);

      const grid = document.createElement('div');
      grid.className = 'servicios-grid';
      grid.setAttribute('role', 'list');

      listaServiciosCategoria.forEach(servicio => {
        const cardHtml = crearTarjetaServicioHtml(servicio);
        grid.appendChild(cardHtml);
      });

      catSection.appendChild(grid);
      serviciosContainer.appendChild(catSection);
    });

  } catch (error) {
    console.error('Error al cargar servicios del municipio:', error);
    renderEmptyState(
      serviciosContainer,
      'Ocurrió un error al consultar los servicios del municipio seleccionado. Verifica que el servidor backend esté en ejecución.'
    );
  }
}

/**
 * Genera el elemento HTML para una tarjeta de servicio individual
 * @param {Object} servicio 
 * @returns {HTMLElement}
 */
function crearTarjetaServicioHtml(servicio) {
  const article = document.createElement('article');
  article.className = 'servicio-card';
  article.setAttribute('role', 'listitem');

  const catNombre = servicio.categoria ? servicio.categoria.nombre : 'General';
  const munNombre = servicio.municipio ? servicio.municipio.nombre : '';

  article.innerHTML = `
    <div class="servicio-card-header">
      <div class="servicio-icon-box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <div class="servicio-badges">
        <span class="servicio-badge servicio-badge-categoria">${escapeHtml(catNombre)}</span>
        <span class="servicio-badge servicio-badge-municipio">${escapeHtml(munNombre)}</span>
      </div>
    </div>

    <div class="servicio-card-body">
      <h3 class="servicio-name">${escapeHtml(servicio.nombre)}</h3>
      <p class="servicio-description">${escapeHtml(servicio.descripcion)}</p>

      <ul class="servicio-meta-list" aria-label="Detalles del servicio">
        <li class="servicio-meta-item">
          <span class="servicio-meta-icon" aria-hidden="true">📍</span>
          <span class="servicio-meta-text"><strong>Dirección:</strong> ${escapeHtml(servicio.direccion || 'No especificada')}</span>
        </li>
        <li class="servicio-meta-item">
          <span class="servicio-meta-icon" aria-hidden="true">⏰</span>
          <span class="servicio-meta-text"><strong>Horarios:</strong> ${escapeHtml(servicio.horarios || 'Consultar en entidad')}</span>
        </li>
        <li class="servicio-meta-item">
          <span class="servicio-meta-icon" aria-hidden="true">📞</span>
          <span class="servicio-meta-text"><strong>Contacto:</strong> ${escapeHtml(servicio.contacto || 'No disponible')}</span>
        </li>
      </ul>
    </div>

    <div class="servicio-card-footer">
      <a href="servicio-detalle.html?id=${servicio.id}" class="btn btn-outline-primary servicio-btn" aria-label="Ver detalle del servicio ${escapeHtml(servicio.nombre)}">
        <span>Ver detalle</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  `;

  return article;
}

/**
 * Devuelve un emoji apropiado según la categoría para mejorar la experiencia visual
 * @param {string} catNombre 
 * @returns {string}
 */
function getCategoriaIconEmoji(catNombre) {
  const nombreLower = catNombre.toLowerCase();
  if (nombreLower.includes('salud')) return '🏥';
  if (nombreLower.includes('educación') || nombreLower.includes('educacion')) return '📚';
  if (nombreLower.includes('transporte')) return '🚌';
  if (nombreLower.includes('públicos') || nombreLower.includes('publicos')) return '⚡';
  if (nombreLower.includes('social')) return '🤝';
  return '📋';
}

/**
 * Renderiza una vista de estado vacío o mensaje de error
 * @param {HTMLElement} container 
 * @param {string} mensaje 
 */
function renderEmptyState(container, mensaje) {
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">📭</div>
      <h3 class="empty-state-title">Sin resultados</h3>
      <p class="empty-state-desc">${escapeHtml(mensaje)}</p>
    </div>
  `;
}

/**
 * Escapa HTML para prevenir vulnerabilidades XSS al renderizar cadenas arbitrarias
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
