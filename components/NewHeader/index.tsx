import { useState, useEffect } from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../@/components/ui/dropdown-menu";
import { useTranslation, UseTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { SideMenu } from "./components/SideMenu";

export default function Header() {
    const router = useRouter();
    const { t, i18n } = useTranslation('common');
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(router.pathname.replace('/pt', '').replace('/en', ''));
    }, [router.pathname]);

    return (
        <header className="w-full h-20 bg-white border-b border-gray-200 shadow-xl flex items-center justify-center z-20">
            <div className="flex justify-between items-center w-full lg:max-w-[1024px] px-3 lg:px-0">
                <Image
                    alt='logo sintrop'
                    src={require('../../assets/logo.png')}
                    width={100}
                    height={100}
                    className="w-[150px] h-[50px] object-contain"
                />

                <nav className="hidden items-center gap-10 lg:flex">
                    <Link
                        className="font-semibold text-[#2b2b2b]"
                        href='/blog'
                    >
                        Blog
                    </Link>

                    <Link
                        className="font-semibold text-[#2b2b2b]"
                        href='#solutions'
                    >
                        {t('solucoes')}
                    </Link>

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="w-5 h-5 rounded-full bg-red-500"
                            >

                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="bg-white border rounded-md shadow-xl w-[150px]">
                            <DropdownMenuLabel>Language</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                asChild
                                className="w-full h-10"
                            >
                                <Link
                                    href={`http://localhost:3000/en${path.replace('en', '')}`}
                                >
                                    English
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                asChild
                                className="w-full h-10"
                            >
                                <Link
                                    href={`http://localhost:3000/pt${path.replace('pt', '')}`}
                                >
                                    Português
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </nav>

                <div className="flex lg:hidden">
                    <SideMenu/>
                </div>
            </div>
        </header>
    )
}