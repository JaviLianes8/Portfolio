/**
 * Renderiza la sección de proyectos incluyendo filtros y tarjetas.
 *
 * @param {object} copy - Textos para títulos y filtros traducidos.
 * @param {Array} projects - Catálogo estructurado de proyectos.
 * @param {string} lang - Idioma activo para elegir la traducción.
 * @returns {string} Marcado HTML completo de la sección.
 */
export const renderProjects = (copy, projects, lang) => {
  const filters = copy.filters;
  const filterButtons = Object.entries(filters)
    .map(
      ([key, label], index) => `
        <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${key === "all" ? "all" : key}">
          ${label}
        </button>
      `.trim()
    )
    .join("");

  const cards = projects
    .map((project) => renderProjectCard(project, lang))
    .join("");

  return `
    <section id="projects">
      <h2 class="section-title">${copy.title}</h2>
      <p class="section-subtitle">${copy.subtitle}</p>
      <div class="filter-bar">
        ${filterButtons}
      </div>
      <div class="projects-grid">
        ${cards}
      </div>
    </section>
  `;
};

/**
 * Crea la tarjeta individual de un proyecto con su traducción correspondiente.
 *
 * @param {object} project - Datos del proyecto.
 * @param {string} lang - Idioma activo.
 * @returns {string} HTML de la tarjeta.
 */
const renderProjectCard = (project, lang) => {
  const copy = project.translations[lang];
  const status = project?.status?.translations?.[lang];

  const linksMarkup = project.links
    .map((link) => renderLinkPill(link, lang))
    .join("");

  const footerMarkup = (project.footerLinks || [])
    .map((link) => renderLinkPill(link, lang, true))
    .join("");

  const tagsMarkup = project.tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");

  return `
    <article class="project-card" data-category="${project.category}">
      <div class="project-type">${copy.type}</div>
      <h3 class="project-title">${copy.title}</h3>
      ${status ? `<span class="project-status status-progress">${status}</span>` : ""}
      <p class="project-desc">${copy.description}</p>
      <div class="project-tags">${tagsMarkup}</div>
      <div class="project-links">${linksMarkup}</div>
      ${footerMarkup ? `<div class="project-footer">${footerMarkup}</div>` : ""}
    </article>
  `;
};

/**
 * Genera una píldora de enlace reutilizable, con soporte para enlaces fantasma.
 *
 * @param {object} link - Configuración del enlace.
 * @param {string} lang - Idioma activo.
 * @param {boolean} isFooter - Indica si pertenece al pie de la tarjeta.
 * @returns {string} Marcado HTML del enlace.
 */
const renderLinkPill = (link, lang, isFooter = false) => {
  const label = link.translations?.[lang] ?? "";
  const classes = ["link-pill"];
  if (!link.href) {
    classes.push("link-pill--ghost");
  }
  if (isFooter) {
    classes.push("link-pill--footer");
  }

  if (!link.href) {
    return `<span class="${classes.join(" ")}">${label}</span>`;
  }

  return `
    <a class="${classes.join(" ")}" href="${link.href}" target="_blank" rel="noreferrer">
      ${label}
    </a>
  `;
};
