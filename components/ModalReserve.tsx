import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface Props{
    close: () => void;
    avaliables: number;
}

export function ModalReserve({close, avaliables}: Props){
    const router = useRouter();
    const [modalComunity, setModalComunity]= useState(false);
    const [quotes, setQuotes] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [question, setQuestion] = useState('');
    const {t}= useTranslation();

    useEffect(() => {
        
    },[]);

    return(
        <div 
            className="flex fixed w-screen h-screen items-center justify-center bg-black/90 z-10 m-auto"
        >
            <div className="flex flex-col justify-between p-5 lg:w-[500px] h-[470px] bg-white rounded-lg">
                <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-black text-center">{t('Reservar cota de investimento')}</p>
                </div>

                <form className="flex flex-col">
                    <label htmlFor="name">{t('Seu nome')}</label>
                    <input 
                        id='name'
                        placeholder={`${t('Digite seu nome aqui')}`}
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">{t('Seu email')}</label>
                    <input 
                        id='email'
                        placeholder={`${t('Digite seu email aqui')}`}
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                    />

                    <label htmlFor="tel">{t('Seu telefone')}</label>
                    <input 
                        id='tel'
                        placeholder={`${t('Digite seu telefone aqui')}`}
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        type='tel'
                    />

                    <label htmlFor="quotes">{t('Número de cotas')}</label>
                    <input 
                        id='quotes'
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={quotes}
                        onChange={(e) => setQuotes(Number(e.target.value))}
                        type='number'
                    />
                </form>

                <div className='flex items-center justify-between w-full'>
                    <button
                        className="px-3 py-2 rounded-lg bg-gray-300"
                        onClick={close}
                    >
                        {t('Cancelar')}
                    </button>
                    <button
                        className="px-3 py-2 rounded-lg bg-green-900 font-bold text-white"
                        onClick={() => {}}
                    >
                        {t('Reservar')}
                    </button>
                </div>
            </div>
        </div> 
    )
}