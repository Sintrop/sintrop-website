import { CopyButton } from "@/components/Copy/CopyButton";
import { SINTROP_MAINNET } from "@/lib/network";

export interface NetworkParamsLabels {
  networkName: string;
  chainId: string;
  currency: string;
  rpc: string;
  explorer: string;
  copy: string;
  copied: string;
}

interface Props {
  labels: NetworkParamsLabels;
  className?: string;
}

/**
 * The canonical connection details for the Sintrop mainnet, with a copy
 * control on every value. Shared by the home page, /network and /build.
 */
export function NetworkParamsTable({ labels, className = "" }: Props) {
  const rows = [
    { label: labels.networkName, value: SINTROP_MAINNET.name },
    { label: labels.chainId, value: String(SINTROP_MAINNET.chainId) },
    { label: labels.currency, value: SINTROP_MAINNET.currencySymbol },
    { label: labels.rpc, value: SINTROP_MAINNET.rpcUrl },
    { label: labels.explorer, value: SINTROP_MAINNET.explorerUrl },
  ];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
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
              label={labels.copy}
              copiedLabel={labels.copied}
              iconOnly
              className="shrink-0 text-ink-soft hover:text-brand-deep"
            />
          </span>
        </div>
      ))}
    </div>
  );
}
