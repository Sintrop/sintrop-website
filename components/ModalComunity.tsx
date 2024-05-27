import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface Props{
    close: () => void;
    mobile?: boolean;
}

export function ModalComunity({close, mobile}: Props){
    const {t} = useTranslation();

    return(
        <div onClick={close} className="flex w-screen h-screen top-0 left-0 absolute">
            <div className={`w-40 h-62 gap-1 bg-white flex flex-col rounded-lg ml-[-20px] top-12 right-[46%] mt-3 ${mobile ? 'fixed' : 'absolute'}`}>
                <Link 
                    href='/produtor'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Ícone do produtor'
                        src={require('../assets/produtor.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">{t('Produtor')}</p>
                </Link>

                <Link 
                    href='/inspetor'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Ícone do ativista'
                        src={require('../assets/ativista.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">{t('Inspetor')}</p>
                </Link>

                <Link 
                    href='/pesquisador'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/transparent.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">{t('Pesquisador')}</p>
                </Link>

                <Link 
                    href='https://pages.sintrop.com/apoiador'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                    target="_blank"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/investidor.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">{t('Investidor')}</p>
                </Link>

                <button 
                    onClick={close}
                    className="flex w-[100%] h-10 items-center justify-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <p className="font-bold text-gray-600">{t('Fechar')}</p>
                </button>
            </div>
        </div>
    )
}