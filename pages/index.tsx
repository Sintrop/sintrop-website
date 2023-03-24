import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import ImgComunidade from '../assets/comunidade-pessoas.png';
import { Card1 } from '../components/Card1';
import { Card2 } from '../components/Card2';
import { Card3 } from '../components/Card3';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BtnWhats } from '../components/BtnWhats';

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

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {t} = useTranslation('common');
    
    return (
        <div>
            <Head>
                <title>{t('Sintrop - Tecnologia e Sustentabilidade')}</title>
                <meta name='description' content='Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo.'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com"/>
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade"/>
                <meta property="og:description" content="Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo."/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
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
                            <h2 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                {t('Nossa missão é incentivar a regeneração do planeta')}!
                            </h2>

                            <h3 className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                {t('Sistema descentralizado de certificação de')}
                                <span className='font-bold text-white'> {t('Agricultura Regenerativa')}</span>.
                            </h3>

                            <Link
                                href={`https://website-react-qdux.vercel.app/whitepaper.pdf`}
                                target='_blank'
                                className='mt-5 bg-green-700 w-72 h-14 rounded mb-10 flex items-center justify-center'
                            >
                                <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <section className='flex flex-col items-center bg-white w-[100%] justify-center mt-5 pb-16'>
                    <Image 
                        src={require('../assets/arvore-2.png')}
                        quality={100}
                        alt='Uma planta'
                        className='w-[250px] h-[188px]'
                    />

                    <h2 className='font-bold px-5 text-center text-green-700 text-xl'>
                        Blockchain + {t('Agroecologia para lutar pela')}:
                    </h2>

                    <div className='flex flex-col items-center lg:flex-row mt-5'>
                        <Card1
                            title={t('Agricultura Regenerativa')}
                        />
                        <Card1
                            cardCenter
                            title={t('Biodiversidade do planeta')}
                        />
                        <Card1
                            title={t('Melhor distribuição de renda')}
                        />
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] py-10 items-center bg-green-100 lg:gap-40 lg:flex-row'>
                    <div className='flex items-center justify-center lg:w-[350px] h-[370px]'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='lg:w-[650px] lg:h-[650px] object-contain'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[450px]'>
                        <h2 className='font-bold text-lg text-green-700'>{t('Token Crédito de Agricultura Regenerativa')}</h2>
                        <p className='text-justify'>{t('Token com modelo de distribuição algorítmico programado para ser distribuído ao longo das próximas décadas para produtores regenerativos e comunidade pelos serviços ambientais ecossistêmicos prestados a sociedade')}.</p>
                    </div>
                </section>

                <section className='flex flex-wrap gap-10 justify-center py-10 lg:w-[1000px]'>
                    <Card2
                        title='ISA'
                        description={t('Índice de Sustentabilidade na Agricultura para medir o impacto dos produtores em uma escala')}
                        img='isa'
                    />

                    <Card2
                        title={t('TRANSPARÊNCIA')}
                        description={t('Todos dados são armazenados na rede Ethereum e aberto a todos')}
                        img='transparent'
                    />

                    <Card2
                        title={t('COMUNIDADE')}
                        description={t('Desenvolvido e operado por comunidade')}
                        img='comunidade'
                    />
                    
                    <Card2
                        title='rCC TOKEN'
                        description={t('Token Crédito de Carbono Regenerativo para recompensar produtores sustentáveis e comunidade pelos serviços ambientais')}
                        img='sac-token'
                    />

                    <Card2
                        title='OPEN SOURCE'
                        description={t('Nosso projeto de certificação é colaborativo e de código aberto')}
                        img='open-source'
                    />

                    <Card2
                        title={t('DESCENTRALIZADO')}
                        description={t('Sistema de inspeção descentralizado para auditar os produtores de alimentos')}
                        img='cpu'
                    />
                </section>


                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-3.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                        <h2 className='font-bold text-center text-white text-2xl mx-2 lg:w-[800px]'>
                            {t('Ou a agricultura vai salvar a Terra, ou a destruir. De qual lado você vai estar?')}
                        </h2>

                        <Link
                            href={`https://website-react-qdux.vercel.app/whitepaper.pdf`}
                            target='_blank'
                            className='mt-5 bg-green-700 w-72 h-14 rounded mb-10 flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                        </Link>
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] items-center bg-white'>
                    <div className='flex flex-col items-center gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 h-[450px] lg:w-[400px] pt-24'>
                            <h2 className='font-bold text-xl text-green-700 mx-2'>{t('Desenvolvido e operado por comunidade')}</h2>
                            <p className='text-justify mx-2'>{t('Nossa comunidade é feita de desenvolvedores, pesquisadores, conselheiros, ativistas ambientais e produtores rurais')}.</p>
                            <Link 
                                target='_blank'
                                href='https://discord.com/invite/s5MfeqcPm8' 
                                className='mt-5 bg-green-700 w-64 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>{t('Junte-se ao nosso discord')}</p>
                            </Link>
                        </div>

                        <Image 
                            src={ImgComunidade}
                            quality={100}
                            alt='Pessoas se comunicando'
                            className='hidden w-[440px] h-[350px] object-cover lg:flex '
                        />
                    </div>

                    <div id='comunidade'>
                        <h3 className='font-bold text-center text-green-700 text-xl'>
                            {t('A comunidade')}
                        </h3>

                        <p className='text-center text-black text-lg lg:w-[800px] mx-2'>
                            {t('Nosso projeto é descentralizado e guiado por comunidade. Estamos criando a lógica de funcionamento do Sistema para publicá-la na rede Ethereum e convidar produtores, ativistas, pesquisadores e toda comunidade para participar do Sistema de forma totalmente descentralizada')}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-14 justify-center lg:w-[100%] my-20'>
                        <Card3
                            title={t('Produtor')}
                            description={t("Produtores de alimentos que estejam regenerando o local através do seu trabalho")}
                            img='produtor'
                        />

                        <Card3
                            title={t('Ativista')}
                            description={t("Inspetores do nível de regeneração dos produtores. Responsáveis pela avaliação no local")}
                            img='ativista'
                        />

                        <Card3
                            title={t('Pesquisador')}
                            description={t("Pesquisadores agrocológicos para ensinar a comundiade como regenerar o planeta e contribuir no desenvolvimento do ISA")}
                            img='transparent'
                        />

                        <Card3
                            title={t('Investidor')}
                            description={t("Pessoas e empresas que poderão comprar tokens dos produtores para usar na plataforma para compensar seu impacto negativo do passado")}
                            img='investidor'
                        />

                        <Card3
                            title={t('Consumidor')}
                            description={t("Pessoas e empresas que poderão comprar tokens dos produtores para usar na plataforma para compensar seu impacto negativo do passado")}
                            img='consumidor'
                        />
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

export default Home