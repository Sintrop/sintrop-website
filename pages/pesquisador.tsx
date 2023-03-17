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
    const {t} = useTranslation('common');

    return(
        <div>
            <Head>
                <title>{t('Pesquisador')} - Sintrop</title>
                <meta name='description' content='Invista no futuro do mundo'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/pesquisador"/>
                <meta property="og:title" content="Pesquisador - Sintrop"/>
                <meta property="og:description" content="O papel do pesquisador dentro da Sintrop"/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');`}}></Script>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZK3VDF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/bg-11.png")] bg-cover bg-center lg:h-[600px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Oportunidade para Pesquisadores Agroecológicos')}
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                {t('Certificação descentralizada de')}
                                <span className='font-bold text-white'> {t('Agricultura Regenerativa')}</span>.
                            </p>

                            <Link
                                href={`https://website-react-qdux.vercel.app/whitepaper.pdf`}
                                target='_blank'
                            >
                                <button className='mt-5 bg-green-700 w-72 h-14 rounded mb-10'>
                                    <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section className='flex flex-col w-[100%] h-[200px] items-center justify-center bg-[url("../assets/bg-green.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)] px-2'>
                        <h2 className='font-bold text-center text-white text-xl lg:w-[800px]'>
                            {t('Faça parte da rede de pesquisadores do sistema')}!
                        </h2>
                        <p className='mx-2 text-center text-white'>{t('Buscamos pesquisadores agroecológicos para desenvolver o método de avaliação e auxiliar no processo de educação e ensino dos produtores rurais')}.</p>
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] py-12 items-center bg-white lg:gap-40 lg:flex-row'>
                    <div className='items-center justify-center lg:w-[350px] h-[370px] flex'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='lg:w-[650px] lg:h-[650px] object-contain'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[500px]'>
                        <h2 className='font-bold text-xl text-green-700'>{t('Token Crédito de Carbono Regenerativo')}</h2>
                        <p className='text-justify'>{t('Seja recompensado com o token rCC  pelo serviços de pesquisa e ensino sobre agroecologia. Contribua com o ecossistema publicando suas pesquisas e descobertas que auxiliem na regeneração do planeta')}.</p>
                    </div>
                </section>

                <section className="flex items-center flex-wrap gap-5 justify-center w-[100%]">
                    <Card5
                        title="1"
                        text={t("Pesquise sobre práticas  e manejos de agricultura regenerativa")}
                    />

                    <Card5
                        title="2"
                        text={t("Publique suas pesquisas para o mundo")}
                    />

                    <Card5
                        title="3"
                        text={t("Receba o Token Crédito de carbono Regenerativo")}
                    />
                </section>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center bg-white">
                    <h3 className='font-bold text-center text-green-700 text-xl'>
                        {t('Distribuição do token')}
                    </h3>
                    <p className='text-center mx-2'>{t('Distribuição de tokens de acordo com a quantidade de pesquisas realizadas')}.</p>
                    <Image
                        alt='Planilha de distribuição de token dos pesquisadores'
                        src={require('../assets/planilha-3.png')}
                        quality={100}
                        className='hidden lg:flex lg:w-[1000px] h-[300px] object-contain' 
                    />

                    <Image
                        alt='Planilha de distribuição de token dos pesquisadores'
                        src={require('../assets/tabela-mobile-pesquisador.png')}
                        quality={100}
                        className='lg:hidden lg:w-[1000px] h-[300px] object-contain' 
                    />
                </section>

                <section className='flex flex-col justify-center py-10 lg:py-0 w-[100%] items-center bg-[#DAECC4]'>
                    <div className='flex flex-col items-center justify-center lg:gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 justify-center lg:h-[450px] lg:w-[400px]'>
                            <h2 className='font-bold text-xl text-green-700 mx-2'>{t('Inscreva-se para participar do primeiro teste do sistema')}</h2>
                            <p className='text-justify mx-2'>{t('Buscamos pesquisadores agroecológicos para desenvolver o método de avaliação e auxiliar no processo de educação e ensino dos produtores rurais')}!</p>
                            <Link 
                                target='_blank'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSeh0OgWqr_UuZBy4UUvgWG521zLeMVqx6wQu77mrJdhXDBAPQ/viewform?usp=sf_link' 
                                className='mt-5 bg-green-700 w-56 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>{t('Me inscrever')}</p>
                            </Link>
                        </div>

                        <Image 
                            src={require('../assets/globo.png')}
                            quality={100}
                            alt='Globo tecnológico'
                            className='w-[360px] h-[350px] object-contain'
                        />
                    </div>
                </section>

                <Footer/>

                <section className='flex items-center justify-center h-[80px] w-[100vw] bg-black'>
                    <p className='text-white text-center'>
                        We must change now! We must save the planet and avoid climate disasters. Join us on this fight!
                    </p>
                </section>
            </div>

            <BtnWhats/>
        </div>
    )
}

export default Pesquisador;