/**
 * Renderiza el encabezado con navegación principal y selector de idioma.
 *
 * @param {object} copy - Textos traducidos para la cabecera.
 * @param {string} currentLang - Idioma activo en la aplicación.
 * @returns {string} Marcado HTML listo para inyectar en el DOM.
 */
export const renderHeader = (copy, currentLang) => {
  const { nav, languageSwitcher } = copy;
  const languageOptions = Object.entries(languageSwitcher.options)
    .map(
      ([lang, label]) => `
        <button
          class="language-option ${lang === currentLang ? "active" : ""}"
          data-lang="${lang}"
          type="button"
          aria-pressed="${lang === currentLang}"
        >
          ${label}
        </button>
      `.trim()
    )
    .join("");

  return `
    <header>
      <div class="logo">Javier Lianes · SW Dev</div>
      <nav>
        <a href="#about">${nav.about}</a>
        <a href="#projects">${nav.projects}</a>
        <a href="#contact">${nav.contact}</a>
      </nav>
      <div class="language-switch" role="group" aria-label="${languageSwitcher.label}">
        ${languageOptions}
      </div>
    </header>
  `;
};
