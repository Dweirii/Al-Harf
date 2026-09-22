import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { getDictionary } from "../lib/dictionaries";
import { dirOf, hasLocale, locales, localePath } from "../lib/i18n";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL("https://www.al-harf.com"),
    title: { default: t.meta.title, template: t.meta.template },
    description: t.meta.description,
    alternates: {
      canonical: localePath(lang, "/"),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l, "/")])),
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: t.meta.ogLocale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dirOf(lang)}
      className={`${archivo.variable} ${notoKufi.variable} ${plexArabic.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader
          lang={lang}
          nav={t.nav}
          menu={t.menu}
          logoAlt={t.logoAlt}
          switchLabel={t.switchTo.label}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter lang={lang} t={t} />
      </body>
    </html>
  );
}
