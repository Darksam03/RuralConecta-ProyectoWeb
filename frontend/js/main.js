/**
 * ==========================================================================
 * RURALCONECTA — LÓGICA DE INTERACCIÓN PRINCIPAL (main.js)
 * Inicialización general, menú de navegación accesible y utilidades UI.
 * (Sin peticiones a API REST ni consumo de backend en esta fase)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initHeaderScrollEffect();
});

/**
 * Control del menú de navegación móvil accesible
 */
function initMobileNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !siteNav) return;

  // Alternar apertura y cierre del menú
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Cerrar menú al hacer clic en cualquier enlace de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (siteNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  });

  // Cerrar menú al presionar la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      toggleMenu(false);
      menuToggle.focus();
    }
  });

  // Cerrar menú al hacer clic fuera del área del menú o botón
  document.addEventListener('click', (event) => {
    if (
      siteNav.classList.contains('is-open') &&
      !siteNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      toggleMenu(false);
    }
  });

  // Restaurar estado si el usuario redimensiona la ventana a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && siteNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  /**
   * Actualiza el estado visual y atributos ARIA del menú
   * @param {boolean} open
   */
  function toggleMenu(open) {
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      siteNav.classList.add('is-open');
    } else {
      siteNav.classList.remove('is-open');
    }
  }
}

/**
 * Efecto de elevación sutil en el header al hacer scroll
 */
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
