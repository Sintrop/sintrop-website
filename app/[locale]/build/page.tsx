import type { Metadata } from "next";
import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import { OG_IMAGE, localizedAlternates, localizedUrl } from "@/lib/metadata";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CommandBlock } from "@/components/Copy/CommandBlock";
import { CopyButton } from "@/components/Copy/CopyButton";
import { DeployGuide, DeployLabels } from "./DeployGuide";
import { SINTROP_MAINNET } from "@/lib/network";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Coins, Puzzle, HeartHandshake, ShieldCheck } from "lucide-react";

const i18nNamespaces = ["build"];

const CONTRACTS_REPO =
  "https://github.com/Sintrop/operating-system/tree/main/contracts";
const WHITEPAPER_EN = "https://sintrop.com/assets/sintrop.pdf";
const WHITEPAPER_PT = "https://sintrop.com/assets/sintrop-pt.pdf";

const SAMPLE_CONTRACT = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Minimal registry: anyone can publish an impact claim on-chain.
contract ImpactRegistry {
    struct Claim {
        address author;
        string uri;
        uint256 timestamp;
    }

    Claim[] public claims;

    event ClaimPublished(uint256 indexed id, address indexed author, string uri);

    function publish(string calldata uri) external returns (uint256 id) {
        id = claims.length;
        claims.push(Claim(msg.sender, uri, block.timestamp));
        emit ClaimPublished(id, msg.sender, uri);
    }

    function total() external view returns (uint256) {
        return claims.length;
    }
}`;

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
      url: localizedUrl("/build", locale),
      locale,
      siteName: "Sintrop",
      images: OG_IMAGE,
    },
    alternates: localizedAlternates("/build", locale),
  };
}

export default async function Build({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const deployLabels = Object.fromEntries(
    (
      [
        "guideTitle",
        "guideLead",
        "guideTool",
        "guideToolHardhat",
        "guideToolFoundry",
        "guideToolRemix",
        "hardhatStep1Title",
        "hardhatStep1Desc",
        "hardhatStep2Title",
        "hardhatStep2Desc",
        "foundryStep1Title",
        "foundryStep1Desc",
        "foundryStep2Title",
        "foundryStep2Desc",
        "remixStep1Title",
        "remixStep1Desc",
        "remixStep2Title",
        "remixStep2Desc",
        "remixStep3Title",
        "remixStep3Desc",
        "copy",
        "copied",
      ] as const
    ).map((key) => [key, t(key)])
  ) as unknown as DeployLabels;

  const why = [
    { icon: Coins, title: t("why1Title"), desc: t("why1Desc") },
    { icon: Puzzle, title: t("why2Title"), desc: t("why2Desc") },
    { icon: HeartHandshake, title: t("why3Title"), desc: t("why3Desc") },
    { icon: ShieldCheck, title: t("why4Title"), desc: t("why4Desc") },
  ];

  const connectRows = [
    { label: t("connectNetworkName"), value: SINTROP_MAINNET.name },
    { label: t("connectChainId"), value: String(SINTROP_MAINNET.chainId) },
    { label: t("connectCurrency"), value: SINTROP_MAINNET.currencySymbol },
    { label: t("connectRpc"), value: SINTROP_MAINNET.rpcUrl },
    { label: t("connectExplorer"), value: SINTROP_MAINNET.explorerUrl },
  ];

  const after = [t("after1"), t("after2"), t("after3")];
  const whitepaper = locale === "pt" ? WHITEPAPER_PT : WHITEPAPER_EN;

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
              href="#guide"
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
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl">{t("connectTitle")}</h2>
                <p className="mt-3 text-lg text-ink-soft">{t("connectLead")}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                {connectRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-4 px-5 py-4 ${
                      index !== connectRows.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-ink-soft">{row.label}</span>
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="truncate font-anta text-sm text-ink">
                        {row.value}
                      </span>
                      <CopyButton
                        value={row.value}
                        label={t("copy")}
                        copiedLabel={t("copied")}
                        iconOnly
                        className="shrink-0 text-ink-soft hover:text-brand-deep"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="guide"
          className="container mx-auto scroll-mt-8 px-5 py-16 lg:px-20 lg:py-24"
        >
          <div className="mb-10 rounded-3xl border border-line bg-surface p-6 lg:p-10">
            <h2 className="text-2xl md:text-3xl">{t("sampleTitle")}</h2>
            <p className="mt-2 text-ink-soft">{t("sampleDesc")}</p>
            <div className="mt-5">
              <CommandBlock
                caption="ImpactRegistry.sol"
                command={SAMPLE_CONTRACT}
                copyLabel={t("copy")}
                copiedLabel={t("copied")}
              />
            </div>
          </div>

          <DeployGuide labels={deployLabels} />
        </section>

        <section className="bg-surface-sunken">
          <div className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <h2 className="text-3xl md:text-4xl">{t("afterTitle")}</h2>
              <ol className="flex flex-col gap-3">
                {after.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-ink-soft"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint font-anta text-xs text-brand-deep">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-hero-forest">
          <div className="container mx-auto px-5 py-14 lg:px-20">
            <h2 className="text-2xl text-white md:text-3xl">{t("moreTitle")}</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <MoreLink href={CONTRACTS_REPO} label={t("moreContracts")} />
              <MoreLink href={whitepaper} label={t("moreWhitepaper")} />
              <MoreLink
                href="https://discord.gg/dAGBBFnTM7"
                label={t("moreDiscord")}
              />
              <MoreLink
                href={SINTROP_MAINNET.explorerUrl}
                label={t("explorer")}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </TranslationsProvider>
  );
}

function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
    >
      {label}
      <FiArrowUpRight size={14} />
    </Link>
  );
}
