import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Figures from "../components/figures";
import Mark from "../components/mark";
import { getDictionary } from "../lib/dictionaries";
import { fill, hasLocale, localePath } from "../lib/i18n";
import { brandOrder, contact, exhibitionOrder, telHref } from "../lib/site";

const section = "mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-12";
const textLink =
  "inline-block text-[1.02rem] font-medium underline decoration-gold decoration-2 underline-offset-[6px] transition-colors";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const href = (path: string) => localePath(lang, path);
  const stepLinks = [
    { label: fill(t.home.wallAll, { n: brandOrder.length }), href: href("/brands") },
    { label: t.home.whatLinks[1], href: href("/contact") },
    { label: t.home.whatLinks[2], href: href("/exhibitions") },
  ];

  return (
    <>
      {/* Hero: the three things the company does, and the letter it is named for. */}
      <section className="overflow-hidden bg-ink text-bone">
        <div
          className={`${section} grid items-center gap-12 py-16 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-20`}
        >
          <div>
            <h1>
              <span className="display title-hero block">{t.home.heroLine1}</span>
              <span className="display-tight mt-5 block max-w-[24ch] text-[clamp(1.35rem,2.4vw,2.1rem)] text-signal">
                {t.home.heroLine2}
              </span>
            </h1>
            <p className="lede mt-8 max-w-[52ch] text-[1.15rem] leading-8 text-grey-light lg:text-[1.2rem]">
              {t.home.heroLede}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={href("/contact")}
                className="bg-signal px-7 py-3.5 text-[1.05rem] font-medium text-ink transition-colors hover:bg-bone"
              >
                {t.home.ctaPartner}
              </Link>
              <Link
                href={href("/exhibitions")}
                className="border border-white/35 px-7 py-3.5 text-[1.05rem] text-bone transition-colors hover:border-signal hover:text-signal"
              >
                {t.home.ctaMarkets}
              </Link>
            </div>
          </div>

          <Mark
            draw
            className="w-[62%] max-w-[36rem] justify-self-center text-gold sm:w-[48%] lg:w-full lg:justify-self-end"
          />
        </div>
      </section>

      {/* Import, store, sell: a real sequence, so the steps are numbered. */}
      <section className="bg-shelf">
        <div className={`${section} py-16 lg:py-28`}>
          <h2 className="display title-section max-w-[20ch]">{t.home.whatTitle}</h2>

          <ol className="mt-12 grid gap-14 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-10">
            {t.about.steps.map((s, i) => (
              <li key={s.step} className="flex flex-col">
                <p className="flex items-baseline gap-4 border-t-[3px] border-gold pt-5">
                  <span className="display text-[2.4rem] leading-none text-gold-deep">{i + 1}</span>
                  <span className="display-tight title-card">{s.step}</span>
                </p>

                <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-bone">
                  {i === 0 ? (
                    <ul className="grid h-full grid-cols-4 grid-rows-3 gap-px">
                      {brandOrder.slice(0, 12).map((brand) => (
                        <li
                          key={brand.slug}
                          className="flex min-w-0 items-center justify-center bg-shelf p-2"
                        >
                          <Image
                            src={brand.logo}
                            alt={t.brands[brand.slug].name}
                            width={300}
                            height={170}
                            className="max-h-[70%] w-auto max-w-[86%] object-contain"
                          />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Image
                      src={i === 1 ? "/exhibitions/al-harf.jpg" : "/gallery/gallery-8.jpg"}
                      alt={t.home.stepImageAlts[i - 1]}
                      fill
                      sizes="(max-width: 768px) 100vw, 31vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <p className="lede mt-6 max-w-[40ch] text-[1.08rem] leading-7 text-ink-soft">
                  {s.text}
                </p>
                <Link
                  href={stepLinks[i].href}
                  className={`${textLink} mt-5 self-start text-ink hover:text-gold-deep`}
                >
                  {stepLinks[i].label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Markets: where the goods meet the public. */}
      <section className="bg-bone">
        <div className={`${section} grid gap-12 py-16 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:py-28`}>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="display title-section max-w-[14ch]">{t.home.marketsTitle}</h2>
            <Link
              href={href("/exhibitions")}
              className={`${textLink} mt-8 text-ink hover:text-gold-deep`}
            >
              {t.home.marketsLink}
            </Link>
          </div>

          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {exhibitionOrder.map((ex) => {
              const copy = t.exhibitions[ex.slug];
              return (
                <li key={ex.slug}>
                  <Link href={`${href("/exhibitions")}#${ex.slug}`} className="group block">
                    <div className="relative aspect-[9/4] overflow-hidden">
                      <Image
                        src={ex.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="h-[5px] shelf-edge" />
                    <h3 className="display-tight title-card mt-5 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-gold">
                      {copy.name}
                    </h3>
                    <p className="mt-1 text-[0.98rem] text-gold-deep">{copy.place}</p>
                    <p className="lede mt-3 max-w-[46ch] text-[1.02rem] leading-7 text-ink-soft">
                      {copy.summary}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* The story, told beside the people and shelves it produced. */}
      <section className="bg-shelf">
        <div className={`${section} py-16 lg:py-28`}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <div className="grid aspect-[6/5] grid-cols-[1fr_1.15fr] grid-rows-2 gap-3 sm:gap-4">
                <div className="relative row-span-2 overflow-hidden">
                  <Image
                    src="/gallery/gallery-7.jpg"
                    alt={t.home.storyImageAlt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/gallery/gallery-6.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/gallery/gallery-1.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="display title-section max-w-[18ch]">{t.home.storyTitle}</h2>
              <div className="lede mt-7 max-w-[58ch] space-y-5 text-[1.1rem] leading-8 text-ink-soft">
                {t.home.storyBody.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <Link
                href={href("/who-we-are")}
                className={`${textLink} mt-8 text-ink hover:text-gold-deep`}
              >
                {t.home.storyLink}
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <Figures labels={t.figures} tone="light" note={t.home.figuresNote} />
          </div>
        </div>
      </section>

      {/* For manufacturers looking for an Iraqi distributor. */}
      <section className="bg-ink text-bone">
        <div className={`${section} grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20 lg:py-24`}>
          <div>
            <h2 className="display title-section max-w-[16ch]">{t.home.contactTitle}</h2>
            <p className="lede mt-6 max-w-[46ch] text-[1.15rem] leading-8 text-grey-light">
              {t.home.contactLede}
            </p>
            <Link
              href={href("/contact")}
              className="mt-9 inline-block bg-signal px-7 py-3.5 text-[1.05rem] font-medium text-ink transition-colors hover:bg-bone"
            >
              {t.home.contactCta}
            </Link>
          </div>

          <dl className="grid gap-x-10 gap-y-8 border-t border-white/20 pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-signal">{t.contactPage.phone}</dt>
              <dd className="mt-2 space-y-1 text-[1.1rem]">
                {contact.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="block hover:text-signal">
                    <span dir="ltr">{p}</span>
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-signal">{t.contactPage.email}</dt>
              <dd className="mt-2 text-[1.1rem]">
                <a href={`mailto:${contact.email}`} dir="ltr" className="hover:text-signal">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-signal">{t.contactPage.address}</dt>
              <dd className="mt-2 text-[1.02rem] leading-7 text-grey-light">
                {t.company.hqLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-signal">{t.contactPage.hours}</dt>
              <dd className="mt-2 text-[1.02rem] leading-7 text-grey-light">{t.company.hours}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
