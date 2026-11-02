import { AssetReleaseProps } from "@/types/github";
import Link from "next/link";
import WindowsIcon from "@/public/assets/icons/win.png";
import LinuxIcon from "@/public/assets/icons/linux.png";
import MacosIcon from "@/public/assets/icons/macos.png";
import Image from "next/image";
import { TType } from "@/types/t";

interface Props {
  system: SystemNames;
  assets: AssetReleaseProps[];
  t: TType;
  releaseType: "go-sintrop" | "sintrop-core";
}
export function SystemItemDownload({ system, assets, t, releaseType }: Props) {
  const systemData = systemToData[system];

  let linkDownload = "";

  const filterAssets = assets.find(
    (item) =>
      item.name.includes(systemData?.archiveIncludeName[releaseType]) &&
      !item.name.includes("sha256")
  );
  if (filterAssets) {
    linkDownload = filterAssets.browser_download_url;
  }

  return (
    <Link
      href={linkDownload}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[150px] w-[120px] flex-col items-center justify-center rounded-xl bg-brand-forest p-2 transition-opacity hover:opacity-90"
    >
      <Image
        alt="icon operation system"
        src={systemData?.image}
        height={50}
        width={50}
      />

      <p className="text-white mt-3 text-center">{t(systemData?.label)}</p>
      {releaseType === "sintrop-core" && (
        <>
          <p className="text-gray-300 text-xs mt-[-5px] text-center">
            {system === "macosarm" && "arm version"}
            {system === "macosx86" && "intel version"}
          </p>
        </>
      )}

      <p className="text-center text-gray-300 text-xs">
        {t("clickToDownload")}
      </p>
    </Link>
  );
}

const systemToData = {
  windows: {
    label: "windows",
    image: WindowsIcon,
    archiveIncludeName: {
      "go-sintrop": "go-sintrop-alltools-win64",
      "sintrop-core": ".exe",
    },
  },
  linux: {
    label: "linux/ubuntu",
    image: LinuxIcon,
    archiveIncludeName: {
      "go-sintrop": "go-sintrop-alltools-linux",
      "sintrop-core": ".snap",
    },
  },
  macos: {
    label: "macos",
    image: MacosIcon,
    archiveIncludeName: {
      "go-sintrop": "go-sintrop-alltools-osx",
      "sintrop-core": ".dmg",
    },
  },
  macosarm: {
    label: "macos",
    image: MacosIcon,
    archiveIncludeName: {
      "go-sintrop": "go-sintrop-alltools-osx",
      "sintrop-core": ".dmg",
    },
  },
  macosx86: {
    label: "macos",
    image: MacosIcon,
    archiveIncludeName: {
      "go-sintrop": "go-sintrop-alltools-osx",
      "sintrop-core": ".dmg",
    },
  },
};

type SystemNames = keyof typeof systemToData;
