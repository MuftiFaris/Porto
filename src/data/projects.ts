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
    title: "Project One",
    description:
      "Short one or two line description of what this project does and the problem it solves.",
    tech: ["React", "Node.js"],
    repo: "yourusername/project-one",
    demo: "",
  },
  {
    title: "Project Two",
    description:
      "Short one or two line description of what this project does and the problem it solves.",
    tech: ["Python", "FastAPI"],
    repo: "yourusername/project-two",
    demo: "",
  },
  {
    title: "Project Three",
    description:
      "Short one or two line description of what this project does and the problem it solves.",
    tech: ["TypeScript", "Next.js"],
    repo: "yourusername/project-three",
    demo: "",
  },
  {
    title: "Project Four",
    description:
      "Short one or two line description of what this project does and the problem it solves.",
    tech: ["Go"],
    repo: "yourusername/project-four",
    demo: "",
  },
];

export default projects;
