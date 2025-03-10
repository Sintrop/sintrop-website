import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import ImageSintrop from '@/public/assets/images/sintrop-logo-white.png';
import { TType } from "@/types/t";
import { Menu } from "lucide-react";
import { SheetTrigger, Sheet } from "../ui/sheet";
import { NavMenuMobile } from "./components/NavMenuMobile";

interface Props {
    t: TType;
}
export function Header({ t }: Props) {
    return (
        <header
            className="container mx-auto py-10 flex items-center justify-between px-5"
        >
            <Link
                className="flex items-center gap-3"
                href="/"
            >
                <h1
                    className="text-white font-bold uppercase text-sm md:text-xl"
                    title="Sintrop"
                >
                    <Image
                        src={ImageSintrop}
                        alt="Regeneration credit icon"
                        quality={100}
                        className="w-[120px] h-[70px] md:w-[180px] md:h-[65px] object-contain"
                    />
                </h1>
            </Link>

            <section className="items-center gap-5 hidden lg:flex">
                <nav className="flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-white"
                    >
                        {t('home')}
                    </Link>
                    <Link
                        href="/resources"
                        className="text-white"
                    >
                        {t('solutions')}
                    </Link>
                    <Link
                        href="/resources"
                        className="text-white"
                    >
                        {t('about')}
                    </Link>
                </nav>

                <Link
                    href='https://apps.sintrop.com'
                    target="_blank"
                    className="px-10 h-[40px] flex items-center justify-center rounded-md bg-green-1 text-white text-semibold"
                >
                    {t('apps')}
                </Link>
            </section>

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu size={25} color='white'/>
                    </SheetTrigger>
                    <NavMenuMobile t={t} />
                </Sheet>
            </div>
        </header>
    )
}