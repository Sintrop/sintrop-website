import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { InferGetStaticPropsType } from 'next'
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

const Sobre: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const {t} = useTranslation('common');

    return(
        <>
            <Head>
                <title>{t('Sobre a')} Sintrop - Sobre nós</title>
                <meta name='description' content={`${t('Conheça mais sobre o nosso projeto e como pretendemos regenerar o mundo')}!`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/sobre"/>
                <meta property="og:title" content="Sobre a Sintrop"/>
                <meta property="og:description" content={`${t('Conheça mais sobre o nosso projeto e como pretendemos regenerar o mundo')}!`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-full bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/new-bg.jpg")] bg-cover bg-center lg:h-[500px]'>
                    <div className='w-full h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center'>
                        <Header/>
                        <div className='flex flex-col mt-44 items-center w-[100%] lg:items-start lg:w-[1000px]'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Sobre nós')}
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                {t('Conheça nossa história e como pretendemos')}  
                                <span className='font-bold text-white'> {t('Mudar o mundo')}!</span>.
                            </p>

                            <Link
                                href={router.locale === 'pt-BR' ? 
                                'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/whitepaper-v1.4-EN.pdf'}
                                target='_blank'
                            >
                                <button className='mt-5 bg-blue-600 w-72 h-14 rounded mb-10'>
                                    <p className='font-bold text-white text-xl'>{t('Baixar')} Whitepaper</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col lg:flex-row py-10 items-center justify-center lg:gap-20 lg:w-[1000px]">
                    <div className="flex flex-col gap-5 lg:w-[700px]">
                        <h3 className="font-bold text-xl mx-4 text-white">{t('NOSSA')} <span className="text-green-700">{t('VISÃO')}</span></h3>
                        <h3 className="font-bold text-xl mx-4 text-white">{t('Precisamos mudar')} <span className="text-white">{t('AGORA')}</span></h3>
                    
                        <p className="mx-4 text-white">{t('A agricultura industrial tem sido uma das principais causas do aquecimento global e contribui muito negativamente para a vida do nosso planeta. Devemos mudar agora para evitar sérios problemas ambientais. Para produzir os alimentos do mundo não precisamos matar lentamente a terra usando muitos produtos químicos, destruindo e erodindo os solos, matando toda a biodiversidade local e usando muitos recursos naturais')}.</p>

                        <p className="mx-4 text-white">{t('Nossa visão dos sonhos é um mundo onde 100% dos alimentos sejam produzidos sem prejudicar o planeta. Com soluções técnicas regenerativas que tornam o mundo um lugar melhor a cada safra, capturando muito CO2 atmosférico e utilizando os recursos naturais de forma cíclica')}.</p>
                    </div>
                    <Image
                        alt='Imagem de uma planta conectada ao chão por meio da tecnologia'
                        src={require('../assets/planta-2.png')}
                        className='object-contain w-[300px]'
                    />
                </section>

                <section className='flex flex-col w-[100%] lg:h-[500px] items-center justify-center bg-[url("../assets/bg-9.png")] bg-cover'>
                    <div className='flex items-center justify-center py-10 flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.7)]'>
                        <h3 className="font-bold text-white text-xl mx-2">{t('NOSSOS')} <span className="text-green-700">{t('VALORES')}</span></h3>

                        <div className="flex flex-col items-center gap-5 mt-10 lg:flex-row">
                            <div className="flex flex-col items-center">
                                <Image
                                    alt='Icone de descentralização'
                                    src={require('../assets/DESCENTRALIZADO.png')}
                                    className='w-[200px] h-[200px]'
                                />
                                <p className="text-white text-lg">{t('Descentralização')}</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image
                                    alt='Icone de defesa da natureza'
                                    src={require('../assets/NATUREZA.png')}
                                    className='w-[200px] h-[200px]'
                                />
                                <p className="text-white text-lg">{t('Defesa da natureza')}</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image
                                    alt='Icone de deistribuição de renda'
                                    src={require('../assets/RENDA.png')}
                                    className='w-[200px] h-[200px]'
                                />
                                <p className="text-white text-lg">{t('Distribuição de renda')}</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image
                                    alt='Icone de transparência'
                                    src={require('../assets/TRANSPARÊNCIA.png')}
                                    className='w-[200px] h-[200px]'
                                />
                                <p className="text-white text-lg">{t('Transparência')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col w-[100%] lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <div className="flex flex-col items-center gap-5 lg:w-[1000px]">
                        <h3 className="font-bold text-xl mx-4 text-white">{t('NOSSA')} <span className="text-green-700">{t('MISSÃO')}</span></h3>
                    
                        <p className="mx-4 text-center text-white">{t('Nossa luta é para defender e regenerar a natureza. Precisamos urgentemente regenerar mais área do que degradamos, esse é o caminho para resolver os maiores problemas da humanidade como o aquecimento global, escassez hídrica, extinção da biodiversidade e insegurança alimentar')}.</p>
                    </div>
                </section>

                <section className="flex flex-col lg:w-[1000px] py-10 items-center justify-center mx-4">
                    <h3 className="font-bold text-xl">{t('NOSSA')} <span className="text-green-700">{t('HISTÓRIA')}</span></h3>
                    <Image
                        alt='Imagem da linha do tempo da sintrop'
                        src={require('../assets/nossa-hist.png')}
                        quality={100}
                        className='lg:w-[400px] object-contain'
                    />
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

export default Sobre;