import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import Link from "next/link";
import { Footer } from "../components/Footer";

const Ativista: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Ativista - Sintrop</title>
                <meta name='description' content='O papel do ativista dentro da Sintrop'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center bg-[url("../assets/bg-7.png")] bg-cover lg:h-[700px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                            <h1 className='text-3xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Oportunidade para Ativistas Ambientais Agroecológicos
                            </h1>

                            <p className='mt-5 text-xl text-white text-center lg:text-left lg:w-[700px]'>
                                Certificação descentralizada de
                                <span className='font-bold text-white'> Agricultura Regenerativa</span>.
                            </p>

                            <button className='mt-5 bg-[#68A021] w-72 h-16 rounded mb-10'>
                                <p className='font-bold text-white text-xl'>Download Whitepaper</p>
                            </button>
                        </div>
                    </div>
                </div>

                <h3 className='font-bold text-center text-[#68A021] text-2xl mt-10'>
                    Faça parte da rede de avaliadores do sistema
                </h3>
                <p className='mx-2 text-center'>Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto.</p>

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
                        <h2 className='font-bold text-2xl text-[#68a021]'>Ganhe o token Crédito de Carbono Regenerativo pelo serviço ambiental prestado para a sociedade.</h2>
                        <p className='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many infancy.</p>
                        <button className='mt-5 bg-[#68A021] w-56 h-16 rounded'>
                            <p className='font-bold text-white text-xl'>Saber Mais</p>
                        </button>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-center w-[100%] py-10 bg-[#f8f8f8] lg:flex-row'>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-center text-[#0A4303] text-2xl'>
                            Mais transparência
                        </h3>
                        <p>Faça a verificação das informações</p>
                    </div>

                    <div>
                        <Image
                            alt='Embalagem biodegradável com o selo de sustentabilidade'
                            src={require('../assets/embalagem.png')}
                            quality={100}
                        />
                    </div>
                </section>

                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-8.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]'>
                        <h2 className='font-bold text-center text-white text-3xl lg:w-[800px]'>
                            Ajude a construir nossa rede de Produtores Regenerativos!
                        </h2>

                        <Link 
                            href='/produtor'
                            className='mt-10 bg-[#68A021] w-72 h-16 rounded flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-xl'>Saber Mais</p>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col w-[100%] items-center py-10 justify-center bg-white">
                    <h3 className='font-bold text-center text-[#68A021] text-2xl'>
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

                <section className='flex flex-col bg-[#f1f1f1] gap-20 w-[100%] py-10 justify-center lg:flex-row'>
                    <div className='flex flex-col lg:w-[400px]'>
                        <h3 className='font-bold text-2xl text-center'>Junte-se com a gente</h3>
                        <p className='text-xl text-center mx-2'>
                            Inscreva-se para participar do primeiro teste de operação do sistema.
                        </p>
                    </div>
                    <div className='flex flex-col gap-5 p-5 bg-white rounded-lg lg:w-[400px]'>
                        <h2 className='text-black text-2xl font-bold'>Registrar</h2>
                        <input
                            placeholder='Seu nome'
                            className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        />
                        <input
                            placeholder='Email'
                            className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        />
                        <input
                            placeholder='DDD + Telefone'
                            className='w-[100%] h-10 bg-white p-2 rounded-lg border-2'
                        />

                        <button className='w-[100%] h-10 rounded-lg text-white font-bold bg-[#68A021] flex items-center justify-center'>
                            Registrar
                        </button>
                    </div>
                </section>

                <Footer/>

                <section className='flex items-center justify-center h-[80px] w-[100vw] bg-black'>
                    <p className='text-white text-center'>
                        © We must change now! We must save the planet and avoid climate disasters. Join us on this fight!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Ativista;