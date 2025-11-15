/**
 * Construye la sección de presentación principal.
 *
 * @param {object} copy - Textos traducidos para título, subtítulo y enlaces.
 * @returns {string} Marcado HTML de la sección hero.
 */
export const renderHero = (copy) => {
  const paragraphs = copy.paragraphs ?? [];
  const [lead, ...rest] = paragraphs;
  const body = rest
    .map((text) => `<p>${text}</p>`)
    .join("");

  return `
    <section id="about" class="hero">
      <div class="hero-photo">
        <img src="assets/img/javier-lianes.jpg" alt="Retrato de Javier Lianes" />
      </div>
      <div class="hero-content">
        <h1 class="hero-title">${copy.title}</h1>
        ${lead ? `<p class="hero-subtitle">${lead}</p>` : ""}
        ${body ? `<div class="hero-description">${body}</div>` : ""}
        <div class="hero-links">
          <a class="link-pill" href="https://www.linkedin.com/in/jlianes/" target="_blank" rel="noreferrer">
            <img src="public/linkedin.ico" alt="LinkedIn" loading="lazy" />
            ${copy.links.linkedin}
          </a>
          <a class="link-pill" href="https://github.com/JaviLianes8" target="_blank" rel="noreferrer">
            <img src="public/github.ico" alt="GitHub" loading="lazy" />
            ${copy.links.github}
          </a>
        </div>
      </div>
    </section>
  `;
};
