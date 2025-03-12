import ImageSintrop from '@/public/assets/images/sintrop-logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import { TType } from '@/types/t';
import LanguageChanger from '../LanguageChanger';

interface Props {
    t: TType;
}
export function Footer({ t }: Props) {
    return (
        <footer className="bg-[#149954] py-10 lg:py-20">
            <div className="container mx-auto flex flex-col gap-5">
                <section className="flex flex-col gap-5 items-center justify-around border-b border-white pb-10 lg:flex-row">
                    <Link
                        className="flex items-center gap-3"
                        href="/"
                    >
                        <Image
                            src={ImageSintrop}
                            alt="Sintrop icon"
                            quality={100}
                            className="w-[200px] h-[100px] md:w-[180px] md:h-[65px] object-contain"
                        />
                    </Link>

                    <nav className="flex flex-col gap-5">
                        <Link
                            href="/"
                            className="text-white hover:underline"
                        >
                            - {t('home')}
                        </Link>
                    </nav>

                    <div className='flex flex-col gap-5'>
                        <LanguageChanger />
                    </div>
                </section>

                <p className='text-white text-center mt-5'>Copyright © Sintrop</p>
            </div>
        </footer >
    )
}