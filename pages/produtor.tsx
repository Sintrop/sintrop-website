import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import { Card4 } from "../components/Card4";
import { Header } from "../components/Header";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { BtnWhats } from "../components/BtnWhats";

const Produtor: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Produtor - Sintrop</title>
                <meta name='description' content='Papel do produtor na comunidade'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center p-2 bg-[url("../assets/bg-4.png")] bg-cover lg:py-20 lg:p-10 lg:h-[600px]'>
                    <Header/>
                    <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                        <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                        Oportunidade para Produtores Rurais Regenerativos
                        </h1>

                        <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                        Certificação descentralizada de
                            <span className='font-bold text-white'> Agricultura Regenerativa</span>.
                        </p>

                        <Link
                            href={`https://sintrop.com/whitepaper.pdf`}
                            target='_blank'
                        >
                            <button className='mt-5 bg-[#68A021] w-72 h-14 rounded mb-10'>
                                <p className='font-bold text-white text-lg'>Download Whitepaper</p>
                            </button>
                        </Link>
                    </div>
                </div>

                <section className='flex flex-col justify-center w-[100vw] py-12 items-center bg-white lg:gap-40 lg:flex-row'>
                    <div className='flex items-center justify-center w-[350px] h-[370px] '>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='w-[650px] h-[650px] object-contain'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[500px]'>
                        <h2 className='font-bold text-xl text-[#68a021]'>Token Crédito de Carbono Regenerativo</h2>
                        <p className='text-justify'>Seja recompensado com o token rCC pelo serviço ambiental de regeneração de ecossistemas prestados para a humanidade. </p>
                        <button className='mt-5 bg-[#68A021] w-56 h-14 rounded'>
                            <p className='font-bold text-white text-lg'>Saber Mais</p>
                        </button>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-center w-[100%] py-10 bg-[#f8f8f8] lg:flex-row'>
                    <div className='flex flex-col lg:w-[500px]'>
                        <h3 className='font-bold text-center text-[#0A4303] text-xl mx-2'>
                            Mais transparência: Certificado de agricultura regenerativa
                        </h3>
                        <p className='mx-2 text-center'>Exiba seu nível de sustentabilidade para seus clientes. 
                        Resultado das inspeções público para provar o nível de regeneração de seu trabalho.</p>
                    </div>

                    <div>
                        <Image
                            alt='Embalagem biodegradável com o selo de sustentabilidade'
                            src={require('../assets/embalagem.png')}
                            quality={100}
                            className='lg:w-[400px] object-contain'
                        />
                    </div>
                </section>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center bg-white lg:flex-row lg:gap-10">
                    <div>
                        <Image
                            alt='Índice de sustentabilidade'
                            src={require('../assets/indice.png')}
                            quality={100}
                            className='w-[150px] h-[450px]'
                        />
                    </div>

                    <div className='flex flex-col items-center justify-center lg:w-[600px]'>
                        <h3 className='font-bold text-center text-[#0A4303] text-xl mx-2'>
                            Mensuração de sustentabilidade em escala
                        </h3>
                        <p className='mx-2 text-center'>Evolua o nível de regeneração da sua produção e receba consultoria gratuita para melhorar a sustentabilidade da sua produção.</p>

                        <div className='flex items-center justify-center flex-wrap gap-10 mt-10'>
                            <Card4
                                title='Carbono'
                                img='co2'
                            />
                            <Card4
                                title='Água'
                                img='agua'
                            />
                            <Card4
                                title='Biodiversidade'
                                img='bio'
                            />
                            <Card4
                                title='Solo'
                                img='solo'
                            />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center bg-white">
                    <h3 className='font-bold text-center text-[#0A4303] text-xl'>
                        Distribuição do token
                    </h3>
                    <p className='text-center mx-2'>De acordo com sua nota de sustentabilidade: Quanto mais sustentável, mais créditos.</p>
                    <Image
                        alt='Planilha de distribuição de token dos produtores'
                        src={require('../assets/planilha-1.png')}
                        quality={100}
                        className='hidden lg:flex lg:w-[1000px] h-[300px] object-contain' 
                    />

                    <Image
                        alt='Planilha de distribuição de token dos produtores'
                        src={require('../assets/tabela-mobile-produtor.png')}
                        quality={100}
                        className='lg:hidden object-contain' 
                    />
                </section>

                <section className='flex flex-col justify-center py-10 lg:py-0 w-[100%] items-center bg-[#DAECC4]'>
                    <div className='flex flex-col items-center justify-center lg:gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 justify-center lg:h-[450px] lg:w-[400px]'>
                            <h2 className='font-bold text-xl text-[#68a021] mx-2'>Inscreva-se para participar do primeiro teste do sistema</h2>
                            <p className='text-justify mx-2'>Estamos buscando os primeiros produtores rurais regenerativos para participar do teste de operação. Se você é um produtor que trabalha com agrofloresta, agricultura sintrópica ou qualquer outra forma de regeneração da natureza entre em contato conosco!</p>
                            <Link 
                                target='_blank'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSeh0OgWqr_UuZBy4UUvgWG521zLeMVqx6wQu77mrJdhXDBAPQ/viewform?usp=sf_link' 
                                className='mt-5 bg-[#68A021] w-56 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>Me inscrever</p>
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

export default Produtor;