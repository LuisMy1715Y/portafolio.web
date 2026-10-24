export interface Role {
  title: string;
  date: string;
  description: string;
}

export interface Experience {
  company: string;
  roles: Role[];
}

export const experience: Experience[] = [
  {
    company: "LucidBot",
    roles: [
      {
        title: "Supervisor del Área de Soporte Técnico",
        date: "Feb 2026 — Jul 2026",
        description: "Lideré el equipo de soporte técnico, evalué candidatos con pruebas técnicas y capacité a los nuevos integrantes.",
      },
      {
        title: "Implementador de Procesos Automatizados con IA",
        date: "Oct 2025 — Ene 2026",
        description: "Construí asistentes de IA desde cero y los integré con servicios externos mediante APIs REST y JSON.",
      },
      {
        title: "Especialista en Soporte",
        date: "May 2025 — Sep 2025",
        description: "Diagnostiqué y corregí fallos en asistentes de IA, validando cada cambio con pruebas funcionales.",
      },
    ],
  },
  {
    company: "HomeCenter Sodimac Colombia",
    roles: [
      {
        title: "Vendedor Profesional — Muebles",
        date: "Feb 2024 — Dic 2024",
        description: "Asesoré clientes de principio a fin: entender la necesidad, proponer una solución y comunicarla con claridad.",
      },
    ],
  },
];
