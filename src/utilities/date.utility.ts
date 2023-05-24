import { getLangFromUrl } from "../i18n";

export function formatDate(url: URL, date: Date) {
  const lang = getLangFromUrl(new URL(url));

  return date.toLocaleString(lang, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
