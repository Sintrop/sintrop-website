import type { Metadata } from "next";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHero } from "@/components/PageHero/PageHero";

const i18nNamespaces = ["about"];

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title-about"),
    description: t("seo-description-about"),
    openGraph: {
      type: "website",
      title: t("seo-title-about") as string,
      description: t("seo-description-about") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/about", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/about", locale),
  };
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const sections = [
    { heading: t("whyAnotherChain"), body: [t("descWhyAnotherChain")] },
    {
      heading: t("impactAsCoreValue"),
      body: [t("descImpactAsCoreValue"), t("descImpactAsCoreValue2")],
    },
    {
      heading: t("decentralizationAsCoreValue"),
      body: [
        t("descDecentralizationAsCoreValue"),
        t("descDecentralizationAsCoreValue2"),
      ],
    },
    {
      heading: t("sintropVirtualMachine"),
      body: [t("descSintropVirtualMachine"), t("descSintropVirtualMachine2")],
    },
    {
      heading: t("smartContractPlatform"),
      body: [t("descSmartContractPlatform")],
    },
  ];

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="bg-hero-forest">
        <Header t={t} />
        <PageHero
          kicker={t("heroKicker")}
          title={t("aboutHeroTitle")}
          lead={t("aboutHeroLead")}
        />
      </div>

      <main className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-2xl md:text-3xl">{section.heading}</h2>
              <div className="mt-4 flex flex-col gap-4 text-ink-soft">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer t={t} />
    </TranslationsProvider>
  );
}
