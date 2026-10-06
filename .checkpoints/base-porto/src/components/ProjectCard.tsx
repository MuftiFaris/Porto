import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../data/projects";
import { getProjectPresentation } from "../lib/projectPresentation";

type Props = Project & { onOpen: () => void; active: boolean; hidden: boolean };

export default function ProjectCard({ title, tech, thumbnail, onOpen, active, hidden }: Props) {
  const reduceMotion = useReducedMotion();
  const { name } = getProjectPresentation(title);
  return (
    <motion.button
      type="button"
      className={`gallery-card${active ? " gallery-card-active" : ""}`}
      onClick={onOpen}
      tabIndex={hidden ? -1 : 0}
      aria-label={active ? `Open ${name} details` : `Select ${name}`}
      aria-haspopup={active ? "dialog" : undefined}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gallery-card-image">
        {thumbnail ? <img src={thumbnail} alt={`${name} preview`} draggable={false} loading="lazy" /> : <span>Preview unavailable</span>}
      </div>
      <span className="gallery-card-label">{tech[0] || "Project"}</span>
      <div className="gallery-card-caption">
        <h3>{name}</h3>
        <motion.p animate={{ opacity: active ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, delay: active && !reduceMotion ? 0.12 : 0 }}>{tech.join(" / ")}</motion.p>
        <span className="gallery-card-hint">{active ? "View project ↗" : "Explore →"}</span>
      </div>
    </motion.button>
  );
}
