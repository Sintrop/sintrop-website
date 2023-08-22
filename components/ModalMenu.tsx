import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface Props{
    close: () => void;
}

export function ModalMenu({close}: Props){
    const router = useRouter();
    const [modalComunity, setModalComunity]= useState(false);
    const {t}= useTranslation();

    return(
        <div 
            onClick={close}
            className="flex fixed top-0 left-0 w-[100vw] h-[100vh] items-center justify-center bg-[rgba(0,0,0,0.9)] z-10"
        >
            <div className="flex flex-col items-center gap-5">
                <Link 
                    href='/'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    {t('Página Inicial')}
                </Link>

                <Link 
                    href='/sobre'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    {t('Sobre')}
                </Link>

                <Link 
                    href='/#comunidade'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    {t('Comunidade')}
                </Link>

                <Link 
                    href='/contato'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    {t('Contato')}
                </Link>

                <Link 
                    href='/blog'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    {t('Blog')}
                </Link> 

                <Link
                    className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white font-bold flex items-center justify-center'
                    href='https://v4-sintrop.netlify.app'
                    target="_blank"
                >
                    {t('Acessar Plataforma')}
                </Link>
            </div>
        </div>
    )
}