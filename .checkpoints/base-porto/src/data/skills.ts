export interface SkillGroup {
  category: string;
  items: string[];
  accent: "primary" | "secondary" | "accent";
}

// Edit this with your actual stack, grouped by category.
// `accent` rotates through the 3 palette colors for card highlights.
const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python"], accent: "primary" },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Vite"], accent: "secondary" },
  { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL"], accent: "accent" },
  { category: "Tools", items: ["Git", "Docker", "Vercel"], accent: "primary" },
];

export default skills;
