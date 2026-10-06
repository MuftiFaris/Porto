import skills from "../data/skills";
import Reveal from "./Reveal";
import type { IconType } from "react-icons";
import { FiMonitor } from "react-icons/fi";
import { TbBrandCSharp } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiPython, SiPhp, SiCplusplus, SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiNodedotjs, SiFastapi, SiPostgresql, SiSanity, SiArchlinux, SiGooglegemini, SiGit, SiDocker, SiVercel } from "react-icons/si";

const stackIcons: Record<string, IconType> = {
  JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  PHP: SiPhp, "C#": TbBrandCSharp, "C++": SiCplusplus,
  React: SiReact, "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss, Vite: SiVite,
  "Node.js": SiNodedotjs, FastAPI: SiFastapi, PostgreSQL: SiPostgresql,
  "PL/pgSQL": SiPostgresql, "Sanity CMS": SiSanity, WPF: FiMonitor,
  "Arch Linux": SiArchlinux, "Gemini API": SiGooglegemini,
  Git: SiGit, Docker: SiDocker, Vercel: SiVercel,
};

export default function Profile() {
  return (
    <section id="about" className="portfolio-about" aria-labelledby="about-title">
      <div className="portfolio-shell">
        <Reveal direction="none">
          <span className="section-eyebrow">Background</span>
          <h2 id="about-title">A little about me</h2>
        </Reveal>
          <div className="about-layout">
            <Reveal direction="left" className="about-story">
              <p>I’m an informatics undergraduate at Universitas Sebelas Maret.</p>
              <p>I like building practical, user-friendly applications, with a current focus on React and Node.js.</p>
            </Reveal>
            <Reveal direction="right" delay={100} className="about-stack">
              <h3>What I work with</h3>
              <dl>{skills.map((group, index) => (
                <Reveal key={group.category} direction="none" delay={index * 70}>
                  <dt>{group.category}</dt>
                  <dd><ul className="stack-items">{group.items.map((item) => {
                    const Icon = stackIcons[item];
                    return <li key={item}>{Icon && <Icon aria-hidden="true" />}<span>{item}</span></li>;
                  })}</ul></dd>
                </Reveal>
              ))}</dl>
            </Reveal>
          </div>
      </div>
    </section>
  );
}
