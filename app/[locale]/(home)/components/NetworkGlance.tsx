import Link from "next/link";
import { TType } from "@/types/t";
import { FiArrowUpRight } from "react-icons/fi";
import { CopyButton } from "@/components/Copy/CopyButton";
import { AddToMetamask } from "@/components/AddToMetamask/AddToMetamask";
import { SINTROP_MAINNET } from "@/lib/network";

interface Props {
  t: TType;
}

export function NetworkGlance({ t }: Props) {
  const rows = [
    { label: t("glanceNetworkName"), value: SINTROP_MAINNET.name },
    { label: t("glanceChainId"), value: String(SINTROP_MAINNET.chainId) },
    { label: t("glanceCurrency"), value: SINTROP_MAINNET.currencySymbol },
    { label: t("glanceRpc"), value: SINTROP_MAINNET.rpcUrl },
    { label: t("glanceExplorer"), value: SINTROP_MAINNET.explorerUrl },
  ];

  return (
    <section className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl">{t("glanceTitle")}</h2>
          <p className="mt-3 text-lg text-ink-soft">{t("glanceLead")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <AddToMetamask networkPage />
            <Link
              href="/network"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:underline"
            >
              {t("navNetwork")}
              <FiArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          {rows.map((row, index) => (
            <div
              key={row.label}
              className={`flex items-center justify-between gap-4 px-5 py-4 ${
                index !== rows.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="text-sm text-ink-soft">{row.label}</span>
              <span className="flex min-w-0 items-center gap-3">
                <span className="truncate font-anta text-sm text-ink">
                  {row.value}
                </span>
                <CopyButton
                  value={row.value}
                  label={t("glanceCopy")}
                  copiedLabel={t("glanceCopied")}
                  iconOnly
                  className="shrink-0 text-ink-soft hover:text-brand-deep"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
