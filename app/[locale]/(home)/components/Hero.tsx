import Link from "next/link";
import { TType } from "@/types/t";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { SINTROP_MAINNET } from "@/lib/network";
import { whitepaperUrl } from "@/lib/links";

interface Props {
  t: TType;
  locale: string;
}

export function Hero({ t, locale }: Props) {
  const stats = [
    { label: t("heroStatChain"), value: String(SINTROP_MAINNET.chainId) },
    { label: t("heroStatConsensus"), value: t("heroStatConsensusValue") },
    { label: t("heroStatCoin"), value: SINTROP_MAINNET.currencySymbol },
    { label: t("heroStatPremine"), value: t("heroStatPremineValue") },
  ];

  return (
    <section className="container mx-auto px-5 pb-16 pt-6 lg:px-20 lg:pb-28 lg:pt-16">
      <div className="max-w-3xl">
        <span className="font-anta text-xs uppercase tracking-[0.2em] text-white/60">
          {t("heroKicker")}
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          {t("heroTitle")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">{t("heroLead")}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/run-a-node"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-brand-forest transition-colors hover:bg-brand-tint"
          >
            {t("heroCtaNode")}
            <FiArrowRight size={17} />
          </Link>
          <Link
            href="/build"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t("heroCtaBuild")}
          </Link>
        </div>

        <a
          href={whitepaperUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          {t("heroReadWhitepaper")}
          <FiArrowUpRight size={15} />
        </a>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-brand-forest/40 px-5 py-5 backdrop-blur-sm">
            <dt className="text-xs uppercase tracking-wide text-white/55">
              {stat.label}
            </dt>
            <dd className="mt-1 font-anta text-lg text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
