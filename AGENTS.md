# AGENTS.md — ConciousHC_webARR

Instrucciones para agentes de IA y herramientas automatizadas que trabajen en este proyecto.

## Stack

- **Runtime**: Node.js v18+
- **Framework**: React 18.3 + TypeScript 5.8 (strict)
- **Build**: Vite 6.2
- **CSS**: Tailwind CSS v4 con PostCSS
- **Animación**: GSAP 3.15 (ScrollTrigger), Lenis 1.3 (smooth scroll)
- **3D**: Three.js 0.185
- **Routing**: react-router-dom v6
- **i18n**: i18next + react-i18next (ES/EN)
- **SEO**: react-helmet-async
- **Iconos**: lucide-react 0.469

## Comandos

```bash
npm run dev       # Servidor desarrollo (puerto 3000, host 0.0.0.0)
npm run build     # Build producción
npm run preview   # Preview del build
```

No hay comandos de lint ni typecheck configurados en `package.json`. Para verificaciones manuales:

```bash
npx tsc --noEmit   # Typecheck
```

## Arquitectura

```
src/
  App.tsx              # Router, ScrollToTopRoute, MagneticEffectHandler, layout global
  index.tsx            # Entry point (HelmetProvider + StrictMode)
  index.css            # Estilos globales, temas dark/light, clases utilitarias
  types.ts             # Interfaces: Service, Testimonial, BlogPost
  vite-env.d.ts        # Tipos de Vite
  assets/
    images/            # Imágenes JPG/PNG (rutas centralizadas en constants/images.ts)
    videos/            # 2 MP4: videostudioloop.mp4, conversacionterapistaloop.mp4
  components/
    Navbar.tsx         # Header fijo, logo, enlaces desktop/mobile, megamenu servicios
    Footer.tsx         # 4 columnas, animación stagger GSAP
    PageHeader.tsx     # Video fondo sincronizado (sessionStorage), título, breadcrumb, children
    SEO.tsx            # Wrapper react-helmet-async
    CookieBanner.tsx   # GDPR: localStorage 'medico_cookie_consent', eventos globales
    TestimonialCarousel.tsx  # Carrusel infinito autoplay con drag
    ReelsCarousel.tsx  # Carrusel infinito autoplay con drag
    ScrollToTop.tsx    # Botón flotante volver arriba
    LanguageSwitcher.tsx    # Toggle ES/EN
    TopBar.tsx         # Barra superior (si está en uso)
  context/
    ThemeContext.tsx   # Tema dark/light (localStorage 'hc_theme', data-theme attr)
  data/
    services.ts        # Lista de 6 servicios MTC (usada en Home)
    blogs.tsx          # 8 posts con embedHtml (Instagram/TikTok) + content JSX
  constants/
    images.ts          # Objeto IMAGES con rutas a todas las imágenes
  i18n/
    i18n.ts            # Configuración i18next (detector: localStorage 'medico_lang')
    locales/
      es.json          # Traducciones español (~550 líneas)
      en.json          # Traducciones inglés (~550 líneas)
  pages/
    Home.tsx           # Hero video, 2 canvas Three.js, servicios, testimonios
    About.tsx          # Foto Yeni, misión/visión, valores
    Services.tsx       # 9 terapias con acordeones, editorial layout
    Blogs.tsx          # Grid posts, modal lightbox con Instagram/TikTok embeds
    Contact.tsx        # Canvas partículas 3D, 3 glass cards, formulario
    LegalNotice.tsx    # Aviso legal
    PrivacyPolicy.tsx  # Política de privacidad
    CookiePolicy.tsx   # Política de cookies
```

## Convenciones de código

- **Componentes**: Functional components con `React.FC`, imports al inicio, exports default al final
- **Estilos**: Tailwind v4 con `@theme` en `index.css`. Usar custom properties del tema (ej: `bg-bg-base`, `text-text-main`, `border-accent-sage/40`)
- **Clases utilitarias globales** (definidas en `index.css`):
  - `.glass-card` — efecto vidrio esmerilado reactivo al tema
  - `.nav-link` — enlaces de nav con subrayado gradiente animado
  - `.hero-title` — tipografía serif para títulos hero
  - `.section-label` / `.section-heading` — estilos de sección
  - `.orb` — esferas blur decorativas
  - `.organic-divider` / `.gold-line` — divisores gradiente
  - `.text-shadow-subtle` — sombra de texto para legibilidad sobre imágenes
  - `.reveal-up` — clase trigger para animaciones GSAP ScrollTrigger
- **Animaciones GSAP**: Usar `gsap.context()` con `ScrollTrigger`, siempre hacer cleanup con `ctx.revert()`. Los elementos animados usan la clase `.reveal-up`.
- **Elementos hover magnéticos**: Añadir `data-hoverable="true"` (manejado por `MagneticEffectHandler` en App.tsx, solo desktop >768px)
- **i18n**: Usar `useTranslation()` hook, claves en snake_case con prefijo de página (ej: `about.heading1`, `contact.formLabel`). Fallback: español.
- **Tema**: Usar `useTheme()` de ThemeContext. Colores vía CSS vars, NO hardcodear colores en Tailwind (usar `bg-bg-base`, `text-accent-gold`, etc.)
- **Tipografía**: `font-serif` = Cormorant Garamond, `font-sans` = Inter (definidas en `@theme`)
- **Tipos**: Interfaces en `types.ts`. No usar `any` sin justificación.
- **Imports**: Usar alias `@/` para `src/` (configurado en vite.config.ts y tsconfig.json)
- **Nombres de archivo**: PascalCase para componentes, camelCase para data/constants/utils, kebab-case para imágenes
- **Comentarios**: Mínimos, solo cuando el código no es autoexplicativo. Usar comentarios en español.

## Sistema de temas

Dos temas: `dark` (default) y `light`. Implementado con CSS custom properties en `:root` y `[data-theme='light']`. El ThemeContext:
1. Lee estado inicial de `localStorage` (`hc_theme`)
2. Aplica `data-theme` al `<html>`
3. Guarda preferencia en `localStorage`

Colores principales:
- `--bg-base`, `--text-main`, `--text-muted`
- `--accent-gold` (#df9e53 / #C27A27), `--accent-sage` (#b3bda3 / #6B7B54)
- `--glass-bg`, `--glass-border`, `--glass-hover`

Paletas extendidas: `sage-50..900`, `warm-50..900`, `earth-50..500`.

## Sistema de cookies / consentimiento

- Clave: `medico_cookie_consent` en localStorage (valores: `'accepted'` / `'rejected'`)
- Eventos globales: `consent-updated` (al aceptar/rechazar), `reopen-cookie-banner` (para reabrir desde otras páginas)
- Los scripts de Instagram/TikTok en Blogs solo se cargan si `consent === 'accepted'`

## Formulario de contacto

- Endpoint: `https://formsubmit.co/ajax/acupunturaholisticayeni@gmail.com`
- Campos: `Nombre`, `Email`, `Asunto`, `Mensaje` + `_subject`, `_template`, `_captcha`, `_honey` (anti-spam)
- Validación: checkbox de términos obligatorio, max 500 chars en mensaje

## Consideraciones

- `@types/react` es v19 pero `react` es 18.3.1 — funciona por `skipLibCheck: true`.
- Three.js se usa en Home (2 canvas) y Contact (1 canvas). Cada uno debe hacer cleanup completo (dispose, cancelAnimationFrame, disconnect ResizeObserver).
- Los videos del PageHeader usan `sessionStorage` (`hc_header_video_time`) para sincronizar el tiempo de reproducción entre cambios de ruta.
- No hay tests. No hay CI/CD configurado.
- El proyecto asume deployment estático (Vite build → carpeta `dist/`).