import en from "./en.json";
import es from "./es.json";

export const defaultLang = "en";

export const locales = {
  en,
  es,
};

export type Locale = keyof typeof locales;

export type LocaleKey = keyof (typeof locales)[Locale];

export function getLangFromUrl(url: URL) {
  const lang = url.host.split(".")[0];
  if (lang in locales) {
    return lang as Locale;
  }

  return defaultLang;
}

export function getTransalations(lang: Locale) {
  return function t(key: LocaleKey) {
    return locales[lang][key] ?? locales[defaultLang][key] ?? key;
  };
}
