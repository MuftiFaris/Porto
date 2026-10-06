export interface SkillGroup {
  category: string;
  items: string[];
  accent: "primary" | "secondary" | "accent";
}

// Edit this with your actual stack, grouped by category.
// `accent` rotates through the 3 palette colors for card highlights.
const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "PHP", "C#", "C++"], accent: "primary" },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"], accent: "secondary" },
  { category: "Backend", items: ["Node.js", "FastAPI"], accent: "accent" },
  { category: "Data & CMS", items: ["PostgreSQL", "PL/pgSQL", "Sanity CMS"], accent: "primary" },
  { category: "Platforms", items: ["WPF", "Arch Linux", "Gemini API"], accent: "secondary" },
  { category: "Tools", items: ["Git", "Docker", "Vercel"], accent: "primary" },
];

export default skills;
