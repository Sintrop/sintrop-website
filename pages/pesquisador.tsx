import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import { BtnWhats } from "../components/BtnWhats";
import { Card5 } from "../components/Card5";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { ModalRegister } from "../components/ModalRegister";
import {useState, useEffect} from 'react';
import { api } from "../src/services/api";
import { usersCountProps } from "./index";

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

const Pesquisador: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                <title>{t('Pesquisadores')} - Sintrop</title>
                <meta name='description' content={`${t('Ajude nos a construir um futuro regenerativo e seja recompensado com o token da Sintrop pelo serviço de pesquisa ambiental!')}`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/pesquisador"/>
                <meta property="og:title" content="Oportunidade para Pesquisadores Agroecológicos - Sintrop"/>
                <meta property="og:description" content={`${t('Ajude nos a construir um futuro regenerativo e seja recompensado com o token da Sintrop pelo serviço de pesquisa ambiental!')}`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            
            <div className='flex flex-col items-center w-full bg-pesquisador bg-left lg:bg-center lg:h-[550px] pb-5'>
                <Header/>

                <section className='flex flex-col lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-white text-2xl text-center mt-10 lg:mt-0 lg:text-start lg:text-3xl lg:max-w-[28ch]'>
                        {t('Oportunidade para instituições de pesquisa e pesquisadores agroecológicos')}
                    </h1>

                    <h2 className='text-white max-w-[45ch] text-center lg:text-start mt-5 lg:mt-10'>
                        {t('Seja recompensado com o token Crédito de Regeneração pelo serviço de pesquisa')}
                    </h2>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <Link
                            href={router.locale === 'pt-BR' ? 
                            'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/whitepaper-v1.4-EN.pdf'}
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

            <section className='flex items-center px-2 flex-col justify-center gap-5 lg:w-[1000px] py-10 lg:flex-row'>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/centro-pesquisa.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[80%] object-contain"
                    />
                </div>
                <div className='flex flex-col lg:w-[50%] gap-3'>
                    <h4 className="font-bold text-green-900 text-2xl">{t('Trabalhe no centro de pesquisa')}</h4>
                    <p className='text-black'>{t('Publique suas pesquisas, revise as inspeções ocorridas, crie novos métodos de avaliação ou proponha melhorias nos métodos existentes')}</p>
                    <button
                        onClick={() => setModalRegister(true)}
                        className='w-32 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                    >
                        {t('Cadastre-se')}
                    </button>
                </div>
            </section>

            <section className='flex flex-col items-center w-full py-10 bg-credito-regeneracao bg-center'>
                <div className='flex items-center px-2 flex-col justify-center gap-5 lg:justify-between lg:w-[1000px] lg:flex-row'>
                    <div className="flex flex-col px-2 gap-3 lg:w-[40%]">
                        <h4 className="font-bold text-white text-2xl">{t('GANHE O CRÉDITO DE REGENERAÇÃO')}</h4>
                        <p className="text-white">{t('Criptomoeda lastreada no impacto de restauração de ecossistemas da rede de produtores. Distribuição de 1.200.000 unidades a cada 6 meses de acordo com resultado obtido no processo descentralizado de inspeções')}.</p>
                    </div>

                    <div className='flex flex-col '>
                        <div className='flex flex-col py-2 px-10 items-center bg-credito-token-white bg-no-repeat bg-contain w-[320px] h-[488px]'>
                            <h4 className="text-white text-xs font-bold">{t('RECOMPENSA TOTAL DE TOKENS')}</h4>
                            <p className="text-white text-2xl font-bold">30.000.000</p>

                            <div className="flex justify-between w-full mt-5">
                                <p className="text-black font-bold text-lg">{t('Período')}</p>
                                <p className="text-black font-bold text-lg">{t('Época')} 1</p>
                            </div>

                            <p className="text-black font-bold text-xl text-center mt-4">{t('Recompensa por era')}</p>
                            <p className="text-black text-xl text-center">1.200.000</p>

                            <p className="text-black font-bold text-xl text-center mt-4">{t('Recompensa total do período')}</p>
                            <p className="text-black text-xl text-center">14.400.000</p>

                            <p className="text-black font-bold text-xl text-center mt-4">% {t('do total de tokens')}</p>
                            <p className="text-black text-xl text-center">48,00 %</p>
                        </div>
                    </div>
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
                <div className='flex items-center px-2 justify-center gap-5 lg:w-[1000px] lg:py-10'>
                    <Image
                        src={require('../public/assets/arvore-1.png')}
                        alt='Imagem de uma árvore na floresta'
                        className="hidden lg:w-[40%] h-[500px] object-cover mt-[-150px] lg:flex"
                        quality={100}
                    />

                    <div className="flex flex-col lg:w-[50%] gap-3 lg:px-14">
                        <p className="text-white text-center">{t('Nosso sistema está sendo desenvolvido e atualmente em fase de testes. Buscamos os primeiros 10 pesquisadores')}</p>
                        <div className='flex flex-col items-center gap-8 p-4 border-2 rounded-lg lg:mt-10'>
                            <h4 className="font-bold text-white text-3xl">{t('Vagas disponíveis')}</h4>
                            <p className="text-white text-center text-3xl font-bold">{9 - Number(countUsers.researchersCount)}</p>
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
                    user='pesquisador'
                />
            )}

            <Footer/>

            <BtnWhats/>
        </main>
    )
}

export default Pesquisador;