import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo-branco.png';

export function Footer(){
    return(
        <footer className='flex flex-col gap-10 px-5 w-[100vw] items-center bg-[#68a021] py-10'>
            <div className='flex items-center gap-3'>
                <a href='https://www.linkedin.com/company/sintrop-sustainability/' target='_blank'>
                    <Image
                        src={require('../assets/ICON-LINKEDIN.png')} 
                        alt='Logo sintrop'
                        className='w-[50px] h-[50px] object-cover'
                    />
                </a>
                <Image
                    src={require('../assets/ICON-WHATS.png')} 
                    alt='Logo sintrop'
                    className='w-[50px] h-[50px] object-cover'
                />
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
            <p className='text-white text-xl text-center lg:w-[800px] mt-[-40px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p> 
            <nav className='hidden items-center gap-10 flex-wrap justify-center lg:flex'>
                <Link 
                    href='/'
                    className='font-bold text-white text-xl hover:text-green-300'
                >
                    Home
                </Link>

                <Link 
                    href='/sobre'
                    className='font-bold text-white text-xl'
                >
                    Sobre
                </Link>

                <Link 
                    href='/app'
                    className='font-bold text-white text-xl'
                >
                    App
                </Link>

                <Link 
                    href='/contato'
                    className='font-bold text-white text-xl'
                >
                    Contato
                </Link> 
            </nav>
        </footer>
    )
}