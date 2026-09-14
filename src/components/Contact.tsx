import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";
import WaveBackground from "./WaveBackground";
import { colors, withAlpha } from "../lib/colors";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/MuftiFaris" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mufti-faris/" }
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 scroll-mt-16 overflow-hidden min-h-screen flex items-center"
    >
      <WaveBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${withAlpha("primary", 0.22)}, ${withAlpha(
            "secondary",
            0.22,
          )}, ${withAlpha("accent", 0.22)})`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center w-full">
        <Reveal>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            Contact
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 tracking-tight text-[hsl(240,20%,95%)]">
            Let's work together
          </h2>
          <p className="text-[hsl(240,20%,70%)] max-w-xl mx-auto mb-10">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <a
            href="https://www.linkedin.com/in/mufti-faris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-lg font-medium bg-[hsl(232,22%,60%)] text-[hsl(240,23%,5%)] hover:bg-[hsl(25,22%,60%)] transition-all duration-300 mb-12"
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-full border text-[hsl(240,20%,70%)] transition-all duration-300 hover:text-[hsl(240,23%,5%)]"
                style={{ borderColor: "hsla(240, 20%, 95%, 0.15)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.accent;
                  e.currentTarget.style.borderColor = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "hsla(240, 20%, 95%, 0.15)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
