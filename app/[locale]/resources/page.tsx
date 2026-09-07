import type { Metadata } from "next";
import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHero } from "@/components/PageHero/PageHero";
import { getReleasesFromGitHub } from "@/src/services/github";
import { ReleaseItem } from "./components/ReleaseItem/ReleaseItem";
import {
  DISCORD_URL,
  GITHUB_ORG_URL,
  STATUS_URL,
  whitepaperUrl,
} from "@/lib/links";
import { FiArrowUpRight } from "react-icons/fi";

export const revalidate = 3600;

const i18nNamespaces = ["resources"];

const RELEASES_URL = "https://github.com/sintrop/go-sintrop/releases";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title-resources"),
    description: t("seo-description-resources"),
    openGraph: {
      type: "website",
      title: t("seo-title-resources") as string,
      description: t("seo-description-resources") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/resources", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/resources", locale),
  };
}

export default async function Resources({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const [releasesGoSintrop, releasesSintropCore] = await Promise.all([
    getReleasesFromGitHub({ repo: "go-sintrop", username: "sintrop" }),
    getReleasesFromGitHub({ repo: "sintrop-core", username: "sintrop" }),
  ]);

  const links = [
    { href: whitepaperUrl(locale), label: t("whitepaper") },
    { href: "https://explorer.sintrop.com", label: t("explorer") },
    { href: STATUS_URL, label: t("status") },
    { href: GITHUB_ORG_URL, label: t("github") },
    { href: DISCORD_URL, label: t("discord") },
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
          title={t("resourcesHeroTitle")}
          lead={t("resourcesHeroLead")}
        />
      </div>

      <main className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <h2 className="text-2xl md:text-3xl">{t("releases")}</h2>

        <ReleaseGroup
          title={t("goSintrop")}
          releases={releasesGoSintrop}
          releaseType="go-sintrop"
          t={t}
          fallbackLabel={t("releasesUnavailable")}
          fallbackHref={RELEASES_URL}
        />
        <ReleaseGroup
          title={t("sintropCore")}
          releases={releasesSintropCore}
          releaseType="sintrop-core"
          t={t}
          fallbackLabel={t("releasesUnavailable")}
          fallbackHref="https://github.com/sintrop/sintrop-core/releases"
        />

        <h2 className="mt-16 text-2xl md:text-3xl">{t("links")}</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand"
            >
              {link.label}
              <FiArrowUpRight size={14} className="text-ink-soft" />
            </Link>
          ))}
        </div>
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}

interface ReleaseGroupProps {
  title: string;
  releases: Awaited<ReturnType<typeof getReleasesFromGitHub>>;
  releaseType: "go-sintrop" | "sintrop-core";
  t: Awaited<ReturnType<typeof initTranslations>>["t"];
  fallbackLabel: string;
  fallbackHref: string;
}

function ReleaseGroup({
  title,
  releases,
  releaseType,
  t,
  fallbackLabel,
  fallbackHref,
}: ReleaseGroupProps) {
  return (
    <section className="mt-8">
      <h3 className="text-xl">{title}</h3>
      {releases.length > 0 ? (
        <div className="mt-4 flex flex-col gap-5">
          {releases.slice(0, 5).map((release, index) => (
            <ReleaseItem
              key={release.html_url ?? index}
              t={t}
              release={release}
              latest={index === 0}
              releaseType={releaseType}
            />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-ink-soft">
          {fallbackLabel}{" "}
          <a
            href={fallbackHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-deep hover:underline"
          >
            GitHub
          </a>
        </p>
      )}
    </section>
  );
}
