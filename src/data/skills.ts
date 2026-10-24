export interface SkillGroup {
  title: string;
  items: string[];
}

export interface AtomOrbit {
  electrons: [string, string];
}

export const atomOrbits: AtomOrbit[] = [
  { electrons: ["React", "Next.js"] },
  { electrons: ["TypeScript", "NestJS"] },
  { electrons: ["Node.js", "Astro"] },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Astro", "HTML", "CSS"],
  },
  {
    title: "Backend y APIs",
    items: ["NestJS", "Node.js", "APIs REST", "JSON", "C#"],
  },
  {
    title: "Herramientas",
    items: ["Git", "GitHub", "n8n", "IA aplicada al desarrollo"],
  },
];
