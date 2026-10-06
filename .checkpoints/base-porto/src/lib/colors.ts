export type AccentKey = "primary" | "secondary" | "accent";

// Brand identity — 3 named hues, converted from the original HSL brand
// colors to OKLCH and re-tuned to real accent chroma (was 0.04-0.06,
// which read as washed-out grey; accents now sit at 0.12-0.17).
// `primary` (periwinkle-indigo) is the dominant interactive color.
// `secondary` (rose-plum) and `accent` (amber-taupe) are used sparingly —
// skill-category dots, the hero/contact gradient wash — never as UI fills.
const oklchBase: Record<AccentKey, string> = {
  primary: "74% 0.15 278",
  secondary: "60% 0.13 350",
  accent: "68% 0.12 57",
};

export const colors: Record<AccentKey, string> = {
  primary: `oklch(${oklchBase.primary})`,
  secondary: `oklch(${oklchBase.secondary})`,
  accent: `oklch(${oklchBase.accent})`,
};

export function withAlpha(key: AccentKey, alpha: number): string {
  return `oklch(${oklchBase[key]} / ${alpha})`;
}

// Neutral scale — all tinted toward the brand's cool anchor hue (278),
// dark paper band. Never pure #000 / #fff.
export const neutral = {
  paper: "oklch(14% 0.014 278)",
  paper2: "oklch(18% 0.016 278)",
  paper3: "oklch(23% 0.018 278)",
  ink: "oklch(95% 0.008 278)",
  ink2: "oklch(74% 0.014 278)",
  rule: "oklch(28% 0.014 278)",
  rule2: "oklch(22% 0.014 278)",
  muted: "oklch(58% 0.016 278)",
};

export const focus = "oklch(80% 0.19 278)";
export const primaryStrong = "oklch(66% 0.17 278)";
export const primaryInk = "oklch(16% 0.02 278)"; // dark text painted on top of the accent fill

// Single shared decorative wash — used identically behind WaveBackground
// in both Hero and Contact so the two sections read as one system.
export const heroWash = `linear-gradient(135deg, ${withAlpha("primary", 0.16)}, ${withAlpha(
  "secondary",
  0.14,
)}, ${withAlpha("accent", 0.14)})`;
