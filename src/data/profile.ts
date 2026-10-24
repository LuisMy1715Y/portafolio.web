export interface Profile {
  name: string;
  initials: string;
  role: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  availability: string;
  photo: string;
  about: string;
}

export const profile: Profile = {
  name: "Luis Miguel Hernández",
  initials: "LH",
  role: "Desarrollador de software Junior",
  headline: "Construyo interfaces web claras",
  headlineAccent: "y las APIs que las respaldan.",
  intro: "Medellín · Ingeniería de Software",
  location: "Medellín, Colombia",
  email: "hernandezsuarezluismiguel@gmail.com",
  linkedin: "https://www.linkedin.com/in/luismy1517y/",
  github: "https://github.com/LuisMy1715Y",
  cv: "https://cv-one-gilt.vercel.app/",
  availability: "Abierto a oportunidades como desarrollador",
  photo: "/hero.png",
  about:
    "Soy Luis Miguel Hernández, LuisMi para muchos. Empecé en soporte e implementación de asistentes de IA en LucidBot, donde aprendí a depurar, integrar APIs REST y probar antes de entregar. Hoy desarrollo software web con React, Next.js y TypeScript, y sigo creciendo en backend con NestJS. Estudio Ingeniería de Software en la I.U. Pascual Bravo y quiero sumarme a un equipo donde aportar desde el primer día.",
};
