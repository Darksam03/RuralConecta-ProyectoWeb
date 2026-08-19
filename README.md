# RuralConecta-ProyectoWeb

## Badges

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![JSP](https://img.shields.io/badge/JSP-007396?style=for-the-badge&logo=oracle&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django_REST_Framework-ff1709?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Descripción

**RuralConecta-ProyectoWeb** es un Producto Mínimo Viable (MVP) de una aplicación web Full Stack diseñada para centralizar, organizar y facilitar el acceso a la información sobre servicios esenciales y trámites disponibles para las comunidades rurales de los municipios de Antioquia, Colombia.

---

## Problemática

En las zonas rurales del departamento de Antioquia, la información sobre servicios esenciales (salud, educación, transporte, servicios públicos y apoyos sociales) y trámites comunitarios se encuentra dispersa, desactualizada o de difícil acceso. Esta falta de centralización genera desplazamientos innecesarios, pérdida de tiempo y barreras de acceso a oportunidades y derechos para los habitantes rurales.

---

## Objetivo

Centralizar y facilitar el acceso a la información de servicios y trámites municipales esenciales para las comunidades rurales de Antioquia mediante una aplicación web ágil, responsiva y fundamentada en una arquitectura API REST desacoplada.

---

## Tecnologías

### Frontend
- **JSP (JavaServer Pages)** — Tecnología principal para la construcción de vistas dinámicas.
- **HTML5** — Estructura semántica de las páginas.
- **CSS3** — Estilos visuales, Responsive Design (Flexbox, Grid, variables CSS, media queries).
- **JavaScript Vanilla** — Interacción del usuario, manipulación del DOM y consumo de la API REST.

### Backend
- **Python** — Lenguaje de programación base.
- **Django** — Framework web principal (estructura, enrutamiento, seguridad, panel administrativo).
- **Django REST Framework (DRF)** — Construcción de la API REST (endpoints, serializadores, validación).
- **Django ORM** — Acceso seguro y parametrizado a la base de datos.

### Base de Datos
- **PostgreSQL** — Motor de base de datos relacional principal.

### Control de Versiones
- **Git + GitHub** — Control de versiones y colaboración.

---

## Arquitectura

El sistema adopta una arquitectura **Full Stack desacoplada basada en API REST**:

```text
                    RURALCONECTA
                         │
                         ▼
              ┌─────────────────────┐
              │      FRONTEND       │
              │                     │
              │ JSP + HTML5         │
              │ CSS3 + JavaScript   │
              └──────────┬──────────┘
                         │
                      HTTP/JSON
                         │
                         ▼
              ┌─────────────────────┐
              │      BACKEND        │
              │                     │
              │ Python + Django     │
              │ Django REST Frm.    │
              │ API REST            │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │     PostgreSQL      │
              └─────────────────────┘
```

Git y GitHub se mantienen como herramientas de control de versiones y colaboración.

---

## Solución propuesta

Desarrollar una plataforma web accesible, ligera y de navegación intuitiva que permita a los ciudadanos consultar de forma rápida los servicios disponibles en su municipio, filtrados por categorías temáticas, proporcionando detalles prácticos como ubicación, horarios de atención, requisitos previos y canales de contacto directo.

---

## Alcance del MVP

### Funcionalidades incluidas en la primera versión:
- Consultar el catálogo de municipios.
- Consultar las categorías de servicios disponibles (*Salud*, *Educación*, *Transporte*, *Servicios públicos*, *Apoyos sociales*).
- Consultar el listado de servicios.
- Filtrar servicios por municipio.
- Filtrar servicios por categoría.
- Mostrar información detallada de cada servicio.
- Mostrar dirección física o ubicación.
- Mostrar horarios de atención.
- Mostrar requisitos necesarios para el trámite o acceso.
- Mostrar información de contacto (teléfonos, correo, canales comunitarios).
- Interfaz completamente responsive adaptada a dispositivos móviles y de escritorio.
- Consumo de datos dinámico mediante API REST en formato JSON.

### Fuera del alcance del MVP (futuras ampliaciones):
- Pasarelas de pago.
- Sistemas médicos clínicos reales.
- Agendamiento real de citas médicas.
- Integraciones complejas con sistemas gubernamentales.
- Chat en tiempo real.
- Inteligencia artificial.
- Aplicación móvil nativa.
- Funcionalidades administrativas complejas.

---

## Estructura del proyecto

```text
RuralConecta-ProyectoWeb/
│
├── README.md
├── .gitignore
│
├── docs/
│   ├── arquitectura/
│   │   ├── especificacion-tecnica.md
│   │   ├── estructura-backend.md
│   │   └── estructura-frontend.md
│   ├── base-datos/
│   │   └── modelo-datos.md
│   └── api/
│       └── especificacion-api.md
│
├── backend/
│   (Pendiente de implementación — Django + DRF)
│
└── frontend/
    (Pendiente de implementación — JSP + HTML5 + CSS3 + JavaScript)
```

---

## Flujo del sistema

```text
Usuario
   ↓
Selecciona municipio (vista JSP)
   ↓
Selecciona categoría (vista JSP)
   ↓
Consulta servicios (vista JSP)
   ↓
Frontend consume API REST (JavaScript Fetch)
   ↓
Backend Django procesa la solicitud
   ↓
PostgreSQL proporciona los datos
   ↓
API devuelve información JSON
   ↓
Frontend muestra los resultados (JSP + JavaScript)
```

---

## 📈 Progreso general

```text
Progreso: ███░░░░░░░ 31% (20/64 tareas completadas)
```

> **Nota:** Este indicador visual representa el avance global del proyecto calculado a partir de las tareas completadas versus el total planificado en el tablero. Debe actualizarse manualmente a medida que se ejecuten y verifiquen nuevas actividades con evidencia respaldada en el repositorio.

---

## 📌 Convención para actualizar el progreso

Para mantener la consistencia, trazabilidad y rigor técnico en el seguimiento del proyecto:

- `[ ]` = Tarea pendiente por iniciar o en ejecución.
- `✅` = Tarea completada y verificada.
- Las tareas deben marcarse como completadas únicamente cuando exista evidencia tangible del trabajo realizado en el repositorio.
- Cada avance significativo debe estar respaldado por un commit descriptivo en Git siguiendo las pautas de commits semánticos (`feat:`, `fix:`, `docs:`, `chore:`, etc.).
- No marcar tareas futuras como completadas anticipadamente.

---

## 📊 Tareas y Logros

Este apartado permite realizar un seguimiento estructurado e interactivo del ciclo de vida y desarrollo de **RuralConecta-ProyectoWeb**, dividido por fases y áreas de trabajo:

### 🟢 Fase 0 — Análisis y planificación

- ✅ Crear repositorio GitHub
- ✅ Configurar estructura inicial del proyecto
- ✅ Crear README.md
- ✅ Crear .gitignore
- ✅ Definir problemática
- ✅ Definir objetivo general
- ✅ Definir objetivos específicos
- ✅ Definir alcance del MVP
- ✅ Definir arquitectura tecnológica
- ✅ Seleccionar stack tecnológico
- ✅ Crear especificación técnica
- ✅ Diseñar modelo entidad-relación
- ✅ Definir modelo de datos PostgreSQL
- ✅ Definir estructura inicial de la API REST

### 🔵 Fase 1 — Diseño y arquitectura

- ✅ Diseñar diagrama de arquitectura
- ✅ Diseñar diagrama entidad-relación definitivo
- ✅ Definir estructura del backend
- ✅ Definir estructura del frontend
- ✅ Documentar endpoints de la API
- ✅ Adaptar arquitectura a JSP + HTML5 + CSS3
- ✅ Actualizar documentación tecnológica completa
- ✅ Validar arquitectura completa antes de programar

### 🟡 Fase 2 — Desarrollo Backend

- [ ] Crear proyecto Django
- [ ] Configurar Django REST Framework
- [ ] Configurar PostgreSQL
- [ ] Crear modelos
- [ ] Crear migraciones
- [ ] Crear serializers
- [ ] Crear endpoints
- [ ] Implementar filtros por municipio
- [ ] Implementar filtros por categoría
- [ ] Realizar pruebas de API

### 🟣 Fase 3 — Desarrollo Frontend

- [ ] Crear estructura JSP (WEB-INF/views/)
- [ ] Configurar CSS3 (styles.css con variables, Flexbox, Grid)
- [ ] Implementar fragmentos JSPF (header, navbar, footer)
- [ ] Implementar interfaz responsive (media queries CSS3)
- [ ] Implementar vista de selección de municipio
- [ ] Implementar vista de selección de categoría
- [ ] Implementar vista de listado de servicios
- [ ] Implementar ficha detallada del servicio
- [ ] Integrar frontend con API REST (JavaScript Fetch)
- [ ] Manejar estados de carga y errores

### 🟠 Fase 4 — Integración y pruebas

- [ ] Probar integración frontend-backend
- [ ] Validar respuestas JSON
- [ ] Validar filtros
- [ ] Realizar pruebas responsive
- [ ] Realizar pruebas de usabilidad
- [ ] Medir tiempo de respuesta de la API
- [ ] Corregir errores encontrados
- [ ] Verificar cumplimiento de requisitos funcionales

### ☁️ Fase 5 — Despliegue

- [ ] Preparar variables de entorno
- [ ] Configurar producción Django
- [ ] Configurar PostgreSQL en la nube
- [ ] Desplegar backend Django
- [ ] Configurar servidor para Frontend JSP (Tomcat o equivalente)
- [ ] Configurar CORS
- [ ] Verificar funcionamiento en producción
- [ ] Documentar proceso de despliegue

### 📚 Documentación y presentación

- [ ] Completar documentación técnica
- ✅ Actualizar README
- [ ] Agregar diagrama de arquitectura
- [ ] Agregar diagrama entidad-relación
- ✅ Documentar API
- [ ] Preparar presentación
- [ ] Exportar presentación a PDF
- [ ] Agregar presentación al repositorio
- [ ] Realizar revisión final del repositorio

---

## 🏆 Logros alcanzados

Registro de hitos consolidados a lo largo del ciclo del proyecto:

- ✅ Repositorio inicial creado
- ✅ Arquitectura tecnológica definida
- ✅ Stack tecnológico seleccionado
- ⬜ MVP implementado
- ⬜ API REST funcional
- ⬜ Frontend integrado
- ⬜ Pruebas completadas
- ⬜ Aplicación desplegada en la nube

---

## 📊 Métricas

### Rendimiento
Medir el tiempo de respuesta de las consultas principales de la API.
- **Meta inicial**: Respuesta inferior a 2 segundos en condiciones normales de prueba.

### Usabilidad
Medir el porcentaje de usuarios que pueden encontrar correctamente un servicio mediante el flujo:
`Municipio → Categoría → Servicio`.

### Funcionalidad
Medir el porcentaje de funcionalidades planificadas para el MVP que se encuentran implementadas y funcionando.

### Tiempo de desarrollo
Registrar el avance de acuerdo con el cronograma definido para el taller.

> *Nota: Las métricas se actualizarán a medida que se ejecuten pruebas y mediciones reales sobre el sistema.*

---

## Requisitos

### Backend
- Python 3.10+
- Django 4.x+
- Django REST Framework
- PostgreSQL 14+
- Entorno virtual Python (`venv`)

### Frontend
- Servidor de aplicaciones compatible con JSP (Apache Tomcat u otro servidor Java EE)
- Navegador web moderno (Chrome, Firefox, Edge)

### Herramientas
- Git
- GitHub

> *La configuración de entornos se documentará al preparar el entorno de desarrollo en la Fase 1.*

---

## Instalación / Configuración

Pendiente de implementación. Se documentará en la Fase 1 (preparación del entorno de desarrollo).

---

## 🔐 Seguridad

Durante el desarrollo del proyecto se contemplarán e implementarán las siguientes medidas de seguridad:

- Protección contra inyección SQL mediante el uso exclusivo del ORM de Django (consultas parametrizadas).
- Validación y sanitización rigurosa de datos en los serializadores de Django REST Framework.
- Prevención de vulnerabilidades Cross-Site Scripting (XSS): en JSP, evitar insertar contenido no confiable directamente; en JavaScript, usar `textContent` en lugar de `innerHTML` sobre datos no confiables.
- Configuración estricta de Cross-Origin Resource Sharing (CORS) entre frontend y backend.
- Uso de variables de entorno para la gestión segura de parámetros de configuración y claves sensibles.
- No almacenar credenciales en el repositorio de control de versiones.
- Configuración segura para el entorno de producción (`DEBUG=False`, encabezados de seguridad HTTP).
- Separación estricta entre presentación (JSP/CSS3/JavaScript) y lógica de negocio (Django/DRF).
- No exponer información sensible en mensajes de error visibles al usuario.
- Autenticación mediante JWT únicamente si las funcionalidades finales requieren autenticación.

---

## Pruebas

Pendiente de implementación.

---

## Despliegue en la nube

Pendiente de implementación.

---

## Documentación

La documentación técnica del proyecto se organiza dentro del directorio `docs/`:
- `docs/arquitectura/`: Diagramas de componentes, arquitectura y decisiones técnicas.
- `docs/base-datos/`: Diagrama entidad-relación y diccionario de datos.
- `docs/api/`: Especificación de contratos, endpoints y ejemplos de petición/respuesta.

---

## Buenas Prácticas

- Separación de responsabilidades: JSP (presentación) / CSS3 (estilos) / JavaScript (comportamiento) / Django/DRF (lógica y API) / PostgreSQL (persistencia).
- Modularidad y reutilización de fragmentos JSP (`.jspf`).
- Código limpio y nombres descriptivos.
- No duplicar lógica entre módulos.
- Commits semánticos y descriptivos.
- No almacenar secretos en Git.
- Documentación actualizada antes de avanzar de fase.

---

## 👥 Equipo

| Integrante | Rol | Institución |
|---|---|---|
| Samuel Arboleda Echeverri | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
| Josue Agudelo Gallego | Desarrollador Full Stack | Fundación Universitaria Católica del Norte |
