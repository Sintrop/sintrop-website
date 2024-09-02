import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../../../@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import { TiThMenu } from "react-icons/ti";

export function SideMenu() {
    const { t } = useTranslation();

    return (
        <Sheet>
            <SheetTrigger>
                <TiThMenu size={25} color='#2b2b2b' />
            </SheetTrigger>

            <SheetContent className='w-[300px] absolute right-0 top-0 bg-white p-5 flex flex-col gap-5'>
                <nav className="flex flex-col gap-5 mt-14">
                    <SheetClose asChild>
                        <Link
                            className="font-semibold text-[#2b2b2b]"
                            href='/blog'
                        >
                            Blog
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link
                            className="font-semibold text-[#2b2b2b]"
                            href='#solutions'
                        >
                            {t('solucoes')}
                        </Link>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    )
}