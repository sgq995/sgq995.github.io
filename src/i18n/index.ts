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
  return function t(key: LocaleKey, ...args: string[]) {
    let text = locales[lang][key] ?? locales[defaultLang][key] ?? key;
    for (let i = 0; i < args.length; ++i) {
      text = text.replaceAll(new RegExp(`\\$${i + 1}`, "g"), args[i]);
    }
    return text;
  };
}
