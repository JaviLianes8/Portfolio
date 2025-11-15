/**
 * Renderiza el pie de página con el año dinámico.
 *
 * @param {object} copy - Textos traducidos para la nota legal.
 * @returns {string} Marcado HTML del footer.
 */
export const renderFooter = (copy) => `
  <footer>
    © <span id="year"></span> ${copy.note}
  </footer>
`;
