import { ReleaseProps } from "@/types/github";
import { TType } from "@/types/t"
import { format } from "date-fns";
import { SystemItemDownload } from "./SystemItemDownload";

interface Props {
    t: TType;
    release: ReleaseProps;
    latest?: boolean;
}

export function ReleaseItem({ t, release, latest }: Props) {
    return (
        <div className="p-5 rounded-md bg-green-2 w-full flex flex-wrap justify-between">
            <div className="flex flex-col w-full md:max-w-[50%]">
                <div className="flex items-center gap-3">
                    <h4 className="text-2xl">{release?.name}</h4>

                    {latest && (
                        <div className="px-4 py-1 border border-green-1 rounded-xl">
                            <p className="text-xs text-green-1">{t('latest')}</p>
                        </div>
                    )}
                </div>
                <p className="text-gray-500 text-xs">{format(new Date(release?.created_at), "yyyy/MM/dd - kk:mm")}</p>
                <p className="font-[akatab] text-sm mt-3 md:max-w-[80%]">{release?.body}</p>
            </div>

            <div className="flex flex-col w-full md:max-w-[50%] mt-10 md:mt-0">
                <h4 className="text-xl text-center lg:text-start">{t('download')}</h4>
                <div className="flex flex-wrap gap-5 justify-center mt-5 lg:mt-1 lg::justify-start">
                    <SystemItemDownload
                        t={t}
                        assets={release.assets}
                        system="windows"
                        pageReleaseUrl={release.html_url}
                    />

                    <SystemItemDownload
                        t={t}
                        assets={release.assets}
                        system="linux"
                        pageReleaseUrl={release.html_url}
                    />

                    <SystemItemDownload
                        t={t}
                        assets={release.assets}
                        system="macos"
                        pageReleaseUrl={release.html_url}
                    />

                    <SystemItemDownload
                        t={t}
                        assets={release.assets}
                        system="allVersions"
                        pageReleaseUrl={release.html_url}
                    />
                </div>
            </div>
        </div>
    )
}