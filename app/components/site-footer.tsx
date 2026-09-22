import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../lib/dictionaries";
import { localePath, type Locale } from "../lib/i18n";
import { contact, telHref } from "../lib/site";

const links = [
  { key: "whoWeAre", path: "/who-we-are" },
  { key: "brands", path: "/brands" },
  { key: "exhibitions", path: "/exhibitions" },
  { key: "contact", path: "/contact" },
] as const;

export default function SiteFooter({
  lang,
  t,
}: {
  lang: Locale;
  t: Dictionary;
}) {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <Image
            src="/brand/al-harf-logo.png"
            alt={t.logoAlt}
            width={2235}
            height={500}
            className="h-11 w-auto brightness-0 invert"
          />
          <p className="lede mt-6 max-w-sm text-[1.05rem] leading-7 text-grey-light">
            {t.footer.blurb}
          </p>
        </div>

        <div>
          <h2 className="wide text-sm font-semibold text-gold ltr:tracking-wide">
            {t.footer.findUs}
          </h2>
          <address className="mt-5 space-y-1 text-[1.05rem] not-italic leading-7 text-bone">
            <p className="font-medium">{t.company.legalName}</p>
            <p className="text-grey-light">{t.company.hqLabel}</p>
            {t.company.hqLines.map((line) => (
              <p key={line} className="text-grey-light">
                {line}
              </p>
            ))}
          </address>
          <p className="mt-5 text-[1.05rem] leading-7 text-grey-light">
            {t.company.hours}
          </p>
        </div>

        <div>
          <h2 className="wide text-sm font-semibold text-gold ltr:tracking-wide">
            {t.footer.getInTouch}
          </h2>
          <ul className="mt-5 space-y-2 text-[1.05rem] leading-7">
            {contact.phones.map((p) => (
              <li key={p}>
                <a
                  href={telHref(p)}
                  dir="ltr"
                  className="transition-colors hover:text-signal"
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                dir="ltr"
                className="transition-colors hover:text-signal"
              >
                {contact.email}
              </a>
            </li>
          </ul>
          <ul className="mt-7 space-y-2">
            {links.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(lang, item.path)}
                  className="text-[0.95rem] text-grey-light transition-colors hover:text-signal"
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-6 text-sm text-grey-light sm:px-8 lg:px-12">
          © {new Date().getFullYear()} {t.company.legalName}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
