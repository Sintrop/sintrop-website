import { TType } from "@/types/t"
import { AppsProps, appsList, AppsName } from "./appsList";
import Link from "next/link";
import Image from "next/image";

interface Props {
    t: TType;
    directLink?: boolean;
    app: AppsName;
}

export function AppLink({ t, directLink, app }: Props) {
    const appData = appsList[app];

    if (directLink) {
        return (
            <Link
                target="_blank"
                href={appData?.linkApp}
            >
                <ContentLink appData={appData} t={t} />
            </Link>
        );
    }

    return (
        <ContentLink t={t} appData={appData} />
    )
}

interface ContentLinkProps {
    t: TType;
    appData: AppsProps;
}
function ContentLink({ appData, t }: ContentLinkProps) {
    return (
        <div className="flex rounded-md bg-green-2 gap-4 pr-5 w-full lg:max-w-[400px] flex-1">
            <div className="w-20 h-20 rounded-md bg-green-3 items-center justify-center flex overflow-hidden p-2">
                <Image
                    alt="icon app"
                    src={appData?.image}
                    className="w-full h-full object-contain"
                    quality={100}
                    width={100}
                    height={100}
                />
            </div>

            <div className="flex flex-col gap-1 pt-2">
                <h4 className="text-xl">{t(appData?.title)}</h4>
                <div className="flex flex-wrap gap-3">
                    {appData?.mainnet ? (
                        <div className="rounded-md py-1 px-2 border border-green-3 w-fit">
                            <p className="text-green-3 text-xs">{t('mainnet')}</p>
                        </div>
                    ) : (
                        <div className="rounded-md py-1 px-2 border border-orange-400 w-fit">
                            <p className="text-orange-400 text-xs">{t('testnet')}</p>
                        </div>
                    )}

                    {appData?.live ? (
                        <div className="rounded-3xl py-1 px-3 bg-red-500 w-fit flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white"/>
                            <p className="text-white text-xs">{t('live')}</p>
                        </div>
                    ) : (
                        <div className="rounded-3xl py-1 px-3 bg-zinc-400 w-fit">
                            <p className="text-white text-xs">{t('commingSoon')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}