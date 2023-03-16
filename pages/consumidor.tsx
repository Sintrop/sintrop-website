import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { BtnWhats } from "../components/BtnWhats";

const Consumidor: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Consumidor - Sintrop</title>
                <meta name='description' content='O verdadeiro impactado da história'/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com/consumidor"/>
                <meta property="og:title" content="Consumidor da Sintrop"/>
                <meta property="og:description" content="O verdadeiro impactado pelo sistema"/>
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:image"content="a definir"/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] h-[500px] items-center bg-[url("../assets/bg-11.png")] bg-cover bg-center lg:h-[600px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col mt-16 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Para todos os consumidores de alimentos
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                A sua escolha de qual alimento coloca na mesa pode impactar positivamente ou negativamente nosso planeta. Escolha com sabedoria, escolha
                                <span className='font-bold text-white'> Produtores Regenerativos</span>.
                            </p>

                            <Link
                                href={`https://website-react-qdux.vercel.app/whitepaper.pdf`}
                                target='_blank'
                            >
                                <button className='mt-5 bg-[#68A021] w-72 h-14 rounded mb-10'>
                                    <p className='font-bold text-white text-lg'>Download Whitepaper</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section className='flex flex-col items-center justify-center w-[100%] py-10 bg-white lg:flex-row'>
                    <div className='flex flex-col lg:w-[500px]'>
                        <h3 className='font-bold text-center text-[#0A4303] text-xl'>
                            Mais transparência
                        </h3>
                        <p className="mx-2 text-center">Selo com informações e nível de regeneração dos produtores</p>
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

                <section className="flex flex-col lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <Image 
                        src={require('../assets/globo.png')}
                        quality={100}
                        alt='Globo tecnológico'
                        className='w-[335px] h-[350px] object-contain'
                    />
                    <div className="flex flex-col items-center gap-5 lg:items-start lg:w-[400px]">
                        <h3 className="font-bold text-xl text-center mx-2">Vitrine de produtores regenerativos para você escolher</h3>
                    
                        <p className="mx-2 text-center">Veja os produtores regenerativos do sistema</p>

                        <Link 
                            target='_blank'
                            href='https://v3-sintrop.netlify.app/' 
                            className='mt-5 mx-2 bg-[#68A021] w-64 h-14 rounded flex items-center justify-center'
                        >
                            <p className='font-bold text-white text-lg text-center'>Veja os produtores</p>
                        </Link>
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

export default Consumidor