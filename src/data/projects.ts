export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image?: ProjectImage;
  label?: string;
  site?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "LucidRealtor",
    description:
      "SaaS inmobiliario en un monorepo con sitio público, panel de administración y API en NestJS. Construí su design system propio en CSS puro.",
    stack: ["TypeScript", "Next.js", "React", "NestJS", "CSS puro"],
    label: "Privado · Proyecto de empresa",
  },
  {
    title: "Novition",
    description: "Espacio de trabajo inspirado en Notion, pensado para la productividad y la creatividad.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/projects/novition.webp",
      alt: "Captura de Novition, un espacio de trabajo inspirado en Notion",
    },
    site: "https://noviton-clone.vercel.app/",
    repo: "https://github.com/LuisMy1715Y/Noviton-clone",
  },
  {
    title: "Portafolio Web",
    description: "Este sitio, hecho desde cero con Astro y un sistema de diseño en CSS puro basado en tokens.",
    stack: ["Astro", "TypeScript", "CSS puro"],
    image: {
      src: "/projects/portafolioweb.webp",
      alt: "Captura del portafolio web personal de Luis Miguel Hernández",
    },
    repo: "https://github.com/LuisMy1715Y/portafolio.web",
  },
];
