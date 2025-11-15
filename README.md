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

## Despliegue automático en Vercel

Cada push a `main` puede desplegarse automáticamente en Vercel gracias al workflow de GitHub Actions incluido en `.github/workflows/vercel-deploy.yml`. Para activarlo debes:

1. Crear un proyecto en Vercel apuntando a este repositorio y anotar los valores de **ORG_ID**, **PROJECT_ID** y un **TOKEN** con permisos de deploy (desde la sección *Settings → Tokens*).
2. En GitHub, ir a *Settings → Secrets and variables → Actions* y registrar tres secretos: `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` y `VERCEL_TOKEN`.
3. Confirmar que la rama por defecto es `main`. Cada nuevo push a `main` (o una ejecución manual del workflow) publicará la última versión estática usando el CLI oficial de Vercel.

El archivo `vercel.json` incluido en la raíz fuerza a Vercel a tratar `index.html`, `assets/` y `public/` como artefactos estáticos y mapea explícitamente las rutas usadas por los iconos. No hay pasos de build, así que el workflow simplemente empaqueta los archivos tal cual.

## Licencia

El contenido se distribuye bajo la licencia que determine el titular del repositorio.
