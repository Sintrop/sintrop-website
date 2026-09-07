import type { Metadata } from "next";
import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { AddToMetamask } from "@/components/AddToMetamask/AddToMetamask";
import { NetworkParamsTable } from "@/components/NetworkParams/NetworkParamsTable";
import { SINTROP_MAINNET } from "@/lib/network";
import { FiArrowUpRight } from "react-icons/fi";

const i18nNamespaces = ["network"];

const STATUS_URL = "http://status.sintrop.com:3000";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title-network"),
    description: t("seo-description-network"),
    openGraph: {
      type: "website",
      title: t("seo-title-network") as string,
      description: t("seo-description-network") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/network", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/network", locale),
  };
}

export default async function Network({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const links = [
    { href: SINTROP_MAINNET.explorerUrl, label: t("linkExplorer"), external: true },
    { href: STATUS_URL, label: t("linkStatus"), external: true },
    { href: "/run-a-node", label: t("linkRunNode") },
    { href: "/build", label: t("linkBuild") },
  ];

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="bg-hero-forest">
        <Header t={t} />
        <section className="container mx-auto px-5 pb-16 pt-6 lg:px-20 lg:pb-24 lg:pt-14">
          <div className="max-w-3xl">
            <span className="font-anta text-xs uppercase tracking-[0.2em] text-white/60">
              {t("heroKicker")}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg text-white/75">{t("heroLead")}</p>
          </div>
        </section>
      </div>

      <main className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl">{t("connectTitle")}</h2>
            <p className="text-ink-soft">{t("connectLead")}</p>
            <div className="mt-2">
              <AddToMetamask networkPage />
            </div>
            <p className="mt-2 text-sm text-ink-soft">{t("connectManualNote")}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl">{t("paramsTitle")}</h2>
            <p className="text-ink-soft">{t("paramsLead")}</p>
            <NetworkParamsTable
              labels={{
                networkName: t("connectNetworkName"),
                chainId: t("connectChainId"),
                currency: t("connectCurrency"),
                rpc: t("connectRpc"),
                explorer: t("connectExplorer"),
                copy: t("copy"),
                copied: t("copied"),
              }}
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl">{t("linksTitle")}</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand"
              >
                {link.label}
                <FiArrowUpRight size={14} className="text-ink-soft" />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}
