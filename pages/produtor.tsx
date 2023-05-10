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

    return(
        <>
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
            <div className='flex flex-col items-center w-[100vw] bg-[#062C01]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/new-bg.jpg")] bg-cover bg-center lg:h-[500px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2'>
                    <Header/>
                    <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                        <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                            {t('Oportunidade para Produtores Rurais Regenerativos')}
                        </h1>

                        <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[500px]'>
                            {t('Faça parte da nossa rede de produtores, seja certificado gratuitamente e ganhe o token')}
                            <span className='font-bold text-white'> {t('Crédito de Regeneração')}</span>.
                        </p>

                        <Link
                            href={router.locale === 'pt-BR' ? 
                            'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/whitepaper-en.pdf'}
                            target='_blank'
                        >
                            <button className='mt-5 bg-blue-600 w-72 h-14 rounded mb-10'>
                                <p className='font-bold text-white text-lg'>{t('Baixar')} Whitepaper</p>
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>

                <section className='flex flex-col justify-center lg:w-[1000px] py-12 items-center lg:gap-36 lg:flex-row'>
                    <div className='flex items-center justify-center lg:w-[350px] h-[370px] '>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='lg:w-[300px] lg:h-[300px] object-contain w-[280px]'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[500px]'>
                        <h2 className='font-bold text-xl text-white'>{t('Crédito de Regeneração')}</h2>
                        <p className='text-justify text-white'>{t('Seja recompensado pelo serviço ambiental de regeneração de ecossistemas prestados para a humanidade. Identificamos um problema MUITO grande que o mercado regulado de carbono é um sistema que centraliza renda e não é acessível para o pequeno produtor. Nascemos para oferecer uma solução alternativa, não burocrática e gratuita para que produtores que estejam regenerando o Planeta sejam devidamente recompensados')}.</p>
                    </div> 
                </section>

                <div className='flex w-[100vw] justify-center bg-right lg:bg-center bg-[url("../assets/bg-destaque.png")]'>
                <section className='flex flex-col items-center lg:w-[1000px] justify-center w-[100%] py-10 lg:flex-row'>
                    <div className='flex flex-col lg:w-[500px]'>
                        <h3 className='font-bold text-center text-white text-xl mx-4'>
                            {t('Dados públicos e selo transparente')}
                        </h3>
                        <p className='mt-2 mx-4 text-center text-white'>{t('Prove o nível de regeneração do seu trabalho e forneça informações relevantes para que os consumidores escolham com consciência. O resultado das inspeções recebidas é transparente e os dados são públicos e armazenados de forma descentralizada.')}</p>
                    </div>

                    <div className="mx-4">
                        <Image
                            alt='Embalagem biodegradável com o selo de sustentabilidade'
                            src={require('../assets/embalagem.png')}
                            quality={100}
                            className='lg:w-[600px] object-contain'
                        />
                    </div>
                </section>
                </div>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center lg:w-[1000px]">
                    <h3 className='font-bold text-center text-white text-xl mx-2'>
                        {t('Mensuração de sustentabilidade em escala')}
                    </h3>
                    <p className='mt-2 mx-2 text-center text-white'>{t('Evolua o nível de regeneração da sua produção e receba consultoria gratuita para melhorar a sustentabilidade da sua produção')}.</p>

                    <div className='flex flex-col lg:flex-row items-center justify-center'>
                        <div className="mt-5 lg:mt-0">
                            <Image
                                alt='Índice de sustentabilidade'
                                src={require('../assets/indice.png')}
                                quality={100}
                                className='w-[220px] h-[300px]'
                            />
                        </div>

                        <div className='flex flex-col lg:flex-row items-center justify-center lg:w-[600px] flex-wrap gap-5 mt-5'>
                            <Card4
                                title={t('Carbono')}
                                img='co2'
                            />
                            <Card4
                                title={t('Água')}
                                img='agua'
                            />
                            <Card4
                                title={t('Biodiversidade')}
                                img='bio'
                            />
                            <Card4
                                title={t('Solo')}
                                img='solo'
                            />
                        </div>
                    </div>
                </section>

                <div className='flex w-[100vw] justify-center bg-right lg:bg-center bg-[url("../assets/bg-destaque.png")]'>
                <section className="flex flex-col w-[100%] lg:w-[1000px] items-center py-10 justify-center px-4">
                    <h3 className='font-bold text-center text-white text-xl'>
                        {t('Distribuição do token')}
                    </h3>
                    <p className='text-center mt-2 text-white mb-4'>{t('De acordo com sua nota de sustentabilidade: Quanto mais sustentável, mais créditos. Distribuição algorítimica programada para as próximas decadas')}.</p>
                    <Image
                        alt='Planilha de distribuição de token dos produtores'
                        src={require('../assets/planilha-1.png')}
                        quality={100}
                        className='hidden lg:flex lg:w-[1000px] object-contain' 
                    />

                    <Image
                        alt='Planilha de distribuição de token dos produtores'
                        src={require('../assets/tabela-mobile-produtor.png')}
                        quality={100}
                        className='lg:hidden object-contain mx-4 flex' 
                    />

                    <p className="font-bold text-white">ERA= 6 MESES | EPOCA= 6 ANOS</p>
                </section>
                </div>

                <section className='flex flex-col justify-center pt-10 lg:pt-0 w-[100%] lg:w-[1000px] items-center pb-32 lg:pb-20'>
                    <div className='flex flex-col items-center justify-center lg:gap-20 lg:flex-row'>
                        <div className='flex flex-col gap-2 justify-center lg:h-[450px] lg:w-[400px]'>
                            <h2 className='font-bold text-xl text-white mx-4 lg:mx-0'>{t('Sistema descentralizado e sem intermediários')}</h2>
                            <p className='text-justify mx-4 lg:mx-0 mt-2 text-white'>{t('Usamos a tecnologia da Blockchain, que permite que o Sistema opere de forma descentralizada, com lógica de funcionamento através de algoritmos imutáveis e pagamento das recompensas sem intermediários.')}</p>
                        </div>

                        <Image 
                            src={require('../assets/comunidade.png')}
                            quality={100}
                            alt='Globo tecnológico'
                            className='w-[360px] h-[350px] object-contain hidden lg:flex'
                        />
                    </div>
                </section>

                <section className='flex flex-col lg:w-[1000px] border-2 rounded-lg mt-[-100px] lg:h-[200px] h-[300px] items-center justify-center bg-[url("../assets/bg-green.png")] bg-cover z-50 mx-4'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]'>
                        <h2 className='font-bold text-center text-white text-xl mx-2 lg:w-[800px]'>
                            {t('Faça parte da rede e participe do primeiro teste de operação')}
                        </h2>
                        <p className='mx-2 text-center text-white'>{t('Se você é um produtor que trabalha com agrofloresta, agricultura sintrópica ou qualquer outra forma de regeneração da natureza, inscreva-se no botão abaixo!')}</p>
                        <Link 
                                target='_blank'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSeh0OgWqr_UuZBy4UUvgWG521zLeMVqx6wQu77mrJdhXDBAPQ/viewform?usp=sf_link' 
                                className='mt-5 bg-blue-600 w-56 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>{t('Me inscrever')}</p>
                        </Link>
                    </div>
                </section>

                <section className='flex flex-col w-[100%] h-[500px] mt-[-100px] items-center justify-center bg-[url("../assets/bg-13.png")] bg-cover z-40'>
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
        </>
    )
}

export default Produtor;