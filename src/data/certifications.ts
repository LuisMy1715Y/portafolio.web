export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    title: "Certificación LucidAcademy",
    issuer: "LucidAcademy",
    year: "2026",
    link: "https://lucidacademy.co/#team",
  },
  {
    title: "Next.js",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-554ded1c-36ae-406d-bf38-a6fd35f5eac0/",
  },
  {
    title: "React",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-066651ad-cc4a-41ae-858c-5aae100d4700/",
  },
  {
    title: "Desarrollo Frontend",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-5da82bc4-2d3c-4b79-88ed-f84d2604c796/",
  },
];
