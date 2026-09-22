import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Figures from "../../components/figures";
import PageHeader from "../../components/page-header";
import WhatWeDo from "../../components/what-we-do";
import { getDictionary, pageMetadata } from "../../lib/dictionaries";
import { hasLocale, localePath } from "../../lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/who-we-are">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).about;
  return pageMetadata(lang, "/who-we-are", t.title, t.description);
}

export default async function WhoWeAre({
  params,
}: PageProps<"/[lang]/who-we-are">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.about;

  return (
    <>
      <PageHeader lang={lang} home={dict.breadcrumbHome} title={t.title} lede={t.lede} />

      <section className="bg-bone">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <h2 className="display title-section">{t.heading}</h2>
            <div className="lede mt-7 space-y-6 text-[1.12rem] leading-8 text-ink-soft">
              {t.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/gallery/gallery-2.jpg"
                alt={t.imageAlts[0]}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[6px] shelf-edge" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src="/gallery/gallery-8.jpg"
                alt={t.imageAlts[1]}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[6px] shelf-edge" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-[92rem] px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
          <Figures labels={dict.figures} tone="dark" note={dict.home.figuresNote} />
        </div>
      </section>

      <section className="bg-shelf">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <WhatWeDo
            title={t.stepsTitle}
            steps={t.steps}
            links={[{ label: t.stepsLink, href: localePath(lang, "/brands") }]}
          />
        </div>
      </section>
    </>
  );
}
