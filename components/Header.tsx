import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoBranco from '../assets/logo-branco.png';
import { useRouter } from "next/router";
import { ModalMenu } from "./ModalMenu";
import { ModalComunity } from "./ModalComunity";
import { useTranslation } from 'next-i18next';

interface Props{
    blog?: boolean
}

export function Header({blog}: Props){
    const router = useRouter();
    const [modalMenu, setModalMenu]= useState(false);
    const [modalComunity, setModalComunity]= useState(false);
    const [headerTop, setHeaderTop]= useState(false);
    const {t} = useTranslation();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 10){
                setHeaderTop(true);
            }else{
                setHeaderTop(false);
            }
        })
    },[]);

    return(
        <header className={`flex flex-col w-full items-center justify-center py-2 lg:fixed bg-[#155A07] ${!blog ? 'lg:mb-16 lg:flex-row' : 'lg:flex-row items-center gap-2'} ${!headerTop && 'lg:mt-7'} duration-300`}>
            <div className='flex items-center justify-between lg:w-[1000px]'>
            <div className='flex w-screen lg:w-auto px-2 lg:px-0 items-center justify-between lg:mt-2'>
                    <Link
                        href='/'
                    >
                        <Image 
                            src={LogoBranco}
                            quality={100}
                            alt={t('Logo da sintrop')}
                            className={`w-[160px] h-[60px] ${blog ? 'lg:w-[180px] lg:h-[70px]' : 'lg:w-[160px]'} object-cover`}
                        />
                    </Link>

                    <button
                        onClick={() => setModalMenu(true)}
                    >
                        <Image 
                            src={require('../assets/icon-menu.png')}
                            quality={100}
                            alt='Icon Menu'
                            className='w-[40px] h-[40px] lg:hidden'
                        />
                    </button>
            </div>
            

            <nav className='hidden items-center gap-10 flex-wrap justify-center lg:flex'>
                <div>
                    <button 
                        onClick={() => setModalComunity(!modalComunity)}
                        className={`font-bold text-xl hover:text-green-400 text-white`}
                        onMouseEnter={() => {
                            setModalComunity(true)
                        }}
                    >
                        {t('Comunidade')}
                    </button>

                    {modalComunity && (
                        <ModalComunity
                            close={() => setModalComunity(false)}
                        />
                    )}
                </div>

                <Link 
                    href='/contato'
                    className={`font-bold text-xl hover:text-green-400 text-white`}
                >
                    {t('Contato')}
                </Link>

                <Link 
                    href='/blog'
                    className={`font-bold text-xl hover:text-green-400 text-white`}
                >
                    {t('Blog')}
                </Link> 

                <Link 
                    href='/sobre'
                    className={`font-bold text-xl hover:text-green-400 text-white`}
                >
                    {t('Sobre')}
                </Link>

                <Link
                    className='w-28 h-9 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                    href='https://v4-sintrop.netlify.app'
                    target="_blank"
                >
                    App V4
                </Link>
            </nav>
            </div>

            {modalMenu && (
                <ModalMenu
                    close={() => setModalMenu(false)}
                />
            )}
        </header>
    )
}