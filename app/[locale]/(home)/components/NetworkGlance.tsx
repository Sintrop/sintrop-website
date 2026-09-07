import Link from "next/link";
import { TType } from "@/types/t";
import { FiArrowUpRight } from "react-icons/fi";
import { AddToMetamask } from "@/components/AddToMetamask/AddToMetamask";
import { NetworkParamsTable } from "@/components/NetworkParams/NetworkParamsTable";

interface Props {
  t: TType;
}

export function NetworkGlance({ t }: Props) {
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

        <NetworkParamsTable
          labels={{
            networkName: t("glanceNetworkName"),
            chainId: t("glanceChainId"),
            currency: t("glanceCurrency"),
            rpc: t("glanceRpc"),
            explorer: t("glanceExplorer"),
            copy: t("glanceCopy"),
            copied: t("glanceCopied"),
          }}
        />
      </div>
    </section>
  );
}
