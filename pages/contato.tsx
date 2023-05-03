import {useState} from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Script from 'next/script';
import { FormEvent } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import emailjs from '@emailjs/browser';
import { Footer } from '../components/Footer';
import { BtnWhats } from '../components/BtnWhats';
import { Header } from "../components/Header";

interface StaticProps{
    locale: string;
}

export async function getStaticProps({locale}: StaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
            'common',
            ])),
        },
    }
}

const Contato: NextPage= (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {t} = useTranslation('common');
    const [loading, setLoading]= useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage]= useState('');

    function handleSendEmail(e: FormEvent){
        e.preventDefault();
        if(loading){
            return;
        }
        if(!name.trim() || !email.trim() || !tel.trim() || !message.trim()){
            return;
        }
        setLoading(true);
        const templateParams={
            from_name: name,
            email,
            tel,
            message
        }

        emailjs.send('service_alygxgf', 'template_fr74tuc', templateParams, 'kuy2D_QzG95P7COQI')
        .then((response) => {
            alert('Email enviado com sucesso! Aguarde o retorno')
            setName('');
            setEmail('');
            setTel('');
            setMessage('');
            setLoading(false);
        })
        .catch(err=> {
            console.log(err) 
            setLoading(false)
        })
    }

    return(
        <div>
            <Script id="googleTagManager" src="https://www.googletagmanager.com/gtm.js?id=%27+i+dl" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');`}}/>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZK3VDF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
            <Head>
                <title>{t('Contato')} - Sintrop</title>
                <meta name='description' content='Entre em contato conosco e tire todas suas dúvidas!'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/contato"/>
                <meta property="og:title" content="Contato - Sintrop"/>
                <meta property="og:description" content="Entre em contato com a Sintrop"/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw] bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/new-bg.jpg")] bg-cover bg-center lg:h-[500px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2'>
                        <Header/>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Entre em contato conosco')}
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[600px]'>
                                {t('Ficou alguma dúvida? Estaremos prontos para te esclarecer tudo, e juntos')}
                                <span className='font-bold text-white'> {t('Mudar o mundo')}!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section id='contato' className='flex flex-col lg:gap-20 w-[100%] py-10 justify-center lg:flex-row bg-[#062C01]'>
                <div className='flex flex-col lg:w-[400px]'>
                        <h3 className='font-bold text-xl mx-2 text-white'>{t('Contate-nos')}</h3>
                        <p className='text-lg mx-2 text-white mt-2'>
                            {t('Em caso de dúvidas, investimentos ou queira participar do primeiro teste da plataforma, envie-nos sua mensagem')}.
                        </p>
                </div>
                <form 
                    onSubmit={handleSendEmail}
                    className='flex flex-col gap-5 p-5 rounded-lg lg:w-[400px] bg-white'
                >
                    <h2 className='text-black text-xl font-bold'>{t('Contato')}</h2>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={`${t('Seu nome')}`}
                        className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        required
                    />
                    <input
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder={`DDD + ${t('telefone')}`}
                        className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        required
                    />
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`${t('Mensagem')}`}
                        className='w-[100%] h-24 bg-white p-2 rounded-lg border-2'
                        required
                    />

                    
                    <button 
                        type='submit'
                        className='w-[100%] h-10 rounded-lg text-white font-bold bg-green-700 flex items-center justify-center'
                    >
                        {loading? `${t('Enviando... Aguarde')}` : `${t('Enviar')}`}
                    </button>
                </form>
            </section>

            <Footer/>

            <section className='flex items-center justify-center h-[80px] w-[100vw] bg-black'>
                <p className='text-white text-center'>
                    {t('We must change now! We must save the planet and avoid climate disasters. Join us on this fight')}!
                </p>
            </section>

            <BtnWhats/>
        </div>
    )
}

export default Contato;