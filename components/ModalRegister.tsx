import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { api } from "../src/services/api";
import { ToastContainer, toast } from "react-toastify";
import {IoClose} from 'react-icons/io5';
import {BsFillSendCheckFill} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css'

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
    const [success, setSuccess] = useState(false);
    const {t}= useTranslation();

    useEffect(() => {
        setSuccess(false);
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
        if(loading){
            return;
        }
        if(typeUser === ''){
            toast.error(`${t('Escolha um tipo de usuário')}`)
            return;
        }
        if(!name.trim()){
            toast.error(`${t('Digite seu nome')}`)
            return;
        }
        if(!email.trim()){
            toast.error(`${t('Digite seu email para contato')}`)
            return;
        }
        if(!tel.trim()){
            toast.error(`${t('Digite seu telefone para contato')}`)
            return;
        }
        if(!question.trim()){
            toast.error(`${t('Responda a pergunta')}`)
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
            setSuccess(true)
        }catch(err){
            console.log(err);
            toast.error(`${t('Algo deu errado, tente novamente')}!`)
        }finally{
            setLoading(false);
        }
    }

    return(
        <div 
            className="flex fixed w-screen h-screen items-center justify-center bg-black/90 z-10 m-auto"
        >
            <div className="flex flex-col justify-between p-5 lg:w-[500px] h-[500px] bg-white rounded-lg">
                <div className="flex items-center justify-between w-full">
                    <div className="w-[25px]"/>
                    <p className="font-bold text-black text-center">{t('Cadastre-se')}</p>
                    <button onClick={close}>
                        <IoClose size={25} color='black'/>
                    </button>
                </div>

                {success ? (
                    <div className="flex flex-col items-center gap-2">
                        <BsFillSendCheckFill size={100} color='green'/>
                        <h4 className="font-bold text-black text-2xl text-center">{t('Parabéns, você acaba de confirmar seu cadastro, em breve nossa equipe entrará em contato para explicar os próximos passos!')}</h4>
                    </div>
                ) : (
                    <form className="flex flex-col">
                        <label htmlFor="typeUser">{t('Como você deseja se cadastrar?')}</label>
                        <select 
                            id='typeUser'
                            className="bg-gray-300 rounded-lg px-3 py-2"
                            value={typeUser}
                            onChange={(e) => setTypeUser(e.target.value)}
                        >   
                            <option value="" defaultValue=''>{t('Selecione uma opção')}</option>
                            <option value="produtor">{t('Produtor')}</option>
                            <option value="inspetor">{t('Inspetor')}</option>
                            <option value="pesquisador">{t('Pesquisador')}</option>
                        </select>

                        <label htmlFor="name" className="mt-2">{t('Seu nome')}</label>
                        <input 
                            id='name'
                            placeholder={`${t('Digite seu nome aqui')}`}
                            className="bg-gray-300 rounded-lg px-3 py-2 text-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email" className="mt-2">{t('Seu email')}</label>
                        <input 
                            id='email'
                            placeholder={`${t('Digite seu email aqui')}`}
                            className="bg-gray-300 rounded-lg px-3 py-2 text-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                        />

                        <label htmlFor="tel" className="mt-2">{t('Seu telefone')}</label>
                        <input 
                            id='tel'
                            placeholder={`${t('Digite seu telefone aqui')}`}
                            className="bg-gray-300 rounded-lg px-3 py-2 text-black"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            type='tel'
                        />

                        <label htmlFor="pergunta" className="mt-2">{t('Qual a sua motivação para lutar pela regeneração do Planeta?')}</label>
                        <input 
                            id='pergunta'
                            placeholder={`${t('Digite aqui sua resposta')}`}
                            className="bg-gray-300 rounded-lg px-3 py-2 text-black"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            type='tel'
                        />
                    </form>
                )}

                <div className='flex items-center justify-between w-full'>
                    {!success && (
                        <>
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
                        </>
                    )}
                </div>
            </div>

            <ToastContainer
                position="top-center"
            />
        </div> 
    )
}