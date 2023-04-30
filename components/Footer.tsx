import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo-branco.png';
import { useTranslation } from 'next-i18next';

export function Footer(){
    const {t} = useTranslation();

    return(
        <footer className='flex flex-col gap-10 px-5 w-[100vw] items-center bg-[#155E07] py-10'>
            <div className='flex items-center gap-3'>
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
            <Image
                src={Logo} 
                alt='Logo sintrop'
                className='w-[257px] h-[98px] object-cover mt-10'
            />
            <p className='text-white text-lg text-center lg:w-[800px] mt-[-40px]'>
                
            </p> 
            <nav className='hidden items-center gap-10 flex-wrap justify-center lg:flex'>
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
        </footer>
    )
}