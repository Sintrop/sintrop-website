import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo-branco.png';
import { ModalMenu } from "./ModalMenu";

export function Header(){
    const [modalMenu, setModalMenu]= useState(false);

    return(
        <header className='flex flex-col w-[100%] justify-between lg:mb-36 lg:flex-row lg:w-[1000px]'>
            <div className='flex items-center justify-between'>
                <Image 
                    src={Logo}
                    quality={100}
                    alt='Logo da sintrop'
                    className='w-[150px] h-[60px] lg:w-[257px] lg:h-[98px]'
                />

                <button
                    onClick={() => setModalMenu(true)}
                >
                    <Image 
                        src={require('../assets/icon-menu.png')}
                        quality={100}
                        alt='Icon Menu'
                        className='w-[50px] h-[50px] lg:hidden'
                    />
                </button>
            </div>

            <nav className='hidden items-center gap-10 flex-wrap justify-center lg:flex'>
                <Link 
                    href='/'
                    className='font-bold text-white text-xl hover:text-green-400'
                >
                    Home
                </Link>

                <Link 
                    href='/sobre'
                    className='font-bold text-white text-xl hover:text-green-400'
                >
                    Sobre
                </Link>

                <Link 
                    href='/#comunidade'
                    className='font-bold text-white text-xl hover:text-green-400'
                >
                    Comunidade
                </Link>

                <Link 
                    href='https://v3-sintrop.netlify.app'
                    target='_blank'
                    className='font-bold text-white text-xl hover:text-green-400'
                >
                    App
                </Link>

                <Link 
                    href='/contato'
                    className='font-bold text-white text-xl hover:text-green-400'
                >
                    Contato
                </Link> 
            </nav>

            {modalMenu && (
                <ModalMenu
                    close={() => setModalMenu(false)}
                />
            )}
        </header>
    )
}