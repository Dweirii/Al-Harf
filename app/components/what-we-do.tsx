import Link from "next/link";

/*
  Import, store, sell: the business in three steps. It is a real
  sequence, so the steps are numbered.
*/
export default function WhatWeDo({
  title,
  steps,
  links,
}: {
  title: string;
  steps: { step: string; text: string }[];
  links?: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="display title-section">{title}</h2>
      <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {steps.map((s, i) => {
          const link = links?.[i];
          return (
            <li key={s.step} className="border-t-[3px] border-gold pt-6">
              <p className="flex items-baseline gap-3">
                <span className="display text-[1.1rem] text-gold-deep">{i + 1}</span>
                <span className="display-tight title-card">{s.step}</span>
              </p>
              <p className="lede mt-3 max-w-[38ch] text-[1.05rem] leading-7 text-ink-soft">
                {s.text}
              </p>
              {link && (
                <Link
                  href={link.href}
                  className="mt-5 inline-block text-[1rem] font-medium text-ink underline decoration-gold decoration-2 underline-offset-[6px] transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
