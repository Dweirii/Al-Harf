export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dirOf = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

export const otherLocale = (lang: Locale): Locale =>
  lang === "ar" ? "en" : "ar";

/* "/brands" in Arabic is "/ar/brands"; "/" is "/ar". */
export const localePath = (lang: Locale, path: string) =>
  `/${lang}${path === "/" ? "" : path}`;

/* Strip the locale prefix off a browser pathname: "/ar/brands" -> "/brands". */
export const basePath = (pathname: string) => {
  const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
};

/* Fill "{n}"-style slots in dictionary strings. */
export const fill = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
