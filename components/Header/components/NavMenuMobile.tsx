import { TType } from "@/types/t";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import ImageSintrop from '@/public/assets/images/sintrop-logo-white.png';
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                            className="w-8 h-8 object-contain"
                        />
                    </SheetTitle>
                </Link>
            </SheetHeader>

            <nav className="flex flex-col gap-5 mt-10">
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
            </nav>
        </SheetContent>
    )
}