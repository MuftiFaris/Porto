export type AccentKey = "primary" | "secondary" | "accent";

// The 3 palette colors — use ONLY for subtle highlights (buttons, borders, card accents).
export const colors: Record<AccentKey, string> = {
  primary: "hsl(232, 22%, 60%)", // Powder Blue #ABB0C9
  secondary: "hsl(346, 22%, 40%)", // Chocolate Plum #603F45
  accent: "hsl(25, 22%, 60%)", // Dusty Taupe #A1836D
};

export function withAlpha(key: AccentKey, alpha: number): string {
  const hslMap: Record<AccentKey, string> = {
    primary: "232, 22%, 60%",
    secondary: "346, 22%, 40%",
    accent: "25, 22%, 60%",
  };
  return `hsla(${hslMap[key]}, ${alpha})`;
}
