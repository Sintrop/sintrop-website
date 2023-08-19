import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { api } from "../src/services/api";

interface Props{
    close: () => void;
    user: string;
}

export function ModalRegister({close, user}: Props){
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [modalComunity, setModalComunity]= useState(false);
    const [typeUser, setTypeUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [question, setQuestion] = useState('');
    const {t}= useTranslation();

    useEffect(() => {
        if(user === 'produtor'){
            setTypeUser('produtor');
        }
        if(user === 'inspetor'){
            setTypeUser('inspetor');
        }
        if(user === 'pesquisador'){
            setTypeUser('pesquisador');
        }
    },[]);

    async function handleRequestRegister(){
        if(typeUser === ''){
            return;
        }
        if(!name.trim()){
            return;
        }
        if(!email.trim()){
            return;
        }
        if(!tel.trim()){
            return;
        }
        if(!question.trim()){
            return;
        }

        try{
            setLoading(true);
            await api.post('/request-register', {
                name,
                email,
                tel,
                question,
                typeUser
            })
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    return(
        <div 
            className="flex fixed w-screen h-screen items-center justify-center bg-black/90 z-10 m-auto"
        >
            <div className="flex flex-col justify-between p-5 lg:w-[500px] h-[470px] bg-white rounded-lg">
                <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-black text-center">{t('Cadastre-se')}</p>
                </div>

                <form className="flex flex-col">
                    <label htmlFor="typeUser">{t('Como você deseja se cadastrar?')}</label>
                    <select 
                        id='typeUser'
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={typeUser}
                        onChange={(e) => setTypeUser(e.target.value)}
                    >   
                        <option value="" defaultValue>{t('Selecione uma opção')}</option>
                        <option value="produtor">{t('Produtor')}</option>
                        <option value="inspetor">{t('Inspetor')}</option>
                        <option value="pesquisador">{t('Pesquisador')}</option>
                    </select>

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

                    <label htmlFor="pergunta">{t('Qual a sua motivação para lutar pela regeneração do Planeta?')}</label>
                    <input 
                        id='pergunta'
                        placeholder={`${t('Digite aqui sua resposta')}`}
                        className="bg-gray-300 rounded-lg px-3 py-2"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        type='tel'
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
                        onClick={handleRequestRegister}
                    >
                        {t('Cadastrar')}
                    </button>
                </div>
            </div>
        </div> 
    )
}