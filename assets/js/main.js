import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderProjects } from "./components/projects.js";
import { renderContact } from "./components/contact.js";
import { renderFooter } from "./components/footer.js";
import { PROJECTS } from "./data/projects.js";
import { TRANSLATIONS } from "./i18n/translations.js";

const state = { lang: "es" };

/**
 * Punto de entrada: renderiza la app completa basándose en el idioma activo.
 */
const render = () => {
  const app = document.getElementById("app");
  const copy = TRANSLATIONS[state.lang];
  if (!app || !copy) {
    return;
  }

  app.innerHTML = [
    renderHeader(copy, state.lang),
    renderHero(copy.hero),
    renderProjects(copy.projects, PROJECTS, state.lang),
    renderContact(copy.contact),
    renderFooter(copy.footer),
  ].join("");

  document.documentElement.lang = state.lang;
  bindFilterHandlers();
  bindLanguageHandlers();
  updateYear();
};

/**
 * Añade la lógica de filtrado a los botones de categorías.
 */
const bindFilterHandlers = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (!filter || filter === "all" || category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
};

/**
 * Conecta los botones del selector de idioma para re-renderizar la interfaz.
 */
const bindLanguageHandlers = () => {
  const languageButtons = document.querySelectorAll(".language-option");
  languageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextLang = btn.dataset.lang;
      if (!nextLang || nextLang === state.lang) {
        return;
      }
      state.lang = nextLang;
      render();
    });
  });
};

/**
 * Actualiza dinámicamente el año mostrado en el pie de página.
 */
const updateYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

document.addEventListener("DOMContentLoaded", render);
