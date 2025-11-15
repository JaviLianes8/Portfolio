/**
 * Catálogo de proyectos destacados. Cada elemento contiene su categoría,
 * enlaces y traducciones específicas para garantizar una experiencia bilingüe.
 */
export const PROJECTS = [
  {
    id: "confetii",
    category: "android",
    tags: ["Kotlin", "Firebase", "WorkManager", "Compose", "Room", "Notifications"],
    links: [
      {
        href: "https://github.com/JaviLianes8/BirthdayNotifierApp",
        translations: { es: "🐙 Código privado", en: "🐙 Private code" },
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.jlianes.birthdaynotifier",
        translations: { es: "📱 Google Play", en: "📱 Google Play" },
      },
    ],
    footerLinks: [
      {
        translations: {
          es: "⭐️ 4,5 ★ en Google Play",
          en: "⭐️ 4.5 ★ on Google Play",
        },
      },
    ],
    translations: {
      es: {
        type: "Android · Kotlin",
        title: "Confetii – Birthday Notifier",
        description:
          "Recordatorios inteligentes con Google Sign-In y sincronización en Firebase Storage. WorkManager diario lanza notificaciones con mensajes prellenados.",
      },
      en: {
        type: "Android · Kotlin",
        title: "Confetii – Birthday Notifier",
        description:
          "Smart reminders with Google Sign-In and Firebase Storage sync. A daily WorkManager job sends notifications with pre-filled greetings.",
      },
    },
  },
  {
    id: "finiq",
    category: "android",
    tags: ["Kotlin", "Clean Architecture", "MVVM"],
    links: [
      {
        href: "https://github.com/JaviLianes8/Finiq",
        translations: { es: "🐙 Código privado", en: "🐙 Private code" },
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.jlianes.finiq.app",
        translations: { es: "📱 Google Play", en: "📱 Google Play" },
      },
    ],
    footerLinks: [
      {
        translations: { es: "⭐️ 4,5 ★ en Google Play", en: "⭐️ 4.5 ★ on Google Play" },
      },
    ],
    translations: {
      es: {
        type: "Android · Kotlin",
        title: "Finiq",
        description:
          "Calculadora laboral para España: sueldo neto, vacaciones pendientes e indemnizaciones. Arquitectura Clean lista para ampliar con convenios y consulta de vida laboral.",
      },
      en: {
        type: "Android · Kotlin",
        title: "Finiq",
        description:
          "Labor calculator for Spain: net salary, pending vacations and severance estimations. Clean Architecture foundation ready to add agreements and social security lookups.",
      },
    },
  },
  {
    id: "restful-checker",
    category: "python",
    tags: ["Python", "OpenAPI", "CLI", "CI/CD", "Quality Gates"],
    links: [
      {
        href: "https://pypi.org/project/restful-checker/",
        translations: { es: "📦 PyPI", en: "📦 PyPI" },
      },
      {
        href: "https://github.com/JaviLianes8/restful-checker",
        translations: { es: "🐙 Código", en: "🐙 Code" },
      },
      {
        href: "https://restful-checker-website.vercel.app/",
        translations: { es: "🌐 Web demo", en: "🌐 Demo site" },
      },
    ],
    footerLinks: [
      {
        href: "https://pepy.tech/projects/restful-checker?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=line&versions=2.0.0",
        translations: { es: "📈 Descargas", en: "📈 Downloads" },
      },
    ],
    translations: {
      es: {
        type: "CLI · API Quality",
        title: "RESTful Checker",
        description:
          "Analiza especificaciones OpenAPI/Swagger para detectar problemas reales en APIs REST. Funciona en pipelines CI/CD o como verificación manual antes de publicar.",
      },
      en: {
        type: "CLI · API Quality",
        title: "RESTful Checker",
        description:
          "Scans OpenAPI/Swagger specs to spot real issues in REST APIs. Ready for CI/CD pipelines or as a manual gate before releases.",
      },
    },
  },
  {
    id: "json-pretty-diff",
    category: "python",
    tags: ["Python", "Diff", "HTML Reports", "Auditoría", "CLI", "Automation", "CI/CD"],
    links: [
      {
        href: "https://pypi.org/project/json-pretty-diff/",
        translations: { es: "📦 PyPI", en: "📦 PyPI" },
      },
      {
        href: "https://github.com/JaviLianes8/json-pretty-diff",
        translations: { es: "🐙 Código", en: "🐙 Code" },
      },
      {
        href: "https://pepy.tech/projects/json-pretty-diff?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=line&versions=0.1.2",
        translations: { es: "📈 Descargas", en: "📈 Downloads" },
      },
    ],
    translations: {
      es: {
        type: "CLI · Data Diff",
        title: "json-pretty-diff",
        description:
          "Genera un informe HTML elegante con las diferencias de alto nivel entre dos JSON. Ideal para contratos, migraciones o auditorías.",
      },
      en: {
        type: "CLI · Data Diff",
        title: "json-pretty-diff",
        description:
          "Produces an elegant HTML report with the high-level differences between two JSON documents. Perfect for contracts, migrations or audits.",
      },
    },
  },
  {
    id: "real-tajo",
    category: "web",
    tags: ["FastAPI", "Firebase Hosting", "Azure", "DataOps", "Automatización"],
    links: [
      {
        href: "https://real-tajo-cf.web.app/",
        translations: { es: "🌐 Sitio en vivo", en: "🌐 Live site" },
      },
      {
        href: "https://github.com/AlejandroSenior/realtajocf",
        translations: { es: "🐙 Frontend", en: "🐙 Frontend" },
      },
      {
        href: "https://github.com/JaviLianes8/RealTajoFCBack",
        translations: { es: "🐙 Backend", en: "🐙 Backend" },
      },
    ],
    translations: {
      es: {
        type: "Web · Firebase · Azure",
        title: "Real Tajo CF · Plataforma de datos",
        description:
          "Ecosistema web para publicar resultados, clasificaciones y calendario del club. Frontend en Firebase y backend FastAPI desplegado en Azure con cargas JSON estructuradas.",
      },
      en: {
        type: "Web · Firebase · Azure",
        title: "Real Tajo CF · Data platform",
        description:
          "Web ecosystem for standings, fixtures and stats. Firebase frontend plus a FastAPI backend on Azure that ingests structured JSON payloads.",
      },
    },
  },
  {
    id: "minecraft-panel",
    category: "web",
    tags: ["SSE", "Clean Architecture", "Vercel", "Realtime", "Infra Privada"],
    links: [
      {
        href: "https://lianes-minecraft-front.vercel.app/",
        translations: { es: "🌐 Sitio en vivo", en: "🌐 Live site" },
      },
      {
        href: "https://github.com/JaviLianes8/LianesMinecraftFront",
        translations: { es: "🐙 Frontend", en: "🐙 Frontend" },
      },
      {
        href: "https://github.com/JaviLianes8/LianesMinecraftBack",
        translations: { es: "🔒 Backend privado", en: "🔒 Private backend" },
      },
    ],
    translations: {
      es: {
        type: "Web · Panel en tiempo real",
        title: "Lianes Minecraft Control Panel",
        description:
          "Dashboard estático que gobierna mi servidor de Minecraft con SSE, polling y contraseñas saladas generadas en build.",
      },
      en: {
        type: "Web · Realtime dashboard",
        title: "Lianes Minecraft Control Panel",
        description:
          "Static dashboard for my Minecraft server mixing SSE, polling and salted passwords generated at build time.",
      },
    },
  },
  {
    id: "taxi-auto",
    category: "web",
    tags: [
      "Google Maps",
      "GraphHopper",
      "Vercel",
      "Next.js",
      "CI/CD",
      "Pricing Engine",
      "Optimización",
    ],
    links: [
      {
        href: "https://taxi-auto-web.vercel.app/",
        translations: { es: "🌐 Sitio en vivo", en: "🌐 Live site" },
      },
    ],
    footerLinks: [
      {
        translations: {
          es: "Backend privado desplegado en mini PC",
          en: "Private backend deployed on a mini PC",
        },
      },
    ],
    translations: {
      es: {
        type: "Web · Geolocalización",
        title: "Taxi Auto",
        description:
          "Calculadora de tarifas de taxi en Madrid combinando Google Maps y rutas offline con GraphHopper. Flujo responsive centrado en el coste estimado.",
      },
      en: {
        type: "Web · Geolocation",
        title: "Taxi Auto",
        description:
          "Taxi fare calculator for Madrid combining Google Maps with offline routing via GraphHopper. Responsive flow focused on cost and route visualization.",
      },
    },
  },
  {
    id: "wedding-seating",
    category: "web",
    tags: ["Next.js", "Vercel", "Serverless"],
    links: [
      {
        href: "https://autorganizador-mesas-boda.vercel.app/",
        translations: { es: "🌐 Vista previa", en: "🌐 Preview" },
      },
    ],
    status: {
      translations: { es: "🚧 En progreso", en: "🚧 In progress" },
    },
    translations: {
      es: {
        type: "Web · Monolito Serverless",
        title: "Organizador de mesas para boda",
        description:
          "Herramienta monolítica para planificar mesas y aforos en eventos. Despliego en Vercel para iterar la UX mientras cierro la asignación automática y la exportación de planos.",
      },
      en: {
        type: "Web · Serverless Monolith",
        title: "Wedding seating planner",
        description:
          "Monolithic tool to plan tables and guest capacity for events. Hosted on Vercel to iterate quickly on UX while I finish the automatic seating logic and layout exports.",
      },
    },
  },
];
