export function getProjectPresentation(title: string) {
  const statuses: string[] = [];
  if (/\[Still On Going\]/i.test(title)) statuses.push("In progress");
  if (/\[Still On Private\]/i.test(title)) statuses.push("Private repository");
  return {
    name: title.replace(/\[Still On (?:Going|Private)\]/gi, "").trim(),
    statuses,
  };
}
