export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: "1px solid var(--color-rule-2)" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-8">
        <p
          className="font-mono text-xs leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          MUFTI FARIS — FULL-STACK DEVELOPER · BUILT WITH REACT, VITE &amp;
          FRAMER MOTION · © {new Date().getFullYear()} ·{" "}
          <a
            href="https://github.com/MuftiFaris"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-(--color-ink)"
          >
            GITHUB ↗
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/mufti-faris/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-(--color-ink)"
          >
            LINKEDIN ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
