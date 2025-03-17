import { TType } from "@/types/t";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import ImageSintrop from '@/public/assets/images/sintrop-logo-gray.png';
import Link from "next/link";
import { Github } from "lucide-react";
import DiscordIcon from '@/public/assets/icons/discord-white-icon.png';

interface Props {
    t: TType;
}
export function NavMenuMobile({ t }: Props) {
    return (
        <SheetContent className="p-5">
            <SheetHeader className="">
                <Link
                    className="flex justify-start items-center gap-3 w-[150px]"
                    href="/"
                >
                    <SheetTitle>
                        <Image
                            src={ImageSintrop}
                            alt="Sintrop icon"
                            quality={100}
                            className="object-contain"
                            width={120}
                            height={50}
                        />
                    </SheetTitle>
                </Link>
            </SheetHeader>

            <nav className="flex flex-col gap-5">
                <Link
                    href="/"
                    className="text-black underline"
                >
                    - {t('home')}
                </Link>
                <Link
                    href="/resources"
                    className="text-black underline"
                >
                    - {t('resources')}
                </Link>
                <Link
                    href="/tutorials"
                    className="text-black underline"
                >
                    - {t('tutorials')}
                </Link>
                <Link
                    href="/about"
                    className="text-black underline"
                >
                    - {t('about')}
                </Link>
            </nav>

            <div className="flex flex-col gap-5 mt-5">
                <Link
                    href="https://github.com/sintrop"
                    target='_blank'
                    className="text-white flex items-center justify-center gap-3 bg-black hover:underline py-2 rounded-md"
                    rel="noopener noreferer"
                >
                    <Github size={25} color="white" />
                    {t('github')}
                </Link>

                <Link
                    href="https://discord.gg/dAGBBFnTM7"
                    target='_blank'
                    className="text-white flex items-center justify-center gap-3 bg-[#738ADB] py-2 rounded-md hover:underline"
                    rel="noopener noreferer"
                >
                    <Image
                        src={DiscordIcon}
                        alt="Discord icon"
                        quality={100}
                        width={25}
                        height={25}
                    />
                    {t('discord')}
                </Link>
            </div>
        </SheetContent>
    )
}