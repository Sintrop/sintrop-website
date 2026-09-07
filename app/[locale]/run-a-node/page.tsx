import type { Metadata } from "next";
import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CommandBlock } from "@/components/Copy/CommandBlock";
import { NodeSetupBuilder, BuilderLabels } from "./NodeSetupBuilder";
import { CLIENT_REPO, SINTROP_MAINNET } from "@/lib/network";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { ShieldCheck, Coins, SlidersHorizontal, Leaf } from "lucide-react";

const i18nNamespaces = ["run-a-node"];

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("seo-title"),
    description: t("seo-description"),
    openGraph: {
      type: "website",
      title: t("seo-title") as string,
      description: t("seo-description") as string,
      alternateLocale: ["en", "pt"],
      url: localizedUrl("/run-a-node", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/run-a-node", locale),
  };
}

export default async function RunANode({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const builderLabels = Object.fromEntries(
    (
      [
        "builderTitle",
        "builderLead",
        "builderNetwork",
        "builderNetworkMainnet",
        "builderNetworkTestnet",
        "builderMethod",
        "builderMethodDocker",
        "builderMethodBinary",
        "builderWallet",
        "builderWalletHint",
        "builderWalletInvalid",
        "stepPrereqTitle",
        "stepPrereqDocker",
        "stepPrereqBinary",
        "stepGetTitle",
        "stepGetBinary",
        "stepGetDockerClone",
        "stepGetReleasesCta",
        "stepStartTitle",
        "stepStartBinaryDesc",
        "stepStartDockerDesc",
        "stepStartDockerGeth",
        "stepMineTitle",
        "stepMineDesc",
        "stepMineGpu",
        "stepVerifyTitle",
        "stepVerifyDesc",
        "stepStopNote",
        "copy",
        "copied",
      ] as const
    ).map((key) => [key, t(key)])
  ) as unknown as BuilderLabels;

  const why = [
    { icon: ShieldCheck, title: t("why1Title"), desc: t("why1Desc") },
    { icon: Coins, title: t("why2Title"), desc: t("why2Desc") },
    { icon: SlidersHorizontal, title: t("why3Title"), desc: t("why3Desc") },
    { icon: Leaf, title: t("why4Title"), desc: t("why4Desc") },
  ];

  const needs = [
    t("need1"),
    t("need2"),
    t("need3"),
    t("need4"),
    t("need5"),
  ];

  const wallet = "0xYourWalletAddress";
  const operate = [
    { label: t("opPeers"), command: "admin.peers" },
    { label: t("opBlock"), command: "eth.blockNumber" },
    {
      label: t("opBalance"),
      command: `web3.fromWei(eth.getBalance("${wallet}"), "ether")`,
    },
    { label: t("opMineStart"), command: "miner.start()\n// miner.stop()" },
    {
      label: t("opSetEtherbase"),
      command: `miner.setEtherbase("${wallet}")`,
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
        <section className="container mx-auto px-5 pb-16 pt-6 lg:px-20 lg:pb-24 lg:pt-14">
          <div className="max-w-3xl">
            <span className="font-anta text-xs uppercase tracking-[0.2em] text-white/60">
              {t("heroKicker")}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg text-white/75">{t("heroLead")}</p>
            <a
              href="#setup"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-brand-forest transition-colors hover:bg-brand-tint"
            >
              {t("heroCtaStart")}
              <FiArrowRight size={17} />
            </a>
          </div>
        </section>
      </div>

      <main>
        <section className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
          <h2 className="text-3xl md:text-4xl">{t("whyTitle")}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-deep">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-surface-sunken">
          <div className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <h2 className="text-3xl md:text-4xl">{t("needTitle")}</h2>
              <ul className="flex flex-col gap-3">
                {needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-ink-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {need}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="setup"
          className="container mx-auto scroll-mt-8 px-5 py-16 lg:px-20 lg:py-24"
        >
          <NodeSetupBuilder labels={builderLabels} />
        </section>

        <section className="bg-surface-sunken">
          <div className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
            <h2 className="text-3xl md:text-4xl">{t("operateTitle")}</h2>
            <p className="mt-3 text-lg text-ink-soft">{t("operateLead")}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {operate.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-ink">
                    {item.label}
                  </span>
                  <CommandBlock
                    caption="geth console"
                    command={item.command}
                    copyLabel={t("copy")}
                    copiedLabel={t("copied")}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
          <div className="rounded-3xl border border-line bg-surface p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl">{t("bootnodeTitle")}</h2>
            <p className="mt-3 max-w-2xl text-ink-soft">{t("bootnodeDesc")}</p>
            <Link
              href="/tutorials/how-to-run-a-bootnode"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:underline"
            >
              {t("bootnodeCta")}
              <FiArrowRight size={15} />
            </Link>
          </div>
        </section>

        <section className="bg-hero-forest">
          <div className="container mx-auto px-5 py-14 lg:px-20">
            <h2 className="text-2xl text-white md:text-3xl">{t("moreTitle")}</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <FooterLink href="/tutorials" label={t("moreTutorials")} />
              <FooterLink href={CLIENT_REPO} label={t("moreRepo")} external />
              <FooterLink
                href="https://discord.gg/dAGBBFnTM7"
                label={t("moreDiscord")}
                external
              />
              <FooterLink
                href={SINTROP_MAINNET.explorerUrl}
                label={t("explorer")}
                external
              />
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} locale={locale} />
    </TranslationsProvider>
  );
}

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
    >
      {label}
      <FiArrowUpRight size={14} />
    </Link>
  );
}
