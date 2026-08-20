import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { colors } from "../lib/colors";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            Work
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-10 tracking-tight text-[hsl(240,20%,95%)]">
            Featured Projects
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
