"use client";

import MMIcon from "@/public/assets/icons/metamask.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SINTROP_MAINNET } from "@/lib/network";

interface Props {
  /** Light-background variant (solid brand button) vs. hero variant (outline). */
  networkPage?: boolean;
}

export function AddToMetamask({ networkPage }: Props) {
  const { t } = useTranslation();
  const [hasProvider, setHasProvider] = useState(false);

  useEffect(() => {
    setHasProvider(typeof window !== "undefined" && !!window.ethereum);
  }, []);

  async function handleAddChain() {
    if (typeof window === "undefined" || !window.ethereum) return;

    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: SINTROP_MAINNET.chainIdHex,
          chainName: SINTROP_MAINNET.name,
          nativeCurrency: {
            name: SINTROP_MAINNET.currencyName,
            symbol: SINTROP_MAINNET.currencySymbol,
            decimals: SINTROP_MAINNET.decimals,
          },
          rpcUrls: [SINTROP_MAINNET.rpcUrl],
          blockExplorerUrls: [SINTROP_MAINNET.explorerUrl],
        },
      ],
    });
  }

  // Only offer the one-click flow to visitors who already run a wallet
  // extension. Mobile users connect from inside their wallet's browser.
  if (!hasProvider) return null;

  return (
    <button
      onClick={handleAddChain}
      className={
        networkPage
          ? "inline-flex h-12 items-center justify-center gap-3 rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-deep"
          : "inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/30 px-6 font-semibold text-white transition-colors hover:bg-white/10"
      }
    >
      <Image
        alt=""
        src={MMIcon}
        width={22}
        height={22}
        quality={100}
        className="object-contain"
      />
      {t("addToMetamask")}
    </button>
  );
}
