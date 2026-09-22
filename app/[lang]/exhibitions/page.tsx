import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "../../components/page-header";
import { getDictionary, pageMetadata } from "../../lib/dictionaries";
import { hasLocale } from "../../lib/i18n";
import { exhibitionOrder } from "../../lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/exhibitions">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).exhibitionsPage;
  return pageMetadata(lang, "/exhibitions", t.title, t.description);
}

export default async function Exhibitions({
  params,
}: PageProps<"/[lang]/exhibitions">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        lang={lang}
        home={dict.breadcrumbHome}
        title={dict.exhibitionsPage.title}
        lede={dict.exhibitionsPage.lede}
      />

      <div className="bg-bone">
        {exhibitionOrder.map((ex, i) => {
          const copy = dict.exhibitions[ex.slug];
          return (
            <section
              key={ex.slug}
              id={ex.slug}
              className="scroll-mt-24 border-b border-grey/25 last:border-0"
            >
              <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <h2 className="display title-section">{copy.name}</h2>
                  <p className="text-[1.05rem] text-gold-deep">{copy.place}</p>
                </div>

                <figure className="relative mt-8 aspect-[12/5]">
                  <Image
                    src={ex.image}
                    alt={copy.name}
                    fill
                    sizes="(max-width: 1536px) 100vw, 92rem"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[6px] shelf-edge" />
                </figure>

                <div className="lede mt-10 max-w-[74ch] space-y-5 text-[1.12rem] leading-8 text-ink-soft">
                  {copy.detail.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>

                {copy.floors && (
                  <dl className="mt-10 max-w-[80rem] border-t border-grey/30">
                    {copy.floors.map((floor) => (
                      <div
                        key={floor.name}
                        className="grid gap-1 border-b border-grey/30 py-4 sm:grid-cols-[18rem_1fr] sm:gap-8"
                      >
                        <dt className="font-medium text-ink">{floor.name}</dt>
                        <dd className="lede text-ink-soft">{floor.what}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
