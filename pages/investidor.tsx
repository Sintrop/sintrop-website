import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BtnWhats } from "../components/BtnWhats";
import { useRouter } from "next/router";
import { useCountdown } from "../src/hooks/useCountdown";
import { CardGoals } from "../components/CardGoals";
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

const Investidor: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const [days, hours, minutes, seconds] = useCountdown('2023-11-30 23:59:59');
    const {t} = useTranslation('common');
    const [quotesAvaliables, setQuotesAvaliables] = useState(0);
    const [modalReserve, setModalReserve] = useState(false);

    useEffect(() => {
        getQuotes();
    }, []);

    async function getQuotes() {
        const response = await api.get('/quotes');
        const quotes = response.data.quotes;
        
        let quotesAvaliables = 0;
        for(var i = 0; i < quotes.length; i++) {
            if(quotes[i].reservedBy === null){
                quotesAvaliables += 1;
            }
        }
        setQuotesAvaliables(quotesAvaliables);
    }


    return(
        <main className="flex flex-col items-center w-full">
            <Head>
                <title>{t('Investidores')} - Oportunidade</title>
                <meta name='description' content={`${t('Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista na Regeneração!')}`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/investidor"/>
                <meta property="og:title" content="Investidor - Sintrop"/>
                <meta property="og:description" content={`${t('Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista na Regeneração!')}`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>

            <div className='flex flex-col items-center w-full bg-investidor bg-left lg:bg-center lg:h-[550px] pb-5'>
                <Header/>

                <section className='flex flex-col lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-white text-2xl text-center mt-10 lg:mt-0 lg:text-start lg:text-3xl lg:max-w-[20ch]'>
                        {t('Invista na ')}
                        <span className='text-[#BBFFB2]'>
                            {t('Regeneração do planeta')}
                        </span>
                    </h1>

                    <h2 className='text-white max-w-[45ch] mt-5 text-center lg:text-start lg:mt-10'>
                        {t('Primeira rodada de captação e venda do Crédito de Regeneração aberta para investimento')}
                    </h2>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <button
                            className='w-52 h-14 border-2 rounded-xl text-white text-sm font-bold'
                        >
                            {t('BAIXAR WHITEPAPER')}
                        </button>
                        <Link
                            href='https://v4-sintrop.netlify.app'
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('APRESENTAÇÃO')}
                        </Link>
                    </div>
                </section>
            </div>

            <section className='flex flex-col px-2 lg:w-[1000px] py-10'>
                <div className='w-full flex items-center '>
                    <Image
                        src={require('../public/assets/token-2.png')}
                        alt='Imagem do token mais impacto'
                        className="lg:w-[60%] object-contain"
                    />
                    

                    <div className='flex flex-col w-full lg:w-[350px] h-[250px] bg-credit-investor bg-center bg-no-repeat rounded-lg overflow-hidden border-4 border-green-500'>
                        <div className='flex flex-col w-full h-full items-center justify-center bg-green-900/80 px-2 gap-2'>
                            <p className='font-bold text-white text-xl text-center'>{t('CRÉDITO DE REGENERAÇÃO')}</p>
                            <p className="text-lg text-white text-center">{t('Criptomoeda lastreada no impacto de restauração de ecossistemas de produtores rurais regenerativos e projetos de reflorestamento')}</p>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] py-10 lg:flex-row'>
                <div className='flex flex-col lg:w-[50%]'>
                    <p className='text-black w-60'>{t('Potencial de valorização da relação kg de CO2, m2 de solo, m3 de água e unidades de vida por token com o crescimento da comunidade')}</p>
                </div>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/co2-per-token.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[80%] object-contain"
                    />
                </div>
            </section>

            <section className='flex flex-col px-2 items-center w-full py-10 bg-[#0a4303] '>
                <div className='flex flex-col items-center justify-center flex-wrap lg:w-[1000px]'>
                    <h4 className="font-bold text-2xl text-yellow-500 text-center">{t('PROJEÇÕES DE IMPACTO')}</h4>
                    <p className="text-white text-center mt-3">{t('Tabelas com as metas e possíveis projeções de impacto da rede')}</p>
                    
                    <div className='flex flex-col items-center justify-center w-full flex-wrap gap-5 mt-5 lg:flex-row'>
                        <CardGoals
                            title="META 1"
                            years="Lançamento"
                            area="1.000"
                            average="25"
                            total="25.000"
                            distribution="41.500.000"
                            impactToken="0,602410"
                            co2Pricing="R$ 40,00"
                            estimatedValueToken="R$ 0,024"
                            marketCap="R$ 10.481.927,711"
                            emissionGlobal="0,0001 %"
                        />
                        <CardGoals
                            title="META 2"
                            years="5 Anos"
                            area="100.000"
                            average="20"
                            total="2.000.000"
                            distribution="41.500.000"
                            impactToken="48,19771"
                            co2Pricing="R$ 30,00"
                            estimatedValueToken="R$ 1,44"
                            marketCap="R$ 698.915.662,651"
                            emissionGlobal="0,100 %"
                        />
                        <CardGoals
                            title="META 3"
                            years="10 Anos"
                            area="10.000.000"
                            average="15"
                            total="150.000.000"
                            distribution="41.500.000"
                            impactToken="3.614,457831"
                            co2Pricing="R$ 20,00"
                            estimatedValueToken="R$ 72,28"
                            marketCap="R$ 31.445.783.132,530"
                            emissionGlobal="0,7500 %"
                        />
                        <CardGoals
                            title="META SONHO"
                            years="25 Anos"
                            area="600.000.000"
                            average="10"
                            total="6.000.000.000"
                            distribution="41.500.000"
                            impactToken="144.578,313253"
                            co2Pricing="R$ 15,00"
                            estimatedValueToken="R$ 2.168,67"
                            marketCap="R$ 943.373.493.975,904"
                            emissionGlobal="30,0000 %"
                        />
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center gap-5 lg:w-[1000px] py-10 px-2'>            
                <Image
                    src={require('../public/assets/offer.png')}
                    alt='Gráfico impacto do token por co2'
                    className="w-full object-contain"
                />
                {/* <p className="font-bold text-white text-2xl mt-[-75px]">{t('Cotas disponíveis')}: {quotesAvaliables}</p> */}
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-20 lg:flex-row'>
                <div className='flex flex-col lg:w-[50%] gap-3'>
                    <h4 className="font-bold text-green-900 text-2xl">{t('Cenário que atingirmos a meta 2')}</h4>
                    <p className='text-black lg:w-[80%]'>{t('No cenário que atingimos a meta 2, o impacto estimado por token é de 48kg de CO2')}.</p>
                </div>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/graph-meta-2.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[90%] object-contain"
                    />
                </div>
            </section>

            <section className='flex flex-col px-2 items-center w-full py-10 bg-[#0a4303]'>
                <div className='flex flex-col items-center justify-center gap-5 lg:w-[1000px] lg:flex-row'>
                    <div className="flex flex-col lg:w-[40%] gap-3">
                        <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-3xl">{t('Cotas disponíveis')}:</h4>
                            <div className="flex p-3 rounded-lg bg-yellow-500">
                                <p className="text-white text-2xl font-bold">{quotesAvaliables}</p>
                            </div>
                        </div>
                        <p className="text-white">Restam apenas {quotesAvaliables} cotas disponíveis, agende uma reunião para saber mais e não fique de fora.</p>
                        <Link
                            href='https://calendly.com/andre-sintrop/agendar'
                            target="_blank"
                            className='w-52 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('AGENDAR REUNIÃO')}
                        </Link>
                    </div>

                    <div className="flex flex-col lg:w-[60%] gap-3 lg:px-14">
                        <div className='flex flex-col items-center p-1 border-2 rounded-lg lg:mt-10 lg:p-4'>
                            <h4 className="font-bold text-white text-2xl text-center">{t('DATA DE ENCERRAMENTO')}</h4>
                            <p className="text-white text-center text-xl font-bold mt-3">30.11.2023</p>
                            
                            <div className="flex items-center justify-center gap-1 lg:gap-5 mt-14">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] border-2 border-yellow-500">
                                        <p className="text-white text-4xl font-bold">{days}</p>
                                    </div>
                                    <p className="text-white ">{t('Dias')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] border-2 border-yellow-500">
                                        <p className="text-white text-4xl font-bold">{hours}</p>
                                    </div>
                                    <p className="text-white ">{t('Horas')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] border-2 border-yellow-500">
                                        <p className="text-white text-4xl font-bold">{minutes}</p>
                                    </div>
                                    <p className="text-white ">{t('Minutos')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] border-2 border-yellow-500">
                                        <p className="text-white text-4xl font-bold">{seconds}</p>
                                    </div>
                                    <p className="text-white ">{t('Segundos')}</p>
                                </div>
                            </div>
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

            <Footer/>

            <BtnWhats/>
        </main>
    )
}

export default Investidor