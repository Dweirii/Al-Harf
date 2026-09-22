"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries/en";
import { basePath, localePath, otherLocale, type Locale } from "../lib/i18n";

const routes = [
  { key: "whoWeAre", path: "/who-we-are" },
  { key: "brands", path: "/brands" },
  { key: "exhibitions", path: "/exhibitions" },
  { key: "contact", path: "/contact" },
] as const;

export default function SiteHeader({
  lang,
  nav,
  menu,
  logoAlt,
  switchLabel,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  menu: Dictionary["menu"];
  logoAlt: string;
  switchLabel: string;
}) {
  const current = basePath(usePathname());
  const [open, setOpen] = useState(false);
  const other = otherLocale(lang);
  const switchHref = localePath(other, current);

  return (
    <header className="sticky top-0 z-50 bg-shelf/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[92rem] items-center gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link
          href={localePath(lang, "/")}
          className="shrink-0"
          aria-label={menu.home}
        >
          <Image
            src="/brand/al-harf-logo.png"
            alt={logoAlt}
            width={2235}
            height={500}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="ms-auto hidden items-center gap-7 xl:flex">
          {routes.filter((r) => r.key !== "contact").map((route) => {
            const active = current === route.path;
            return (
              <Link
                key={route.path}
                href={localePath(lang, route.path)}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[1rem] transition-colors ${
                  active ? "font-medium text-ink" : "text-ink/75 hover:text-ink"
                }`}
              >
                {nav[route.key]}
                <span
                  className={`absolute -bottom-0.5 start-0 h-[3px] w-full bg-gold transition-transform duration-200 ltr:origin-left rtl:origin-right ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={switchHref}
            lang={other}
            hrefLang={other}
            className="text-[1rem] text-ink/75 transition-colors hover:text-ink"
          >
            {switchLabel}
          </a>
          <Link
            href={localePath(lang, "/contact")}
            aria-current={current === "/contact" ? "page" : undefined}
            className="bg-ink px-5 py-2.5 text-[1rem] font-medium text-bone transition-colors hover:bg-gold-deep"
          >
            {nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ms-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] xl:hidden"
        >
          <span className="sr-only">{open ? menu.close : menu.open}</span>
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-bone bg-shelf px-5 pb-6 sm:px-8 xl:hidden"
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              href={localePath(lang, route.path)}
              onClick={() => setOpen(false)}
              aria-current={current === route.path ? "page" : undefined}
              className="block border-b border-bone py-3.5 text-lg text-ink"
            >
              {nav[route.key]}
            </Link>
          ))}
          <a
            href={switchHref}
            lang={other}
            hrefLang={other}
            className="block py-3.5 text-lg text-ink"
          >
            {switchLabel}
          </a>
        </nav>
      )}

      <div className="h-[5px] shelf-edge" />
    </header>
  );
}
