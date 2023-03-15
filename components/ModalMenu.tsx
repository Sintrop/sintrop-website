import { useState } from "react";
import Link from "next/link";
import { ModalComunity } from "./ModalComunity";

interface Props{
    close: () => void;
}

export function ModalMenu({close}: Props){
    const [modalComunity, setModalComunity]= useState(false);

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
                    Home
                </Link>

                <Link 
                    href='/sobre'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    Sobre
                </Link>

                <Link 
                    href='/#comunidade'
                    onClick={close}
                    className='font-bold h-12 text-white text-lg hover:text-green-400'
                >
                    Comunidade
                </Link>

                <Link 
                    href='https://v3-sintrop.netlify.app'
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
                    Contato
                </Link> 
            </div>
        </div>
    )
}