import { createSignal, type Component, onMount, Match, Switch } from "solid-js";
import { TbMoon, TbSun } from "solid-icons/tb";
import { isServer } from "solid-js/web";
import {
  defaultLang,
  getLangFromUrl,
  getTransalations,
  type Locale,
} from "../i18n";

export type Theme = "dark" | "light";

let lang: Locale = defaultLang;
if (!isServer) {
  lang = getLangFromUrl(new URL(location.origin));
}
const t = getTransalations(lang);

export const ThemeButton: Component = () => {
  const initialTheme: Theme = isServer
    ? "light"
    : (localStorage?.getItem("theme") as Theme) ?? "light";
  const [theme, setTheme] = createSignal<Theme>(initialTheme);

  const setUserTheme = (theme: Theme) => {
    if (isServer) {
      return;
    }

    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
      setTheme("light");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (storedTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setUserTheme("dark");
    } else {
      setUserTheme("light");
    }
  });

  const handleButtonClick = () => {
    if (theme() === "dark") {
      setUserTheme("light");
    } else {
      setUserTheme("dark");
    }
  };

  return (
    <button
      aria-label={t("theme.button", theme() === "light" ? "dark" : "light")}
      class="rounded-full border border-gray-300 p-2 shadow-lg dark:border-slate-800 dark:bg-slate-700 dark:shadow-slate-800"
      onClick={handleButtonClick}
    >
      <Switch>
        <Match when={theme() === "light"}>
          <TbMoon class="h-6 w-6 fill-none stroke-black stroke-2" />
        </Match>
        <Match when={theme() === "dark"}>
          <TbSun class="h-6 w-6 fill-none stroke-white stroke-2" />
        </Match>
      </Switch>
    </button>
  );
};
