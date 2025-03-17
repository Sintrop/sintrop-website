import ImageSintrop from '@/public/assets/images/sintrop-logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import { TType } from '@/types/t';
import LanguageChanger from '../LanguageChanger';
import { Github } from 'lucide-react';
import DiscordIcon from '@/public/assets/icons/discord-white-icon.png';

interface Props {
    t: TType;
}
export function Footer({ t }: Props) {
    return (
        <footer className="bg-[#149954] py-10 lg:py-15">
            <div className="container mx-auto flex flex-col gap-5">
                <section className="flex flex-col gap-5 items-center justify-around md:flex-row">
                    <Link
                        className="flex items-center gap-3"
                        href="/"
                    >
                        <Image
                            src={ImageSintrop}
                            alt="Sintrop icon"
                            quality={100}
                            className="w-[150px] h-[80px] md:w-[180px] md:h-[65px] object-contain"
                        />
                    </Link>

                    <div className='flex justify-around w-full md:w-[30%]'>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-white hover:underline"
                            >
                                - {t('home')}
                            </Link>
                            <Link
                                href="/resources"
                                className="text-white hover:underline"
                            >
                                - {t('resources')}
                            </Link>
                            <Link
                                href="/tutorials"
                                className="text-white hover:underline"
                            >
                                - {t('tutorials')}
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:underline"
                            >
                                - {t('about')}
                            </Link>
                        </nav>

                        <div className='flex flex-col gap-5'>
                            <nav className="flex flex-col gap-5">
                                <Link
                                    href="https://github.com/sintrop"
                                    target='_blank'
                                    className="text-white flex items-center justify-center gap-3 hover:underline"
                                    rel="noopener noreferer"
                                >
                                    <Github size={25} color="white" />
                                    {t('github')}
                                </Link>

                                <Link
                                    href="https://github.com/sintrop"
                                    target='_blank'
                                    className="text-white flex items-center justify-center gap-3 hover:underline"
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
                            </nav>


                            <div className='flex flex-col items-center gap-1'>
                                <p className='text-white text-xs'>{t('language')}</p>
                                <LanguageChanger />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer >
    )
}