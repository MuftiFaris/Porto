import { FiGithub, FiLinkedin } from "react-icons/fi";
import skills from "../data/skills";
import { colors, type AccentKey } from "../lib/colors";
import Reveal from "./Reveal";

// Supporting bento tiles rendered as siblings of Hero's lead tile, inside
// the same `.bento` grid — this file owns the content, Hero.tsx owns the
// grid + wireframe backdrop.
export default function Profile() {
  return (
    <>
      <Reveal delay={60} className="bento-tile" style={{ gridArea: "bio" }}>
        <span
          className="text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-primary)" }}
        >
          About
        </span>
        <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
          Undergraduate informatics student with a passion for building
          practical, user-friendly applications — currently focused on web
          development with React and Node.js.
        </p>
      </Reveal>

      <Reveal delay={100} className="bento-tile" style={{ gridArea: "skills" }}>
        <span
          className="text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-primary)" }}
        >
          Stack
        </span>
        <ul className="mt-4 flex flex-col gap-3.5">
          {skills.map((group) => {
            const accentKey = group.accent as AccentKey;
            return (
              <li key={group.category}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1 flex items-center gap-2"
                  style={{ color: "var(--color-ink)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: colors[accentKey] }}
                  />
                  {group.category}
                </p>
                <p className="text-sm" style={{ color: "var(--color-ink-2)" }}>
                  {group.items.join(", ")}
                </p>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal delay={140} className="bento-tile" style={{ gridArea: "status" }}>
        <span
          className="text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-primary)" }}
        >
          Status
        </span>
        <p className="mt-3 text-sm leading-relaxed flex items-start gap-2" style={{ color: "var(--color-ink-2)" }}>
          <span
            className="mt-1.5 w-2 h-2 rounded-full shrink-0"
            style={{ background: colors.primary }}
            aria-hidden="true"
          />
          Open to internships, freelance work, and collaborations.
        </p>
      </Reveal>

      <Reveal delay={180} className="bento-tile" style={{ gridArea: "education" }}>
        <span
          className="text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-primary)" }}
        >
          Education
        </span>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
          Informatics, Universitas Sebelas Maret
        </p>
      </Reveal>

      <Reveal delay={220} className="bento-tile flex flex-col" style={{ gridArea: "contact" }}>
        <span
          className="text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--color-primary)" }}
        >
          Say hello
        </span>
        <div className="mt-3 flex items-center gap-3">
          <a
            href="https://github.com/MuftiFaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ border: "1px solid var(--color-rule)", color: "var(--color-ink-2)" }}
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mufti-faris/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ border: "1px solid var(--color-rule)", color: "var(--color-ink-2)" }}
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </Reveal>
    </>
  );
}
