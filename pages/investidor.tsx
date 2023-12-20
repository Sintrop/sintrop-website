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
                <meta name='description' content={`${t('Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista no Crédito Regeneração!')}`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/investidor"/>
                <meta property="og:title" content="Investidor - Sintrop"/>
                <meta property="og:description" content={`${t('Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista no Crédito Regeneração!')}`}/>
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

                    <h2 className='text-white max-w-[45ch] mt-5 text-center px-4 lg:px-0 lg:text-start lg:mt-10'>
                        {t('Primeira rodada de captação e venda do Crédito de Regeneração aberta para investimento')}
                    </h2>

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
                            href='https://docs.google.com/presentation/d/1saoxTOk3q3q66ch2HLFYEpzVvcxAnVkV8RhyGay7_UU/edit#slide=id.p'
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('APRESENTAÇÃO')}
                        </Link>
                    </div>
                </section>
            </div>

            {/* <section className='flex flex-col px-4 lg:w-[1000px] py-10'>
                <div className='w-full flex flex-col items-center lg:flex-row'>
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
            </section> */}

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-10'>
                <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                    <div className='flex flex-col gap-3 lg:w-[45%]'>
                        <h4 className="font-bold text-green-900 text-lg italic">{t('Transformamos o impacto de regeneração de ecossistemas em um ativo digital, para guardar ou trocar pelo certificado de contribuição ambiental')}.</h4>
                        <p className='text-black text-lg mt-5'>{t('O Crédito de Regeneração é uma criptomoeda lastreada no impacto de restauração de ecossistemas de produtores rurais regenerativos e projetos de reflorestamento')}.</p>
                    </div>
                    <Image
                        src={require('../public/assets/token-3.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[40%] object-contain"
                    />
                </div>
                <div className='flex items-center justify-center gap-8 flex-wrap'>
                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[300px]'>
                        <Image
                            src={require('../public/assets/icon-descentralizado.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('DESCENTRALIZADO')}</h4>
                        <p className="text-lg text-gray-700">{t('Tecnologia da blockchain para armazenamento e processamentos dos dados sem uma entidade central')}.</p>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[300px]'>
                        <Image
                            src={require('../public/assets/icon-low-cost.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('BAIXO CUSTO')}</h4>
                        <p className="text-lg text-gray-700">{t('Acessível para o pequeno produtor, apenas 3 transações necessárias para participar')}.</p>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[300px]'>
                        <Image
                            src={require('../public/assets/icon-transparent.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('TRANSPARENTE')}</h4>
                        <p className="text-lg text-gray-700">{t('Todos dados públicos e disponíveis para acesso de qualquer um')}.</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-4 items-center justify-center gap-5 pb-5 lg:w-[1000px] lg:py-10'>
                <h3 className='text-center font-bold text-green-900 text-2xl mb-2'>
                    {t('Potencial de valorização do impacto de CO2, solo, água e unidades de vida por token com o crescimento da comunidade')}
                </h3>
                <div className='flex flex-col-reverse items-center lg:flex-row '>
                    <div className='flex flex-col items-center lg:items-start lg:w-[25%]'>
                        <p className='text-black lg:w-60'>{t('Para aprofundar, confira a planilha com a projeção completa')}</p>
                        <Link
                            className='w-48 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center mt-5'
                            href='https://docs.google.com/spreadsheets/d/1B98efJjfopv26cYUvu2GLK28iEb7qPx9GJkTHdItB4A'
                            target='_blank'
                        >
                            {t('Ver planilha')}
                        </Link>
                    </div>
                    <div className='flex flex-col items-center lg:w-[75%]'>
                        <Image
                            src={require('../public/assets/co2-per-token.png')}
                            alt='Gráfico impacto do token por co2'
                            className="lg:w-[100%] object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center w-full py-10 bg-[#0a4303] '>
                <div className='flex flex-col items-center justify-center flex-wrap lg:w-[1000px]'>
                    <h4 className="font-bold text-2xl text-yellow-500 text-center">{t('PROJEÇÕES DE IMPACTO')}</h4>
                    <p className="text-white text-center mt-3">{t('Tabelas com as metas e possíveis projeções de impacto da rede')}</p>
                    
                    <div className='flex flex-col items-center justify-center w-full flex-wrap gap-5 mt-5 lg:flex-row'>
                        <CardGoals
                            title="META 1"
                            area="576.000"
                            circulatingSuply="729.000.000"
                            distribution="42.000.000"
                            impactTotal="17.280.000"
                            impactToken="23,70370"
                            estimatedValueToken="R$ 1,1852"
                            marketCap="R$ 864.000.000,00"
                            roi="4102,78 %"
                            emissionGlobal="0,0432 %"
                        />
                        
                        <CardGoals
                            title="META SONHO"
                            area="134.110.451"
                            circulatingSuply="1.149.000.000"
                            distribution="21.000.000"
                            impactTotal="4.023.313.522"
                            impactToken="3.501,57835"
                            estimatedValueToken="R$ 175,0789"
                            marketCap="R$ 201.165.676.116,94"
                            roi="620747,22 %"
                            emissionGlobal="10,0583 %"
                        />
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center gap-5 lg:w-[1000px] py-10 px-2'>  
                {router.locale === 'pt-BR' && (
                    <Image
                        src={require('../public/assets/round.png')}
                        alt='Gráfico impacto do token por co2'
                        className="w-full object-contain"
                    />
                )}   
                {router.locale === 'en-US' && (
                    <Image
                        src={require('../public/assets/round.png')}
                        alt='Gráfico impacto do token por co2'
                        className="w-full object-contain"
                    />
                )}        
                {/* <p className="font-bold text-white text-2xl mt-[-75px]">{t('Cotas disponíveis')}: {quotesAvaliables}</p> */}
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-20 lg:flex-row'>
                <div className='flex flex-col lg:w-[50%] gap-3'>
                    <h4 className="font-bold text-green-900 text-2xl">{t('Cenário que atingirmos a meta 2')}</h4>
                    <p className='text-black lg:w-[80%]'>{t('No cenário que atingimos a meta 2, o impacto estimado por token é de 23.7kg de CO2')}.</p>
                </div>
                <div className='flex flex-col items-center lg:w-[50%]'>
                    <Image
                        src={require('../public/assets/graph-meta-2.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[90%] object-contain"
                    />
                </div>
            </section>

            {/* <section className='flex flex-col px-4 items-center w-full py-10 bg-[#0a4303]'>
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
                            
                            <div className="flex items-center justify-center gap-4 lg:gap-5 mt-14">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] border-2 border-yellow-500">
                                        <p className="text-white text-2xl lg:text-4xl font-bold">{days}</p>
                                    </div>
                                    <p className="text-white ">{t('Dias')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] border-2 border-yellow-500">
                                        <p className="text-white font-bold text-2xl lg:text-4xl">{hours}</p>
                                    </div>
                                    <p className="text-white ">{t('Horas')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] border-2 border-yellow-500">
                                        <p className="text-white font-bold text-2xl lg:text-4xl">{minutes}</p>
                                    </div>
                                    <p className="text-white ">{t('Minutos')}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] border-2 border-yellow-500">
                                        <p className="text-white font-bold text-2xl lg:text-4xl">{seconds}</p>
                                    </div>
                                    <p className="text-white ">{t('Segundos')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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