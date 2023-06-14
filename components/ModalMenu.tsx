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
                    href='https://v4-sintrop.netlify.app'
                    target='_blank'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    App
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
                    className="bg-blue-600 px-5 py-2 font-bold text-white rounded-md"
                    href={router.locale === 'pt-BR' ? 
                        'https://docs.google.com/forms/d/e/1FAIpQLSfRP4MzGk86ikasBaLMGhsCvbZp67jlVW9ftIoHP0fVXoyRcw/viewform?usp=sf_link' : 
                        'https://docs.google.com/forms/d/e/1FAIpQLSf5Yc2df4j5J6qoCzRMp0EN8T3ACcWhaT-9BKnMBOvXxIcL7g/viewform?usp=sf_link'
                    }
                    target="_blank"
                >
                    Pré venda
                </Link>
            </div>
        </div>
    )
}