import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandShelf from "../../components/brand-shelf";
import PageHeader from "../../components/page-header";
import { getDictionary, pageMetadata } from "../../lib/dictionaries";
import { fill, hasLocale, localePath } from "../../lib/i18n";
import { brandGroups, brandOrder } from "../../lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/brands">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).brandsPage;
  return pageMetadata(lang, "/brands", t.title, t.description);
}

export default async function Brands({ params }: PageProps<"/[lang]/brands">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.brandsPage;

  return (
    <>
      <PageHeader
        lang={lang}
        home={dict.breadcrumbHome}
        title={t.title}
        lede={fill(t.lede, { n: brandOrder.length })}
      />

      <div className="bg-bone">
        <div className="mx-auto max-w-[92rem] space-y-20 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          {brandGroups.map((group) => {
            const items = group.slugs.map((slug) => {
              const asset = brandOrder.find((b) => b.slug === slug)!;
              return { slug, logo: asset.logo, ...dict.brands[slug] };
            });
            return (
              <section key={group.key}>
                <h2 className="display title-section">
                  {t.groups[group.key]}
                </h2>
                <div className="mt-8">
                  <BrandShelf items={items} />
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section className="bg-shelf">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <h2 className="display title-section max-w-[24ch]">
            {t.ctaTitle}
          </h2>
          <p className="lede mt-5 max-w-[56ch] text-[1.12rem] leading-8 text-ink-soft">
            {t.ctaLede}
          </p>
          <Link
            href={localePath(lang, "/contact")}
            className="mt-8 inline-block bg-ink px-7 py-3.5 text-[1.05rem] font-medium text-bone transition-colors hover:bg-gold-deep"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
