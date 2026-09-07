import { ReleaseProps } from "@/types/github";
import { TType } from "@/types/t";
import { format } from "date-fns";
import { SystemItemDownload } from "./SystemItemDownload";
import Link from "next/link";

interface Props {
  t: TType;
  release: ReleaseProps;
  latest?: boolean;
  releaseType: "go-sintrop" | "sintrop-core";
}

export function ReleaseItem({ t, release, latest, releaseType }: Props) {
  return (
    <div className="flex w-full flex-wrap justify-between gap-6 rounded-2xl border border-line bg-surface p-6">
      <div className="flex w-full flex-col md:max-w-[50%]">
        <div className="flex items-center gap-3">
          <h4 className="text-xl">{release?.name}</h4>

          {latest && (
            <span className="rounded-full border border-brand px-3 py-0.5 text-xs font-medium text-brand-deep">
              {t("latest")}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-ink-soft">
          {format(new Date(release?.created_at), "yyyy/MM/dd - kk:mm")}
        </p>
        <p className="mt-3 text-sm text-ink-soft md:max-w-[80%]">
          {release?.body}
        </p>
      </div>

      <div className="flex flex-col w-full md:max-w-[50%] mt-10 md:mt-0">
        <h4 className="text-xl text-center lg:text-start">{t("download")}</h4>
        <div className="flex flex-wrap gap-5 justify-center mt-5 lg:mt-1 lg:justify-start">
          <SystemItemDownload
            t={t}
            assets={release.assets}
            system="windows"
            releaseType={releaseType}
          />

          <SystemItemDownload
            t={t}
            assets={release.assets}
            system="linux"
            releaseType={releaseType}
          />

          {releaseType === "go-sintrop" && (
            <SystemItemDownload
              t={t}
              assets={release.assets}
              system="macos"
              releaseType={releaseType}
            />
          )}

          {releaseType === "sintrop-core" && (
            <SystemItemDownload
              t={t}
              assets={release.assets}
              system="macosarm"
              releaseType={releaseType}
            />
          )}
        </div>

        <Link
          href={release.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-center text-sm font-semibold text-brand-deep hover:underline"
        >
          {t("clickHereToSeeAllVersions")}
        </Link>
      </div>
    </div>
  );
}
