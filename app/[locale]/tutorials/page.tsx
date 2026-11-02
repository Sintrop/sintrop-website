import type { Metadata } from "next";
import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHero } from "@/components/PageHero/PageHero";
import { TutorialItem } from "./components/TutorialItem/TutorialItem";
import { Accordion } from "@/components/ui/accordion";
import {
  LanguagesAvailablesForTutorials,
  tutorialsListPerLanguage,
} from "./tutorialsList";
import { FiArrowRight } from "react-icons/fi";

export const revalidate = 3600;

const i18nNamespaces = ["tutorials"];

type Props = {
  params: Promise<{ locale: LanguagesAvailablesForTutorials }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title-tutorials"),
    description: t("seo-description-tutorials"),
    openGraph: {
      type: "website",
      title: t("seo-title-tutorials") as string,
      description: t("seo-description-tutorials") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/tutorials", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/tutorials", locale),
  };
}

export default async function Tutorials({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const tutorials = tutorialsListPerLanguage[locale];

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
          title={t("tutorialsHeroTitle")}
          lead={t("tutorialsHeroLead")}
        />
      </div>

      <main className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <Link
          href="/run-a-node"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          {t("tutorialsRunNodeCta")}
          <FiArrowRight size={15} />
        </Link>

        <Accordion
          type="single"
          collapsible
          className="mt-10 flex flex-col gap-4"
        >
          {tutorials.map((item, index) => (
            /* @ts-expect-error async server component inside client Accordion */
            <TutorialItem key={item.id} index={index} item={item} t={t} />
          ))}
        </Accordion>
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}
