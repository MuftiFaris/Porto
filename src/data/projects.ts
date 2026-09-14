export interface Project {
  title: string;
  description: string;
  tech: string[];
  thumbnail?: string; // optional image path, e.g. "/projects/one.png"
  repo?: string; // "owner/repo" — builds the GitHub link
  demo?: string; // optional live link
}

// Edit this list manually with your own projects.
const projects: Project[] = [
  {
    title: "Hidden Gem",
    description:
      "AI-powered Windows desktop companion with screen understanding, voice input, and overlay window. Built with WPF and Google Gemini API.",
    tech: ["C#"],
    repo: "MuftiFaris/Hidden-Gem",
    demo: "",
    thumbnail: "/hidden-gem.png"
  },
  {
    title: "SARS",
    description:
      "This system enables students to formally request schedule or room changes through a multi-layered validation workflow—Student → Teaching Assistant → Administrator—complemented by a role-based AI assistant to support decision-making.",
    tech: ["PHP", "JavaScript", "Tailwind CSS", "Next.js"],
    repo: "fritzuu/Praktikum-RPL-Kelas-B-Kelompok-6",
    demo: "",
    thumbnail: "/sars.jpeg"
  },
  {
    title: "Note Manager",
    description:
      "MindFlow AI is a premium, AI-powered student productivity companion and academic performance analytics dashboard. It combines modern task management, rich-text note taking, and focus enhancement techniques with Machine Learning and Generative AI to optimize students' habits and predict academic outcomes.",
    tech: ["TypeScript", "Python", "JavaScript", "Next.js", "Tailwind CSS"],
    repo: "fritzuu/Note-Manager-AI",
    demo: "",
    thumbnail: "/note-manager.png"
  },
  {
    title: "ArborOS [Still On Private] ",
    description:
      "A privacy-focused, user-controlled Linux distribution built on Fedora. Features immutable system architecture, transparent telemetry, and modern desktop experience optimized for performance and security.",
    tech: ["Go"],
    repo: "MuftiFaris/ArborOS",
    demo: "",
    thumbnail: ""
  },
];

export default projects;
