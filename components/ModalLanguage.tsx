import Link from "next/link";
import Image from "next/image";
import { useTranslation, i18n } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props{
    close: () => void;
    mobile?: boolean;
}

export function ModalLanguage({close, mobile}: Props){
    const router = useRouter();
    const {t} = useTranslation();
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(router.pathname)
    },[]);

    return(
        <div onClick={close} className="flex w-screen h-screen top-0 left-0 absolute">
            <div className={`w-40 h-62 gap-1 bg-white flex flex-col rounded-lg ml-[-20px] top-14 right-[25%] mt-3 ${mobile ? 'fixed' : 'absolute'}`}>
                <Link 
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                    href={`http://localhost:3000/pt-BR${path}`}
                >
                    <Image
                        alt='Ícone do brasil'
                        src={require('../public/assets/icon-br.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Português</p>
                </Link>

                <Link 
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                    href={`http://localhost:3000/en-US${path}`}
                >
                    <Image
                        alt='Ícone da inglaterra'
                        src={require('../public/assets/icon-brit.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">English</p>
                </Link>
            </div>
        </div>
    )
}