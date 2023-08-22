import {useState, useEffect} from 'react';
import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import { Card4 } from "../components/Card4";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BtnWhats } from "../components/BtnWhats";
import { useRouter } from "next/router";
import { ModalRegister } from '../components/ModalRegister';
import { api } from '../src/services/api';
import { usersCountProps } from './index';

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

const Produtor: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                <title>{t("Produtores Sintrop")}</title>
                <meta name='description' content={`${t('Seja recompensado com o token Crédito de Agricultura Regenerativa pelo serviço ambiental ecossistêmico prestado para a sociedade pela sua produção rural')}!`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/produtor"/>
                <meta property="og:title" content="Produtor - Sintrop"/>
                <meta property="og:description" content={`${t('Seja recompensado com o token Crédito de Agricultura Regenerativa pelo serviço ambiental ecossistêmico prestado para a sociedade pela sua produção rural')}!`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-full bg-produtor bg-left lg:bg-center lg:h-[550px] pb-5'>
                <Header/>

                <section className='flex flex-col lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-white text-2xl text-center mt-10 lg:mt-0 lg:text-start lg:text-3xl lg:max-w-[28ch]'>
                        {t('Ganhe para reflorestar e ')}
                        <span className='text-[#BBFFB2]'>
                            {t('Regenerar a Natureza')}
                        </span>
                    </h1>

                    <h2 className='text-white text-center max-w-[45ch] mt-5 lg:mt-10 lg:text-start'>
                        {t('Faça parte da nossa rede de produtores, seja certificado gratuitamente e ganhe o token Crédito de Regeneração pelo serviço ambiental de regeneração de ecossistemas')}
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

            <section className='flex flex-col items-center w-full pt-10'>
                <div className='flex items-center px-2 flex-col justify-center gap-5 lg:justify-between lg:w-[1000px] lg:flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col py-2 px-10 items-center bg-credito-token-green bg-no-repeat bg-contain w-[310px] h-[488px]'>
                            <h4 className="text-white text-xs font-bold">{t('RECOMPENSA TOTAL DE TOKENS')}</h4>
                            <p className="text-white text-2xl font-bold">750.000.000</p>

                            <div className="flex justify-between w-full mt-5">
                                <p className="text-black font-bold text-lg">{t('Período')}</p>
                                <p className="text-black font-bold text-lg">{t('Época')} 1</p>
                            </div>

                            <p className="text-black font-bold text-xl text-center mt-4">{t('Recompensa por era')}</p>
                            <p className="text-black text-xl text-center">30.000.000</p>

                            <p className="text-black font-bold text-xl text-center mt-4">{t('Recompensa total do período')}</p>
                            <p className="text-black text-xl text-center">360.000.000</p>

                            <p className="text-black font-bold text-xl text-center mt-4">% {t('do total de tokens')}</p>
                            <p className="text-black text-xl text-center">48,00 %</p>
                        </div>
                    </div> 
                    <div className="flex flex-col px-2 gap-3 lg:w-[40%]">
                        <h4 className="font-bold text-green-900 text-2xl">{t('GANHE O CRÉDITO DE REGENERAÇÃO')}</h4>
                        <p className="text-black">{t('Criptomoeda lastreada no impacto de restauração de ecossistemas da rede de produtores. Distribuição de 30.000.000 unidades a cada 6 meses de acordo com resultado obtido no processo descentralizado de inspeções')}</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] py-10 lg:flex-row'>
                <div className='flex flex-col lg:w-[50%]'>
                    <p className='text-black lg:w-60'>{t('Potencial de valorização da relação kg de CO2, m2 de solo, m3 de água e unidades de vida por token com o crescimento da comunidade')}</p>
                </div>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/co2-per-token.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[80%] object-contain"
                    />
                </div>
            </section>

            <section className='flex flex-col items-center w-full py-10 bg-vitrine-produtor bg-center'>
                <div className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] lg:py-10 lg:flex-row'>
                    <Image
                        src={require('../public/assets/produtores-reais.png')}
                        alt='Produtores reais do sistema'
                        className="lg:w-[60%] object-contain"
                        quality={100}
                    />

                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-white text-2xl">{t('Vitrine de exposição')}</h4>
                        <p className="text-white">{t('Apresentamos a você a oportunidade de se destacar na nossa Vitrine de Produtores Regenerativos Certificados, um espaço dedicado para que consumidores possam encontram alimentos regenerativos na sua região')}</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-20 lg:flex-row'>
                <div className='flex flex-col lg:w-[50%] gap-3'>
                    <h4 className="font-bold text-green-900 text-2xl">{t('Certificado de regeneração')}</h4>
                    <p className='text-black lg:w-[80%]'>{t('Ganhe um certificado transparente, que exibe para o consumidor o seu nível de regeneração com a confiança e transparência da tecnologia da blockchain')}</p>
                </div>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/certificado-produtor.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[90%] object-contain"
                    />
                </div>
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
                        <p className="text-white text-center">{t('Nosso sistema está sendo desenvolvido e atualmente em fase de testes. Buscamos os primeiros 1000 produtores')}</p>
                        <div className='flex flex-col items-center gap-8 p-4 border-2 rounded-lg lg:mt-10'>
                            <h4 className="font-bold text-white text-3xl">{t('Vagas disponíveis')}</h4>
                            <p className="text-white text-center text-3xl font-bold">{1000 - (Number(countUsers?.producersCount) - 30)}</p>
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

            <section className='flex flex-col items-center justify-center w-full h-[400px] bg-lines bg-center'>
                <h4 className="font-bold text-black italic text-3xl text-center">
                    {t('CONTRIBUA PARA ')}
                    <span className="text-[#529D17]">
                        {t('REGENERAÇÃO DO PLANETA')}!
                    </span>
                </h4>
            </section>

            {modalRegister && (
                <ModalRegister
                    close={() => setModalRegister(false)}
                    user='produtor'
                />
            )}

            <Footer/>
            <BtnWhats/>
        </main>
    )
}

export default Produtor;