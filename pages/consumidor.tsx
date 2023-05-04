import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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

const Consumidor: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const {t} = useTranslation('common');

    return(
        <>
            <Head>
                <Script
                    id="google-tag-manager" strategy="afterInteractive"
                >
                    {"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');"}
                </Script>
                <title>{t('Consumidor')}Solução para consumidores de alimentos - Sintrop</title>
                <meta name='description' content='Solução de transparência sobre origem, processo de produção e nível de sustentabilidade de produtores rurais. Escolha a Regeneração!'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/consumidor"/>
                <meta property="og:title" content="Consumidor da Sintrop"/>
                <meta property="og:description" content="Solução de transparência sobre origem, processo de produção e nível de sustentabilidade de produtores rurais. Escolha a Regeneração!"/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw] bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/new-bg.jpg")] bg-cover bg-center lg:h-[500px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2'>
                        <Header/>
                        <div className='flex flex-col mt-16 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Para todos os consumidores de alimentos')}
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[600px]'>
                                {t('A sua escolha de qual alimento coloca na mesa pode impactar positivamente ou negativamente nosso planeta. Escolha com sabedoria, escolha')}
                                <span className='font-bold text-white'> {t('Produtores Regenerativos')}</span>.
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

                <section className='flex flex-col items-center justify-center w-[100%] py-10 lg:w-[1000px] lg:flex-row'>
                    <div className='flex flex-col lg:w-[500px]'>
                        <h3 className='font-bold text-center text-white text-xl'>
                            {t('Mais transparência')}
                        </h3>
                        <p className="mx-2 text-center mt-2 text-white">{t('Selo com informações e nível de regeneração dos produtores. Escolher comprar dos produtores da nossa rede significa fazer parte da regeneração do planeta, e não da destruição.')}</p>
                    </div>

                    <div>
                        <Image
                            alt='Embalagem biodegradável com o selo de sustentabilidade'
                            src={require('../assets/embalagem.png')}
                            quality={100}
                            className='lg:w-[600px] object-contain'
                        />
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <Image 
                        src={require('../assets/comunidade.png')}
                        quality={100}
                        alt='Globo tecnológico'
                        className='w-[335px] h-[350px] object-contain hidden lg:flex'
                    />
                    <div className="flex flex-col items-center gap-5 lg:items-start lg:w-[400px]">
                        <h3 className="font-bold text-xl text-center mx-2 text-white">{t('Vitrine de produtores regenerativos para você escolher')}</h3>
                    
                        <p className="mx-2 text-center text-white">{t('Veja os produtores regenerativos do sistema')}</p>

                        <Link 
                            target='_blank'
                            href='https://v3-sintrop.netlify.app/' 
                            className='mt-5 mx-2 bg-green-700 w-64 h-14 rounded flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-lg text-center'>{t('Veja os produtores')}</p>
                        </Link>
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
        </>
    )
}

export default Consumidor