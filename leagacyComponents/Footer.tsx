import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo-branco.png';
import { useTranslation } from 'next-i18next';

export function Footer(){
    const {t} = useTranslation();

    return(
        <footer className='flex w-[100%] justify-center bg-[#155E07] py-5'>
            <div className='flex flex-col lg:flex-row lg:w-[1000px] justify-between items-center'>
                <Image
                    src={Logo} 
                    alt='Logo sintrop'
                    className='w-[200px] h-[60px] object-contain'
                />
                <nav className='items-center gap-4 flex-wrap justify-center flex'>
                    <Link 
                        href='/'
                        className='font-bold text-white text-lg hover:text-green-300'
                    >
                        {t('Página Inicial')}
                    </Link>

                    <Link 
                        href='/sobre'
                        className='font-bold text-white text-lg'
                    >
                        {t('Sobre')}
                    </Link>

                    <Link 
                        href='/app'
                        className='font-bold text-white text-lg'
                    >
                        App
                    </Link>

                    <Link 
                        href='/contato'
                        className='font-bold text-white text-lg'
                    >
                        {t('Contato')}
                    </Link> 
                </nav>
                <div className='flex items-center gap-3 mt-4 lg:mt-0'>
                    <a href='https://www.linkedin.com/company/sintrop-sustainability/' target='_blank'>
                        <Image
                            src={require('../assets/ICON-LINKEDIN.png')} 
                            alt='Logo sintrop'
                            className='w-[50px] h-[50px] object-cover'
                        />
                    </a>
                    <Link
                        href='https://api.whatsapp.com/send/?phone=%2B5548988133635&text&type=phone_number&app_absent=0'
                        target='_blank'
                    >
                        <Image
                            src={require('../assets/ICON-WHATS.png')} 
                            alt='Logo sintrop'
                            className='w-[50px] h-[50px] object-cover'
                        />
                    </Link>
                    <a href='https://www.instagram.com/sintrop.sustentabilidade/' target='_blank'>
                        <Image
                            src={require('../assets/ICON-INSTAGRAM.png')} 
                            alt='Logo sintrop'
                            className='w-[50px] h-[50px] object-cover'
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}