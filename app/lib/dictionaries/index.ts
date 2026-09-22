import "server-only";
import type { Metadata } from "next";
import { localePath, locales, type Locale } from "../i18n";
import { ar } from "./ar";
import { en, type Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (lang: Locale) => dictionaries[lang];

export type { Dictionary };

/* Title, description and the en/ar alternates for one page. */
export function pageMetadata(
  lang: Locale,
  path: string,
  title: string | undefined,
  description: string,
): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: localePath(lang, path),
      languages: Object.fromEntries(
        locales.map((l) => [l, localePath(l, path)]),
      ),
    },
  };
}
