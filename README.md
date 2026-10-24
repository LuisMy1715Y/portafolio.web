# Portafolio · Luis Miguel Hernández

Portafolio personal de Luis Miguel Hernández, desarrollador de software junior en Medellín, Colombia. Frontend con React, Next.js, TypeScript y Astro, y APIs con NestJS.

- Sitio: [portafolio-web-five-xi.vercel.app](https://portafolio-web-five-xi.vercel.app/)
- CV: [cv-one-gilt.vercel.app](https://cv-one-gilt.vercel.app/)

## Stack

- [Astro 5](https://astro.build/) con salida estática (`output: "static"`).
- CSS puro basado en design tokens (`src/styles/tokens.css`), sin Tailwind ni librerías de componentes.
- Tipografía [Onest Variable](https://fontsource.org/fonts/onest) vía `@fontsource-variable/onest`.
- Tema claro y oscuro con `[data-theme]`, que por defecto sigue `prefers-color-scheme`.
- Acento verde menta (`--accent-500: #3ddc97`) tomado del logo; para texto se usa `--accent-text` (verde oscuro en tema claro para cumplir WCAG AA) y los botones llevan texto oscuro (`--on-accent`).

## Identidad

El logo es un prompt de terminal `>_` en SVG en línea (`src/components/Logo.astro`, variantes `lineal`, `ventana` y `mono`). Aparece en la navegación junto al nombre en monoespaciada, en el núcleo del átomo del hero (`StackAtom.astro`) y como favicon (`public/favicon.svg`, variante ventana).
- Despliegue en [Vercel](https://vercel.com/) con `@astrojs/vercel`, Vercel Analytics y Speed Insights.

## Estructura

```text
src/
├── assets/        Imágenes optimizadas con astro:assets
├── components/    Componentes .astro (Header, Hero, Section, ProjectCard, ExperienceList, Button…)
│   └── Icons/     Iconos SVG
├── data/          Contenido tipado: profile, projects, experience, skills, certifications
├── layouts/       Layout.astro con SEO, tema y estilos globales
├── pages/         index.astro y [section].astro (/experiencia, /proyectos, /habilidades, /sobre-mi, /contacto)
└── styles/        tokens.css (sistema de diseño) y global.css (reset y base)
```

## Responsive

Mobile first, con los mismos puntos de corte en todos los archivos:

| Ancho | Dispositivo | Cambios |
| --- | --- | --- |
| < 640px | Teléfonos | Header compacto de 64px en una fila (logo, tema y botón de menú que despliega los enlaces y "Contáctame"), hero en una columna sin átomo con la foto y la disponibilidad en la misma fila, titular a 36px y CTA lado a lado, proyectos en una columna, fechas de experiencia apiladas |
| ≥ 640px | Teléfono horizontal, tablet pequeña | Sin átomo (solo aparece junto al texto desde 1024px), proyectos en 2 columnas (el último ocupa la fila en horizontal), fecha en columna |
| ≥ 768px | iPad vertical | Header de escritorio de 64px con navegación visible y "Contáctame" (sin botón de menú); hero con foto de 72px y CTA en línea |
| ≥ 1024px | iPad horizontal, laptops | Hero en dos columnas con átomo, proyectos en 3 columnas, habilidades y certificaciones lado a lado |
| ≥ 1200px | Laptops 15" y monitores | Margen lateral mayor; contenido limitado a 1160px |

En pantallas bajas (`max-height: 860px` desde 1024px, como 1280×720 o 1366×768, y `max-height: 500px` en teléfonos horizontales) el hero reduce su espaciado vertical y el átomo escala con la altura de la ventana para que todo quede visible.

La página de inicio es deliberadamente corta: Hero, Experiencia a todo el ancho, estilo CV clásico (cada empresa como encabezado con su periodo discreto y, debajo, cada rol en una fila con sus fechas en una columna fija a la izquierda y el título con su descripción a la derecha; en móvil la fecha va justo encima del título), Proyectos (LucidRealtor, Novition y este portafolio con el mismo tipo de tarjeta; los proyectos privados se muestran sin enlaces ni captura), Habilidades y certificaciones (dos tarjetas de igual altura lado a lado desde 768px: Habilidades, con una etiqueta por grupo a la izquierda y sus chips a la derecha, y Certificaciones, una lista de la más reciente a la más antigua con emisor y enlace por año), Sobre mí y Contacto. Hay llamadas a la acción de contacto ("Contáctame") en el encabezado (dentro del menú desplegable en teléfonos), el hero y el cierre, y acceso al CV en el hero y en Contacto.

Para cambiar el contenido edita los archivos de `src/data/`; los componentes solo lo pintan.

## Desarrollo local

```bash
npm install
npm run dev
npm run build
```

`npm run build` ejecuta `astro check` y `astro build`; debe terminar sin errores antes de publicar.

## Contacto

- [hernandezsuarezluismiguel@gmail.com](mailto:hernandezsuarezluismiguel@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/luismy1517y/)
- [GitHub](https://github.com/LuisMy1715Y)
