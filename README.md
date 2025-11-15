# Portfolio bilingüe de Javier Lianes

Este repositorio contiene una landing estática generada con HTML/CSS y JavaScript modular. El objetivo es presentar los proyectos destacados de Javier con una experiencia bilingüe (español/inglés) y con secciones desacopladas siguiendo principios SOLID.

## Estructura

```
assets/
├── css/           # Estilos globales
├── img/           # Recursos gráficos
└── js/
    ├── components # Encapsula cada sección (header, hero, projects, contact, footer)
    ├── data       # Catálogos reutilizables (p. ej. proyectos)
    └── i18n       # Diccionarios de traducción
index.html         # Shell mínimo que inyecta la aplicación
```

## Desarrollo local

1. Clona el repositorio y entra al directorio `Portfolio`.
2. Lanza un servidor estático (por ejemplo con Python):

   ```bash
   python -m http.server 8080
   ```

3. Visita `http://localhost:8080` y utiliza el selector `ES/EN` situado en el encabezado para cambiar el idioma de toda la página.

No se requiere ningún build step: basta con un navegador moderno que soporte módulos ES.

## Personalización

- **Traducciones:** añade o modifica textos en `assets/js/i18n/translations.js`.
- **Proyectos:** edita `assets/js/data/projects.js` para actualizar tarjetas, enlaces y estados.
- **Estilos:** `assets/css/styles.css` controla el aspecto visual de la UI.

## Licencia

El contenido se distribuye bajo la licencia que determine el titular del repositorio.
