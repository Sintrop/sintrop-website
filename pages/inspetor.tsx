import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BtnWhats } from "../components/BtnWhats";
import { useRouter } from "next/router";
import {useState, useEffect} from 'react';
import { ModalRegister } from "../components/ModalRegister";
import { usersCountProps } from "./index";
import { api } from "../src/services/api";

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

const Inspetor: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const {t} = useTranslation('common');
    const [modalRegister, setModalRegister] = useState(false);
    const [countUsers, setCountUsers] = useState({} as usersCountProps);

    useEffect(() => {
        getCountUsers();
    },[]);

    async function getCountUsers(){
        const response = await api.get('/users_count');
        setCountUsers(response.data);
    }

    return(
        <main className="flex flex-col items-center w-full">
            <Head>
                <title>{t('Inspetores')} - Sintrop</title>
                <meta name='description' content={`${t('Faça parte da nossa rede de inspetores, visite e inspecione produtores rurais e ganhe o token Crédito de Regeneração')}!`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/ativista"/>
                <meta property="og:title" content="Inspetores - Sintrop"/>
                <meta property="og:description" content={`${t('Faça parte da nossa rede de inspetores, visite e inspecione produtores rurais e ganhe o token Crédito de Regeneração')}!`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>

                    
            <div className='flex flex-col items-center w-full bg-inspetor bg-left lg:bg-center lg:h-[550px] pb-5'>
                <Header/>

                <section className='flex flex-col lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-white text-center text-2xl mt-10 lg:mt-0 lg:text-start lg:text-3xl lg:max-w-[28ch]'>
                        {t('Ganhe para inspecionar Áreas Rurais e Projetos de Reflorestamento')}
                    </h1>

                    <h2 className='text-white max-w-[45ch] mt-5 text-center px-4 lg:px-0 lg:text-start lg:mt-10'>
                        {t('Sistema descentralizado de regeneração da Natureza com mecanismo de incentivo de sustentabilidade através do token ')}
                    </h2>
                    <p className='font-bold text-white text-center lg:text-start'>
                        {t('Crédito de Regeneração')}
                    </p>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <Link
                            href={router.locale === 'pt-BR' ? 
                            'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/qr-code/whitepaper-EN.pdf'}
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('BAIXAR WHITEPAPER')}
                        </Link>
                        <Link
                            href='https://calendly.com/andre-sintrop/agendar'
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('AGENDAR DEMONSTRAÇÃO')}
                        </Link>
                    </div>
                </section>
            </div>

            <section className='flex items-center px-4 flex-col justify-center gap-5 lg:w-[1000px] py-10 lg:flex-row'>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/centro-inspecoes.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[80%] object-contain"
                    />
                </div>
                <div className='flex flex-col lg:w-[50%] gap-3'>
                    <h4 className="font-bold text-green-900 text-2xl">{t('Trabalhe no centro de inspeções')}</h4>
                    <p className='text-black'>{t('Aceite as inspeções que deseja realizar e vá até o local coletar os dados')}.</p>
                    <button
                        onClick={() => setModalRegister(true)}
                        className='w-32 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                    >
                        {t('Cadastre-se')}
                    </button>
                </div>
            </section>

            <section className='flex flex-col items-center w-full py-10 bg-credito-regeneracao bg-center'>
                <div className='flex items-center px-4 flex-col justify-center gap-5 lg:justify-between lg:w-[1000px] lg:flex-row'>
                    <div className="flex flex-col gap-3 lg:w-[40%]">
                        <h4 className="font-bold text-white text-2xl">{t('GANHE O CRÉDITO DE REGENERAÇÃO')}</h4>
                        <p className="text-white">{t('Criptomoeda lastreada no impacto de restauração de ecossistemas da rede de produtores. Distribuição de 7.200.000 unidades a cada 6 meses de acordo com resultado obtido no processo descentralizado de inspeções')}.</p>
                    </div>

                    <div className='flex flex-col '>
                        <div className='flex flex-col py-2 px-10 items-center bg-credito-token-white bg-no-repeat bg-contain w-full lg:w-[320px] h-[488px]'>
                            <h4 className="text-white text-xs">{t('RECOMPENSA TOTAL DE TOKENS')}</h4>
                            <p className="text-white text-2xl font-bold">180.000.000</p>

                            <div className="flex justify-between w-full mt-5">
                                <p className="text-black font-bold lg:text-lg">{t('Período')}</p>
                                <p className="text-black font-bold lg:text-lg">{t('Época')} 1</p>
                            </div>

                            <p className="text-black font-bold text-lg lg:text-xl text-center mt-1 lg:mt-3">{t('Recompensa por era')}</p>
                            <p className="text-black text-lg lg:text-xl text-center">7.200.000</p>

                            <p className="text-black font-bold text-lg lg:text-xl text-center mt-1 lg:mt-3">{t('Recompensa total do período')}</p>
                            <p className="text-black text-lg lg:text-xl text-center">86.400.000</p>

                            <p className="text-black font-bold text-lg lg:text-xl text-center mt-1 lg:mt-3">% {t('do total de tokens')}</p>
                            <p className="text-black text-lg lg:text-xl text-center">48,00 %</p>
                        </div>
                    </div>
                    {/* <Image
                        src={require('../public/assets/table-credit-inspector.png')}
                        alt='Produtores reais do sistema'
                        className="lg:w-[60%] object-contain"
                        quality={100}
                    /> */}
                </div>
            </section>

            <section className='flex flex-col items-center justify-center w-full h-[400px] bg-lines bg-center'>
                <h4 className="font-bold text-black italic text-3xl text-center">
                    {t('CONTRIBUA PARA ')}
                    <span className="text-[#529D17]">
                        {t('REGENERAÇÃO DO PLANETA')}!
                    </span>
                </h4>
            </section>

            <section className='flex flex-col items-center w-full py-10 bg-[#0a4303]'>
                <div className='flex items-center px-4 justify-center gap-5 lg:w-[1000px] lg:py-10'>
                    <Image
                        src={require('../public/assets/arvore-1.png')}
                        alt='Imagem de uma árvore na floresta'
                        className="hidden lg:w-[40%] h-[500px] object-cover mt-[-150px] lg:flex"
                        quality={100}
                    />

                    <div className="flex flex-col lg:w-[50%] gap-3 lg:px-14">
                        <p className="text-white text-center">{t('Nosso sistema está sendo desenvolvido e atualmente em fase de testes. Buscamos os primeiros 100 inspetores')}</p>
                        <div className='flex flex-col items-center gap-8 p-4 border-2 rounded-lg lg:mt-10'>
                            <h4 className="font-bold text-white text-3xl">{t('Vagas disponíveis')}</h4>
                            <p className="text-white text-center text-3xl font-bold">{100 - (Number(countUsers.inspectorsCount) - 27)}</p>
                            <button
                                onClick={() => setModalRegister(true)}
                                className='w-48 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                            >
                                {t('Cadastre-se')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {modalRegister && (
                <ModalRegister
                    close={() => setModalRegister(false)}
                    user='inspetor'
                />
            )}

            <Footer/>
            <BtnWhats/>
        </main>
    )
}

export default Inspetor;