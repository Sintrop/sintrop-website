import { useState, useEffect } from 'react';
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
import { useRouter } from 'next/router';

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
    
    return (
        <div>
            <Script id="googleTagManager" src="https://www.googletagmanager.com/gtm.js?id=%27+i+dl" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');`}}/>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZK3VDF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
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
            </Head>
            <div className='flex flex-col items-center w-[100vw] bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[600px] items-center bg-[url("../assets/new-bg.png")] bg-cover bg-center lg:h-[600px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2'>
                        <Header/>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h2 className='text-6xl text-center mt-5 text-white font-bold lg:text-left lg:w-[700px]'>
                                {t('Regeneração do planeta através da agricultura Regenerativa')}!
                            </h2>

                            <h3 className='mt-5 text-lg text-white text-center lg:text-left lg:w-[600px]'>
                                {t('Sistema descentralizado de certificação de regeneração com mecanismo de incentivo de sustentabilidade através do token Crédito de ')}
                                <span className='font-bold text-white'> {t('Agricultura Regenerativa')}</span>.
                            </h3>

                            <Link
                                href={router.locale === 'pt-BR' ? 
                                'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/whitepaper-v1.4-EN.pdf'}
                                target='_blank'
                                className='mt-2 bg-blue-600 w-72 h-14 rounded mb-10 flex items-center justify-center'
                            >
                                <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NETWORK IMPACT */}
                <section className="flex flex-col items-center py-5 rounded-lg border-2 bg-[#0A4303] w-full lg:w-[1000px] lg:mt-[-50px] px-2">
                    <p className="text-white mb-5">Network Impact</p>

                    <div className="flex items-center gap-2 flex-wrap justify-center">

                        <div className="flex flex-col lg:w-[300px] lg:h-[250px] justify-between lg:p-2 lg:border-r-2">
                            <div className="flex items-center gap-2 py-5">
                                <Image
                                    src={require('../assets/token.png')}
                                    alt='Token da sintrop'
                                    className='w-[50px] h-[50px] object-contain'
                                />
                                <div className='flex flex-col'>
                                    <p className='text-white'>REGENERATION CREDIT PRICE</p>
                                    <p className='text-white'>R$ 0,025</p>
                                </div>
                            </div>

                            <div className='lg:border-2'/>

                            <div className="flex items-center gap-2 py-5 border-b-2 lg:border-0">
                                <Image
                                    src={require('../assets/globo-branco.png')}
                                    alt='Token da sintrop'
                                    className='w-[50px] h-[50px] object-contain'
                                />
                                <div className='flex flex-col'>
                                    <p className='text-white'>CIRCULATING MARKET CAP</p>
                                    <p className='text-white'>R$ 0,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[90%] lg:w-[300px] lg:h-[250px] justify-between lg:p-2 lg:border-r-2">
                            <div className="flex lg:items-center lg:justify-between gap-2 py-5">
                                <div className="flex items-center gap-2 w-[50%]">
                                    <div className='flex flex-col font-bold'>
                                        <p className='text-white'>CO²</p>
                                        <Image
                                            src={require('../assets/co2.png')}
                                            alt='Token da sintrop'
                                            className='w-[40px] h-[40px] object-contain'
                                        />
                                    </div>
                                    <p className='text-white font-bold text-3xl flex items-end gap-2'>0 <p className='text-white font-bold text-lg'>ton</p></p>
                                </div>

                                <div className="flex items-center justify-end gap-2 w-[50%]">
                                    <div className='flex flex-col'>
                                        <p className='text-white font-bold'>Solo</p>
                                        <Image
                                            src={require('../assets/solo.png')}
                                            alt='Token da sintrop'
                                            className='w-[30px] h-[30px] object-contain'
                                        />
                                    </div>
                                    <p className='text-white font-bold text-3xl flex items-end gap-2'>0 <p className='text-white font-bold text-lg'>m²</p></p>
                                </div>
                            </div>

                            <div className='lg:border-2'/>

                            <div className="flex items-center justify-between gap-2 py-5 border-b-2 lg:border-0">
                                <div className="flex items-center gap-2 w-[50%]">
                                    <div className='flex flex-col'>
                                        <p className='text-white font-bold'>Biodiversidade</p>
                                        <Image
                                            src={require('../assets/bio.png')}
                                            alt='Token da sintrop'
                                            className='w-[30px] h-[30px] object-contain'
                                        />
                                    </div>
                                    <p className='text-white font-bold text-3xl flex items-end gap-2 ml-[-85px] mt-3'>0 <p className='text-white font-bold text-lg'>uni</p></p>
                                </div>

                                <div className="flex items-center justify-end gap-2 w-[50%]">
                                    <div className='flex flex-col'>
                                        <p className='text-white font-bold'>Água</p>
                                        <Image
                                            src={require('../assets/agua.png')}
                                            alt='Token da sintrop'
                                            className='w-[30px] h-[30px] object-contain'
                                        />
                                    </div>
                                    <p className='text-white font-bold text-3xl flex items-end gap-2'>0 <p className='text-white font-bold text-lg'>m³</p></p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[300px] h-[250px] justify-between lg:p-2 px-5">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={require('../assets/token.png')}
                                    alt='Token da sintrop'
                                    className='w-[50px] h-[50px] object-contain'
                                />
                                <p className='text-white'>TOKEN IMPACT</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className='flex flex-col'>
                                    <Image
                                        src={require('../assets/co2.png')}
                                        alt='Token da sintrop'
                                        className='w-[25px] h-[25px] object-contain'
                                    />
                                </div>
                                <p className='text-white font-bold text-2xl flex items-end gap-2'>0 <p className='text-white font-bold text-base'>ton</p></p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className='flex flex-col'>
                                    <Image
                                        src={require('../assets/solo.png')}
                                        alt='Token da sintrop'
                                        className='w-[25px] h-[25px] object-contain'
                                    />
                                </div>
                                <p className='text-white font-bold text-2xl flex items-end gap-2'>0 <p className='text-white font-bold text-base'>m²</p></p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className='flex flex-col'>
                                    <Image
                                        src={require('../assets/agua.png')}
                                        alt='Token da sintrop'
                                        className='w-[25px] h-[25px] object-contain'
                                    />
                                </div>
                                <p className='text-white font-bold text-2xl flex items-end gap-2'>0 <p className='text-white font-bold text-base'>m³</p></p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className='flex flex-col'>
                                    <Image
                                        src={require('../assets/bio.png')}
                                        alt='Token da sintrop'
                                        className='w-[25px] h-[25px] object-contain'
                                    />
                                </div>
                                <p className='text-white font-bold text-2xl flex items-end gap-2'>0 <p className='text-white font-bold text-base'>uni</p></p>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row items-center w-full justify-between lg:px-20 mt-5'>
                        <p className='text-[#ABE056] font-bold'>PRODUTORES: 0</p>
                        <p className='text-[#ABE056] font-bold'>ATIVISTAS: 0</p>
                        <p className='text-[#ABE056] font-bold'>PESQUISADORES: 0</p>
                    </div>
                </section>
                {/* NETWORK IMPACT */}
                
                <section className='flex flex-col items-center w-[100%] py-14'>
                    <h3 className='font-bold text-center text-3xl text-white'>
                        {t('O problema')}
                    </h3>
                    <p
                        className='lg:w-[1000px] text-justify my-10 mx-2 text-white'
                    >{t('O ser humano vem degradando a Natureza desde que dominou a agricultura, porém nas últimas décadas vimos uma intensificação alarmante dessa degradação. Veja nas imagens abaixo a comparação do território da América do Sul entre os anos de 1985 e 2020.')}.</p>
                
                    {chooseMap ? (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/1984.png')}
                                quality={100}
                                className='w-[600px] h-[500px] object-cover'
                            />
                            <p className='font-bold text-green-700'>1984</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/2020.png')}
                                quality={100}
                                className='w-[600px] h-[500px] object-cover'
                            />
                            <p className='font-bold text-green-700'>2020</p>
                        </div>
                    )}
                </section>

                <div className='flex w-[100%] justify-center bg-[url("../assets/bg-destaque.png")]'>
                <section className='flex flex-col justify-center lg:w-[1000px] py-10 items-center'>
                    <h3 className='font-bold text-center text-3xl text-white'>
                        {t('A solução')}
                    </h3>
                    <div className='flex flex-col lg:flex-row items-center mt-5 gap-5'>
                        <div className='flex items-center justify-center py-5'>
                            <Image 
                                src={require('../assets/token-solução.png')}
                                quality={100}
                                alt='Logo da sintrop'
                                className='w-[90%] lg:w-[400px] object-contain'
                            />
                        </div>
                        
                        <div className='flex flex-col px-5 gap-3 lg:w-[450px]'>
                            <h2 className='font-bold text-lg text-white'>{t('Token Crédito de Carbono Regenerativo')}</h2>
                            <p className='text-justify text-white'>{t('Token com modelo de distribuição algorítmico programado para ser distribuído ao longo das próximas décadas para produtores regenerativos e comunidade pelos serviços ambientais ecossistêmicos prestados a sociedade')}.</p>
                        </div>
                    </div>
                </section>
                </div>

                <section className='flex flex-col justify-center bg-[#0a4303] lg:w-[1000px] my-20 py-5 items-center rounded-md border-2 mx-2'>
                    <p className='font-bold text-lg text-white px-2 text-center'>{t('Blockchain + Agroecologia para lutar pela:')}</p>
                
                    <div className='flex flex-col lg:flex-row items-center gap-2 justify-between w-full px-5 mt-5'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-white font-bold lg:text-xl'>- Agrofloresta</p>
                            <p className='text-white font-bold lg:text-xl'>- Agricultura regenerativa</p>
                            <p className='text-white font-bold lg:text-xl'>- Melhor distribuição de renda</p>
                            <p className='text-white font-bold lg:text-xl'>- Agricultura familiar</p>
                            <p className='text-white font-bold lg:text-xl'>- Segurança alimentar</p>
                            <p className='text-white font-bold lg:text-xl'>- Reversão do aquecimento global</p>
                            <p className='text-white font-bold lg:text-xl'>- Manutenção da água</p>
                        </div>
                        <Image
                            src={require('../assets/imagens-floresta.png')}
                            alt='Quatro imagens de florestas regeneradas'
                            className='lg:w-[400px] object-contain'
                        />
                    </div>

                    <Image
                        src={require('../assets/eth.png')}
                        alt='Simbolo do Ethereum'
                        className='hidden lg:flex lg:w-[100px] object-contain absolute ml-[-700px] mt-[-450px]'
                    />
                </section>

                <section className='flex flex-wrap gap-10 justify-center mt-10 mb-24 lg:w-[1000px]'>
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
                        img='puzzle'
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
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.7)]'>
                        <h2 className='font-bold text-center text-white text-2xl mx-2 lg:w-[800px]'>
                            {t('Ou a agricultura vai salvar a Terra, ou a destruir. De qual lado você vai estar?')}
                        </h2>

                        <Link
                            href={`https://website-react-qdux.vercel.app/whitepaper.pdf`}
                            target='_blank'
                            className='mt-5 bg-blue-600 w-72 h-14 rounded mb-10 flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                        </Link>
                    </div>
                </section>

                <section className='flex flex-col lg:w-[1000px] border-2 rounded-lg mt-[-100px] h-[200px] items-center justify-center bg-[url("../assets/bg-green.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                        <h2 className='font-bold text-center text-white text-xl lg:w-[800px]'>
                            {t('Nossa missão é regenerar o planeta')}!
                        </h2>
                        <p className='mx-2 text-center text-white'>{t('Junte-se a nós agora mesmo')}</p>
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] items-center mt-10 pb-14'>

                    <div id='comunidade'>
                        <h3 className='font-bold text-center text-white text-xl'>
                            {t('A comunidade')}
                        </h3>

                        <p className='text-center text-white text-lg lg:w-[800px] mx-2 mt-5'>
                            {t('Nosso projeto é descentralizado e guiado por comunidade. Estamos criando a lógica de funcionamento do Sistema para publicá-la na rede Ethereum e convidar produtores, ativistas, pesquisadores e toda comunidade para participar do Sistema de forma totalmente descentralizada')}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-14 justify-center lg:w-[1000px] my-20'>
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

                    <div className='flex flex-col items-center lg:flex-row gap-5'>
                        <div className='flex flex-col gap-2 lg:w-[400px]'>
                            <h2 className='font-bold text-xl text-white mx-2'>{t('Desenvolvido e operado por comunidade')}</h2>
                            <p className='text-justify mx-2 text-white'>{t('Nossa comunidade é feita de desenvolvedores, pesquisadores, conselheiros, ativistas ambientais e produtores rurais')}.</p>
                            <Link 
                                target='_blank'
                                href='https://discord.com/invite/s5MfeqcPm8' 
                                className='mt-5 bg-blue-600 w-64 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>{t('Junte-se ao nosso discord')}</p>
                            </Link>
                        </div>

                        <Image 
                            src={require('../assets/comunidade.png')}
                            quality={100}
                            alt='Pessoas se comunicando'
                            className='hidden w-[440px] object-contain lg:flex '
                        />
                    </div>
                </section>

                <Footer/>

                <section className='flex items-center justify-center h-[80px] w-[100vw] bg-[#062C01]'>
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