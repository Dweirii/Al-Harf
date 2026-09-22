import Link from "next/link";
import { lang } from "next/root-params";
import { getDictionary } from "../lib/dictionaries";
import { defaultLocale, hasLocale, localePath } from "../lib/i18n";

/* not-found receives no params; the locale comes from the root segment. */
export default async function NotFound() {
  const value = await lang();
  const locale = hasLocale(value) ? value : defaultLocale;
  const t = getDictionary(locale).notFound;

  return (
    <section className="bg-shelf">
      <div className="mx-auto max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <h1 className="display title-page">{t.title}</h1>
        <p className="lede mt-6 max-w-[52ch] text-[1.15rem] leading-8 text-ink-soft">
          {t.body}
        </p>
        <Link
          href={localePath(locale, "/")}
          className="mt-9 inline-block bg-ink px-7 py-3.5 text-[1.05rem] font-medium text-bone transition-colors hover:bg-gold-deep"
        >
          {t.link}
        </Link>
      </div>
    </section>
  );
}
