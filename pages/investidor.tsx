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
    const {t} = useTranslation('common');
    const [chooseMap, setChooseMap] = useState(true);

    useEffect(() => {
        if(chooseMap){
            setTimeout(() => {setChooseMap(false)}, 2000)
        }
        if(!chooseMap){
            setTimeout(() => {setChooseMap(true)}, 2000)
        }
    }, [chooseMap]);


    return(
        <div>
            <Script id="googleTagManager" src="https://www.googletagmanager.com/gtm.js?id=%27+i+dl" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');`}}/>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZK3VDF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
            <Head>
                <title>{t('Investidor')}Oportunidade para Investidores - Token Crédito de Agricultura Regenerativa</title>
                <meta name='description' content='Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista na Regeneração!'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/investidor"/>
                <meta property="og:title" content="Investidor - Sintrop"/>
                <meta property="og:description" content="Estamos com a primeira rodada de venda dos tokens abertas para investidores que queiram lutar pela regeneração do planeta. Invista na Regeneração!"/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw] bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/new-bg.png")] bg-cover bg-center lg:h-[600px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] flex flex-col items-center p-2'>
                        <Header/>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Oportunidade para Investidores')}
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                {t('Invista na')}
                                <span className='font-bold text-white'> {t('Regeneração do Planeta')}</span>.
                            </p>

                            <Link
                                href={router.locale === 'pt-BR' ? 
                                'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/whitepaper-v1.4-EN.pdf'}
                                target='_blank'
                            >
                                <button className='mt-5 bg-blue-600 w-72 h-14 rounded mb-10'>
                                    <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section className='flex flex-col w-[100%] lg:w-[1000px] border-2 rounded-lg mt-[-100px] h-[200px] items-center justify-center bg-[url("../assets/bg-green.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)] lg:flex-row'>
                        <h2 className='font-bold text-center text-white text-xl lg:w-[400px]'>
                            {t('Queremos acelerar nosso desenvolvimento, por isso estamos com a primeira rodada privada de venda dos tokens aberta')}
                        </h2>
                        <Link 
                            target='_blank'
                            href='https://docs.google.com/forms/d/e/1FAIpQLSfRP4MzGk86ikasBaLMGhsCvbZp67jlVW9ftIoHP0fVXoyRcw/viewform?usp=sf_link' 
                            className='ml-5 bg-blue-600 w-56 h-14 rounded flex items-center justify-center mx-2'
                        >
                            <p className='font-bold text-white text-lg text-center'>{t('Quero Investir')}</p>
                        </Link>
                    </div>
                </section>

                <section className='flex flex-col items-center w-[100%] py-10'>
                    <h3 className='font-bold text-center text-2xl text-white'>
                        {t('O Problema')}
                    </h3>
                    <p className='text-center mb-10 mt-2 text-white'></p>
                
                    {chooseMap ? (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/1984.png')}
                                quality={100}
                                className='w-[600px] h-[500px] object-cover'
                            />
                            <p className='font-bold text-white'>1984</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/2020.png')}
                                quality={100}
                                className='w-[600px] h-[500px] object-cover'
                            />
                            <p className='font-bold text-white'>2020</p>
                        </div>
                    )}

                    <p
                        className='lg:w-[1000px] text-justify my-10 mx-2 text-white'
                    >{t('Estamos destruindo o nosso planeta. A agricultura degenerativa desmata nossas florestas, acaba com a água, destrói os solos e extingue a biodiversidade. Estamos no caminho do suicídio da nossa sociedade e colapso socioambiental. Não há vida na terra sem a natureza e nós precisamos viver em harmonia e mudar o paradigma da cultura extrativista, onde colhemos hoje em detrimento do futuro')}.</p>
                </section>

                <section className='flex flex-col items-center w-[100%] lg:w-[1000px] py-10'>
                    <h3 className='font-bold text-center text-white text-xl'>
                        {t('A solução')}
                    </h3>
                    <p className='text-center mb-10 mt-2 text-white'>{t('Token Crédito de Agricultura Regenerativa. Atrelamos o impacto ambiental da nossa rede de produtores a 4 indicadores fundamentais para a prosperidade da vida neste planeta.')}</p>

                    <Image 
                        src={require('../assets/solucao-1.png')}
                        quality={100}
                        alt='Token exemplificativo'
                        className='object-contain lg:h-[400px] lg:object-cover'
                    />
                </section>
                
                <div className='flex w-[100%] justify-center bg-[url("../assets/bg-destaque.png")]'>
                <section className='flex flex-col items-center w-[100%] py-10'>
                    <h3 className='font-bold text-center text-white text-xl'>
                        {t('Comprovantes de ajuda na regeneração')}
                    </h3>
                    <p className='text-center mb-10 lg:w-[1000px] mt-2 text-white'>{t('Veja seu histórico de ajuda, e o quanto você impactou o mundo')}!</p>
                    
                    <div className='flex flex-col lg:flex-row items-center gap-5'>
                        <div>
                            <p className='font-bold text-white'>{t('Certificado')}</p>
                            <Image 
                                src={require('../assets/selo.png')}
                                quality={100}
                                alt='Token exemplificativo'
                                className='object-contain lg:w-[500px] '
                            />
                        </div>

                        <div>
                            <p className='font-bold text-white'>{t('Recibo de contribuição')}</p>
                            <Image 
                                src={require('../assets/recibo.png')}
                                quality={100}
                                alt='Token exemplificativo'
                                className='object-contain lg:w-[300px] '
                            />
                        </div>
                    </div>
                </section>
                </div>

                <section className='flex flex-col justify-center py-10 lg:py-0 w-[100%] lg:w-[1000px] items-center'>
                    <div className='flex flex-col items-center justify-center lg:gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 justify-center lg:h-[450px] lg:w-[400px]'>
                            <h2 className='font-bold text-xl text-white mx-2'>{t('Queremos acelerar nosso desenvolvimento, por isso estamos com a primeira rodada privada de venda dos tokens aberta.')}</h2>
                            <Link 
                                target='_blank'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSfRP4MzGk86ikasBaLMGhsCvbZp67jlVW9ftIoHP0fVXoyRcw/viewform?usp=sf_link' 
                                className='mt-5 bg-blue-600 w-56 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>{t('Quero Investir')}</p>
                            </Link>
                        </div>

                        <Image 
                            src={require('../assets/comunidade.png')}
                            quality={100}
                            alt='Globo tecnológico'
                            className='w-[360px] h-[350px] object-contain hidden lg:flex'
                        />
                    </div>
                </section>

                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-13.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                        <h2 className='font-bold text-center text-white text-3xl lg:w-[800px]'>
                            {t('JUNTOS PODEMOS MUDAR O MUNDO')}!
                        </h2>
                    </div>
                </section>

                <Footer/>

                <section className='flex items-center justify-center h-[80px] w-[100vw] bg-black'>
                    <p className='text-white text-center'>
                        {t('We must change now! We must save the planet and avoid climate disasters. Join us on this fight')}!
                    </p>
                </section>
            </div>

            <BtnWhats/>
        </div>
    )
}

export default Investidor