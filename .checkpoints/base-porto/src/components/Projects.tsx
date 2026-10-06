import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import { getProjectPresentation } from "../lib/projectPresentation";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [selection, setSelection] = useState({ active: 0, previous: 0 });
  const active = selection.active;
  const [selected, setSelected] = useState<number | null>(null);
  const [stageWidth, setStageWidth] = useState(900);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);
  const swiped = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width);
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const selectProject = (index: number) => setSelection((current) => ({ active: index, previous: current.active }));
  const changeSlide = (direction: number) => setSelection((current) => ({ active: (current.active + direction + projects.length) % projects.length, previous: current.active }));
  const activeWidth = Math.min(840, stageWidth * (stageWidth < 600 ? 0.76 : 0.52));
  const sideWidth = Math.min(320, stageWidth * (stageWidth < 600 ? 0.25 : 0.22));
  const cardGap = stageWidth < 600 ? 12 : 24;

  return (
    <section id="projects" className="relative scroll-mt-20">
      <div className="projects-content portfolio-shell">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--color-primary)" }}>Selected work</span>
          <h2 className="font-display font-semibold mt-3 mb-3" style={{ fontSize: "var(--text-h2)", color: "var(--color-ink)" }}>Things I&rsquo;ve shipped</h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>{projects.length} projects · 2024–2026</p>
        </Reveal>
        <Reveal>
          <div className="project-gallery" role="region" aria-label="Project gallery" aria-roledescription="carousel">
            <div
              ref={stageRef}
              className="project-gallery-stage"
              style={{ "--gallery-image-width": `${activeWidth}px` } as CSSProperties}
              id="project-gallery-stage"
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  event.preventDefault();
                  changeSlide(event.key === "ArrowLeft" ? -1 : 1);
                }
              }}
              onPointerDown={(event) => { pointerStart.current = event.clientX; swiped.current = false; }}
              onPointerMove={(event) => {
                if (pointerStart.current !== null && Math.abs(event.clientX - pointerStart.current) > 12) {
                  event.currentTarget.setPointerCapture(event.pointerId);
                }
              }}
              onPointerUp={(event) => {
                if (pointerStart.current === null) return;
                const distance = event.clientX - pointerStart.current;
                pointerStart.current = null;
                if (Math.abs(distance) > 45) { swiped.current = true; changeSlide(distance < 0 ? 1 : -1); }
              }}
              onPointerCancel={() => { pointerStart.current = null; }}
              onClickCapture={(event) => { if (swiped.current) { event.preventDefault(); event.stopPropagation(); swiped.current = false; } }}
            >
              <div className="project-gallery-ribbon">
              {projects.map((project, index) => {
                let offset = (index - active + projects.length) % projects.length;
                if (offset > projects.length / 2) offset -= projects.length;
                const distance = Math.abs(offset);
                let previousOffset = (index - selection.previous + projects.length) % projects.length;
                if (previousOffset > projects.length / 2) previousOffset -= projects.length;
                const wraps = Math.abs(offset - previousOffset) > projects.length / 2;
                const width = offset === 0 ? activeWidth : sideWidth;
                const center = offset === 0 ? 0 : Math.sign(offset) * (activeWidth / 2 + sideWidth / 2 + cardGap + (distance - 1) * (sideWidth + cardGap));
                const left = stageWidth * 0.5 + center - width / 2;
                const hidden = distance > 2 || left >= stageWidth || left + width <= 0;
                return (
                  <motion.div
                    key={project.title}
                    className="project-gallery-item"
                    style={{ zIndex: projects.length - distance, pointerEvents: hidden ? "none" : "auto" }}
                    initial={false}
                    animate={{ width, x: center - width / 2, opacity: distance > 2 ? 0 : 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      ease: [0.22, 1, 0.36, 1],
                      x: wraps || reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: reduceMotion ? 0 : 0.18 },
                    }}
                    aria-hidden={hidden}
                  >
                    <ProjectCard {...project} active={index === active} hidden={hidden} onOpen={() => { if (index === active) setSelected(index); else selectProject(index); }} />
                  </motion.div>
                );
              })}
              </div>
            </div>
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{getProjectPresentation(projects[active].title).name}, project {active + 1} of {projects.length}</p>
          </div>
        </Reveal>
      </div>
      <AnimatePresence>{selected !== null && <ProjectModal key={selected} project={projects[selected]} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
