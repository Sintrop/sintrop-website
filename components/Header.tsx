import { useState } from "react";
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
    const {t} = useTranslation();

    return(
        <header className={`flex flex-col w-[100%] justify-between lg:w-[1000px] ${!blog ? 'lg:mb-20 lg:flex-row' : 'lg:flex-row items-center gap-2'}`}>
            
                <div className='flex w-full lg:w-auto px-2 items-center justify-between'>
                    <Link
                        href='/'
                    >
                        <Image 
                            src={LogoBranco}
                            quality={100}
                            alt={t('Logo da sintrop')}
                            className={`w-[150px] h-[60px] ${blog ? 'lg:w-[180px] lg:h-[70px]' : 'lg:w-[257px] lg:h-[98px]'}`}
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
                <Link 
                    href='/sobre'
                    className={`font-bold text-xl hover:text-green-400 text-white`}
                >
                    {t('Sobre')}
                </Link>

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
                    href='https://v3-sintrop.netlify.app'
                    target='_blank'
                    className={`font-bold text-xl hover:text-green-400 text-white`}
                >
                    App
                </Link>

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

                <button
                    className="bg-blue-600 px-5 py-2 font-bold text-white rounded-md"
                >
                    Pré venda
                </button>
            </nav>

            {modalMenu && (
                <ModalMenu
                    close={() => setModalMenu(false)}
                />
            )}
        </header>
    )
}