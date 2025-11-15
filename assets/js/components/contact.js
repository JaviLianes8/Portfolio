/**
 * Construye la sección de contacto con un layout centrado.
 *
 * @param {object} copy - Textos traducidos específicos de la sección.
 * @returns {string} Marcado HTML para contacto.
 */
export const renderContact = (copy) => `
  <section id="contact" class="contact-section">
    <h2 class="section-title contact-title">${copy.title}</h2>
    <div class="contact-box">
      <div class="contact-links">
        <a class="contact-pill" href="mailto:jlianesglr@gmail.com">
          ✉️ jlianesglr@gmail.com
        </a>
        <a class="contact-pill" href="https://www.linkedin.com/in/jlianes/" target="_blank" rel="noreferrer">
          <img src="public/linkedin.ico" alt="LinkedIn" loading="lazy" />
          LinkedIn
        </a>
        <a class="contact-pill" href="https://github.com/JaviLianes8" target="_blank" rel="noreferrer">
          <img src="public/github.ico" alt="GitHub" loading="lazy" />
          GitHub
        </a>
      </div>
    </div>
  </section>
`;
