import Link from "next/link";
import { localePath, type Locale } from "../lib/i18n";

export default function PageHeader({
  lang,
  home,
  title,
  lede,
}: {
  lang: Locale;
  home: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-shelf">
      <div className="mx-auto grid max-w-[92rem] gap-6 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16 lg:px-12 lg:pb-16 lg:pt-14">
        <div>
          <p className="text-sm text-ink-soft">
            <Link
              href={localePath(lang, "/")}
              className="underline-offset-4 hover:text-ink hover:underline"
            >
              {home}
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span aria-current="page">{title}</span>
          </p>
          <h1 className="display title-page mt-4">{title}</h1>
        </div>
        {lede && (
          <p className="lede max-w-[52ch] text-[1.15rem] leading-8 text-ink-soft lg:pb-2">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
