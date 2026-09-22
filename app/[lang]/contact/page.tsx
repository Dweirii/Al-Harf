import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "../../components/contact-form";
import PageHeader from "../../components/page-header";
import { getDictionary, pageMetadata } from "../../lib/dictionaries";
import { hasLocale } from "../../lib/i18n";
import { contact, telHref } from "../../lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).contactPage;
  return pageMetadata(lang, "/contact", t.title, t.description);
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.contactPage;

  return (
    <>
      <PageHeader lang={lang} home={dict.breadcrumbHome} title={t.title} lede={t.lede} />

      <div className="bg-bone">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-12 lg:py-24">
          <div className="space-y-10">
            <div>
              <h2 className="display-tight title-card">{t.phone}</h2>
              <ul className="mt-4 space-y-2 text-[1.15rem] leading-8">
                {contact.phones.map((p) => (
                  <li key={p}>
                    <a
                      href={telHref(p)}
                      dir="ltr"
                      className="text-ink-soft transition-colors hover:text-gold-deep"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="display-tight title-card">{t.email}</h2>
              <p className="mt-4 text-[1.15rem]">
                <a
                  href={`mailto:${contact.email}`}
                  dir="ltr"
                  className="text-ink-soft transition-colors hover:text-gold-deep"
                >
                  {contact.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="display-tight title-card">{t.address}</h2>
              <address className="lede mt-4 space-y-1 text-[1.12rem] not-italic leading-8 text-ink-soft">
                <p>{dict.company.legalName}</p>
                {dict.company.hqLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-2 text-[1.02rem]">{dict.company.landmark}</p>
              </address>
            </div>

            <div>
              <h2 className="display-tight title-card">{t.hours}</h2>
              <p className="mt-4 text-[1.12rem] leading-8 text-ink-soft">
                {dict.company.hours}
              </p>
            </div>
          </div>

          <div className="border-t-[5px] border-gold bg-shelf p-7 lg:p-10">
            <h2 className="display title-section">{t.formTitle}</h2>
            <p className="lede mt-3 max-w-[48ch] text-[1.05rem] leading-7 text-ink-soft">
              {t.formLede}
            </p>
            <div className="mt-8">
              <ContactForm t={t.form} email={contact.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
