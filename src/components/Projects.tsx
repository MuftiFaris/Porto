import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20"
      style={{ borderTop: "1px solid var(--color-rule-2)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-28">
        <Reveal>
          <span
            className="font-mono text-xs uppercase tracking-[0.14em]"
            style={{ color: "var(--color-primary)" }}
          >
            Selected work
          </span>
          <h2
            className="font-display font-semibold mt-3 mb-3"
            style={{ fontSize: "var(--text-h2)", color: "var(--color-ink)" }}
          >
            Things I&rsquo;ve shipped
          </h2>
          <p
            className="font-mono text-sm mb-12"
            style={{ color: "var(--color-muted)" }}
          >
            {projects.length} projects · 2024–2026
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
