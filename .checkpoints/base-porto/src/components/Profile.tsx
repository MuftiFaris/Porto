import { FiGithub, FiLinkedin } from "react-icons/fi";
import skills from "../data/skills";
import Reveal from "./Reveal";

export default function Profile() {
  return (
    <section id="about" className="portfolio-about" aria-labelledby="about-title">
      <div className="portfolio-shell">
        <Reveal direction="none">
          <h2 id="about-title">A little about me</h2>
        </Reveal>
          <div className="about-layout">
            <Reveal direction="left" className="about-story">
              <p>I’m an informatics undergraduate at Universitas Sebelas Maret. I like building practical, user-friendly applications, with a current focus on React and Node.js.</p>
              <p className="about-availability">Open to internships, freelance work, and collaborations.</p>
              <div className="about-socials">
                <a href="https://github.com/MuftiFaris" target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub ↗</a>
                <a href="https://www.linkedin.com/in/mufti-faris/" target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn ↗</a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={100} className="about-stack">
              <h3>What I work with</h3>
              <dl>{skills.map((group, index) => <Reveal key={group.category} direction="none" delay={index * 70}><dt>{group.category}</dt><dd>{group.items.join(" / ")}</dd></Reveal>)}</dl>
            </Reveal>
          </div>
      </div>
    </section>
  );
}
