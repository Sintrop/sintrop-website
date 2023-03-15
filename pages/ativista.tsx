import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { BtnWhats } from "../components/BtnWhats";

const Ativista: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Ativista - Sintrop</title>
                <meta name='description' content='O papel do ativista dentro da Sintrop'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center bg-[url("../assets/bg-7.png")] bg-cover lg:h-[500px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Oportunidade para Ativistas Ambientais Agroecológicos
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
                </div>

                <h3 className='font-bold text-center text-[#68A021] text-xl mt-10'>
                    Faça parte da rede de avaliadores do sistema
                </h3>
                <p className='mx-2 text-center'>Faça parte da rede de ativistas do Sistema e realize inspeções presenciais para mensurar o nível de regeneração dos produtores rurais</p>

                <section className='flex flex-col justify-center w-[100vw] py-12 items-center bg-white lg:gap-40 lg:flex-row'>
                    <div className='items-center justify-center w-[350px] h-[370px] flex'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='w-[650px] h-[650px] ml-[-20px] object-cover lg:ml-0'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[500px]'>
                        <h2 className='font-bold text-xl text-[#68a021]'>Token Crédito de Carbono Regenerativo</h2>
                        <p className='text-justify'>Seja recompensado com o token rCC pelo serviço de inspeção e ativismo ambiental prestado ao Sistema. Realize inspeções periodicamente.</p>
                        <button className='mt-5 bg-[#68A021] w-56 h-16 rounded'>
                            <p className='font-bold text-white text-lg'>Saber Mais</p>
                        </button>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-center w-[100%] py-10 bg-[#f8f8f8] lg:flex-row'>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-center text-[#0A4303] text-xl'>
                            Mais transparência
                        </h3>
                        <p>Faça a verificação das informações</p>
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

                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-8.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]'>
                        <h2 className='font-bold text-center text-white text-2xl lg:w-[800px]'>
                            Ajude a construir nossa rede de Produtores Regenerativos!
                        </h2>

                        <Link 
                            href='/produtor'
                            className='mt-10 bg-[#68A021] w-72 h-14 rounded flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-lg'>Saber Mais</p>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center bg-white">
                    <h3 className='font-bold text-center text-[#68A021] text-xl'>
                        Distribuição do token
                    </h3>
                    <p className='text-center mx-2'>Distribuição de tokens de acordo com a quantidade de inspeções realizadas.</p>
                    <Image
                        alt='Planilha de distribuição de token dos produtores'
                        src={require('../assets/planilha-2.png')}
                        quality={100}
                        className='lg:w-[1000px] h-[300px] object-contain' 
                    />
                </section>

                <Footer/>

                <section className='flex items-center justify-center h-[80px] w-[100vw] bg-black'>
                    <p className='text-white text-center'>
                        © We must change now! We must save the planet and avoid climate disasters. Join us on this fight!
                    </p>
                </section>
            </div>

            <BtnWhats/>
        </div>
    )
}

export default Ativista;