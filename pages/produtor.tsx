import type { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import { Card4 } from "../components/Card4";
import { Header } from "../components/Header";
import Link from "next/link";
import { Footer } from "../components/Footer";

const Produtor: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Produtor - Sintrop</title>
                <meta name='description' content='Papel do produtor na comunidade'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center p-2 bg-[url("../assets/bg-4.png")] bg-cover lg:py-20 lg:p-10 lg:h-[700px]'>
                    <Header/>
                    <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                        <h1 className='text-3xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                        Oportunidade para Produtores Rurais Regenerativos
                        </h1>

                        <p className='mt-5 text-xl text-white text-center lg:text-left lg:w-[700px]'>
                        Certificação descentralizada de
                            <span className='font-bold text-white'> Agricultura Regenerativa</span>.
                        </p>

                        <button className='mt-5 bg-[#68A021] w-72 h-16 rounded mb-16'>
                            <p className='font-bold text-white text-xl'>Download Whitepaper</p>
                        </button>
                    </div>
                </div>

                <section className='flex justify-center w-[100vw] py-12 items-center bg-white gap-40'>
                    <div className='hidden items-center justify-center w-[350px] h-[370px] lg:flex'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='w-[650px] h-[650px] object-cover'
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
                    <div className='flex flex-col items-start'>
                        <h3 className='font-bold text-center text-[#0A4303] text-2xl'>
                            Mais transparência
                        </h3>
                        <p>Exiba seu nível de sustentabilidade para seus clientes</p>
                    </div>

                    <div>
                        <Image
                            alt='Embalagem biodegradável com o selo de sustentabilidade'
                            src={require('../assets/embalagem.png')}
                            quality={100}
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
                        <h3 className='font-bold text-center text-[#0A4303] text-2xl'>
                            Mensuração de sustentabilidade em escala
                        </h3>
                        <p>Consultoria gratuita para melhorar a sustentabilidade da sua produção.</p>

                        <div className='flex flex-wrap gap-10 mt-10'>
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
                    <h3 className='font-bold text-center text-[#0A4303] text-2xl'>
                        Distribuição do token
                    </h3>
                    <p>De acordo com sua nota de sustentabilidade: Quanto mais sustentável, mais créditos.</p>
                </section>

                <section className='flex flex-col justify-center w-[100%] items-center bg-[#DAECC4]'>
                    <div className='flex flex-col items-center gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 h-[450px] lg:w-[400px] pt-24'>
                            <h2 className='font-bold text-2xl text-[#68a021]'>Inscreva-se para participar do primeiro teste do sistema</h2>
                            <p className='text-justify'>Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto, Escrever texto.</p>
                            <Link 
                                target='_blank'
                                href='https://google.com.br' 
                                className='mt-5 bg-[#68A021] w-56 h-16 rounded flex items-center justify-center'
                            >
                                <p className='font-bold text-white text-xl text-center'>Me inscrever</p>
                            </Link>
                        </div>

                        <Image 
                            src={require('../assets/globo.png')}
                            quality={100}
                            alt='Globo tecnológico'
                            className='w-[335px] h-[350px] object-cover'
                        />
                    </div>
                </section>

                <section className='flex flex-col bg-[#f1f1f1] gap-20 w-[100%] py-10 justify-center lg:flex-row'>
                    <div className='flex flex-col lg:w-[400px]'>
                        <h3 className='font-bold text-2xl'>Junte-se com a gente</h3>
                        <p className='text-xl'>
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

export default Produtor;