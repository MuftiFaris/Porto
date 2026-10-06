type SectionPosition = { id: string; top: number };

export function getActiveSection(
  sections: SectionPosition[],
  scrollY: number,
  viewportHeight: number,
  pageHeight: number,
  navOffset: number,
  requestedSection?: string,
): string {
  if (!sections.length) return "hero";
  if (requestedSection && sections.some((section) => section.id === requestedSection)) return requestedSection;
  // A short final section cannot always reach the navigation marker.
  if (pageHeight > viewportHeight && scrollY + viewportHeight >= pageHeight - 3) {
    return sections[sections.length - 1].id;
  }
  const marker = scrollY + navOffset;
  let active = sections[0].id;
  for (const section of sections) {
    if (section.top <= marker) active = section.id;
    else break;
  }
  return active;
}
