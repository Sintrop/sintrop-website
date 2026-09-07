import type { Metadata } from "next";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "./components/Hero";
import { PathChooser } from "./components/PathChooser";
import { WhyChain } from "./components/WhyChain";
import { NetworkGlance } from "./components/NetworkGlance";
import { Ecosystem } from "./components/Ecosystem";
import { FeaturedRC } from "./components/FeaturedRC";
import { RenewableEnergy } from "./components/RenewableEnergy";

const i18nNamespaces = ["home"];

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title-home"),
    description: t("seo-description-home"),
    openGraph: {
      type: "website",
      title: t("seo-title-home") as string,
      description: t("seo-description-home") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/", locale),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="bg-hero-forest">
        <Header t={t} />
        <Hero t={t} locale={locale} />
      </div>

      <main>
        <PathChooser t={t} />
        <WhyChain t={t} />
        <NetworkGlance t={t} />
        <Ecosystem t={t} />
        <FeaturedRC t={t} />
        <RenewableEnergy t={t} />
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}
