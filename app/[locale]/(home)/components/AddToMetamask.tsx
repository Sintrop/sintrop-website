"use client";
import MMIcon from "@/public/assets/icons/metamask.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function AddToMetamask() {
  const { t } = useTranslation();

  async function handleAddChain() {
    if (typeof window !== "undefined") {
      if (!window.ethereum) return;

      const networkParams = {
        chainId: "0x3D171",
        chainName: "Sintrop",
        nativeCurrency: {
          name: "SINTROP",
          symbol: "SIN",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.sintrop.com"],
        blockExplorerUrls: ["https://explorer.sintrop.com"],
      };

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [networkParams],
      });
    }
  }

  if (typeof window !== "undefined") {
    if (!window.ethereum) {
      return <div />;
    }
  }

  return (
    <button
      onClick={handleAddChain}
      className="w-full border-2 border-white gap-3 h-[50px] md:h-[60px] rounded-md text-white font-semibold md:w-[220px] flex items-center justify-center hover:cursor-pointer hover:bg-white hover:text-black duration-200"
    >
      <Image
        alt="metamask icon"
        src={MMIcon}
        width={40}
        height={40}
        quality={100}
        objectFit="contain"
      />

      {t("addToMetamask")}
    </button>
  );
}
