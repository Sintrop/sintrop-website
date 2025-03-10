import { TType } from "@/types/t"
import { AppsProps, appsList, AppsName } from "./appsList";
import Link from "next/link";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Link as LinkIcon } from "lucide-react";
import {format} from 'date-fns';

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
                rel="noopener noreferer"
                href={appData?.linkApp}
            >
                <ContentLink appData={appData} t={t} />
            </Link>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild className="hover:cursor-pointer">
                <ContentLink t={t} appData={appData} />
            </DialogTrigger>
            <DialogContent
                className="flex flex-col p-3"
            >
                <div className="flex gap-5">
                    <div className="w-[130px] h-[130px] flex items-center justify-center p-3 rounded-md bg-green-3 overflow-hidden">
                        <Image
                            alt="icon app"
                            src={appData?.image}
                            className="w-full h-full object-contain"
                            quality={100}
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className="flex flex-col py-5">
                        <DialogTitle className="text-xl">{t(appData?.title)}</DialogTitle>
                        <DialogDescription className="">{t(appData?.shortDescription)}</DialogDescription>
                        <p className="text-xs mt-3 text-gray-400">{t('lauchedAt')}</p>
                        <p className="text-sm text-text-subtitle">{format(new Date(appData?.createdAt), 'MMM dd, yyyy')}</p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mt-3">links</p>
                <div className="flex flex-wrap gap-3">
                    {appData?.links.map(link => (
                        <LinkItem
                            href={link.href}
                            title={link.title}
                            key={link?.href}
                        />
                    ))}
                </div>

                <p className="mt-3">{t(appData?.longDescription)}</p>
            </DialogContent>
        </Dialog>
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
                <h4 className="md:text-xl">{t(appData?.title)}</h4>
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
                            <div className="w-2 h-2 rounded-full bg-white" />
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

interface LinkItemProps{
    title: string;
    href: string;
}
function LinkItem({href, title}: LinkItemProps){
    return(
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferer"
            className="px-3 h-8 rounded-md bg-blue-primary flex items-center justify-center gap-2"
        >
            <LinkIcon color="white" size={20}/>
            <p className="text-white">{title}</p>
        </Link>
    )
}