import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";
import { primaryInk } from "../lib/colors";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/MuftiFaris" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mufti-faris/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="portfolio-contact relative scroll-mt-20" aria-labelledby="contact-title">
      <div
        className="contact-content portfolio-shell"
      >
        <Reveal direction="none" className="contact-layout">
          <div className="contact-copy">
          <h2
            id="contact-title"
            className="font-display font-semibold max-w-[16ch]"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
            }}
          >
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
            Open to internships, freelance work, and collaborations.
            Tell me what you&rsquo;re working on.
          </p>
          </div>

          <div className="contact-actions">
            <a
              href="https://www.linkedin.com/in/mufti-faris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              style={{
                borderRadius: "var(--radius-control)",
                background: "var(--color-primary)",
                color: primaryInk,
              }}
            >
              Let&rsquo;s talk on LinkedIn
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                  style={{ border: "1px solid var(--color-rule)", color: "var(--color-ink-2)" }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} direction="up">
        <div
          className="contact-colophon font-mono text-xs leading-relaxed pt-6"
          style={{ color: "var(--color-muted)", borderTop: "1px solid var(--color-rule-2)" }}
        >
          <p>BUILT WITH REACT, VITE &amp; FRAMER MOTION</p>
          <p>MUFTI FARIS · © {new Date().getFullYear()}</p>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}
