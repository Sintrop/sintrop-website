import type { Metadata } from "next";
import { redirect } from "next/navigation";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHero } from "@/components/PageHero/PageHero";
import {
  LanguagesAvailablesForTutorials,
  tutorialsListPerLanguage,
} from "../tutorialsList";
import { getContentMDFromGitHub } from "@/src/services/github";

export const revalidate = 3600;

const i18nNamespaces = ["tutorials"];

type Props = {
  params: Promise<{ locale: LanguagesAvailablesForTutorials; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  const tutorial = tutorialsListPerLanguage[locale].find(
    (item) => item.id === id
  );

  return {
    title: t(tutorial?.title ?? "tutorials"),
    description: t(tutorial?.description ?? "seo-description-tutorials"),
    openGraph: {
      type: "article",
      title: t(tutorial?.title ?? "tutorials") as string,
      description: t(
        tutorial?.description ?? "seo-description-tutorials"
      ) as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl(`/tutorials/${id}`, locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates(`/tutorials/${id}`, locale),
  };
}

export default async function Tutorial({ params }: Props) {
  const { id, locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const tutorial = tutorialsListPerLanguage[locale].find(
    (item) => item.id === id
  );

  if (!tutorial) {
    return redirect("/tutorials");
  }

  const contentMDTutorial = await getContentMDFromGitHub({
    pathFile: tutorial.pathFile,
    repo: tutorial.repo,
    username: tutorial.username,
  });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="bg-hero-forest">
        <Header t={t} />
        <PageHero kicker={t("heroKicker")} title={t(tutorial.title)} />
      </div>

      <main className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <div
          dangerouslySetInnerHTML={{ __html: contentMDTutorial }}
          className="markdown-content mx-auto max-w-3xl"
        />
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}
