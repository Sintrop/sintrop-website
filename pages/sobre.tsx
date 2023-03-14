import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { BtnWhats } from "../components/BtnWhats";

const Sobre: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Sobre a Sintrop</title>
                <meta name='description' content='Venha conhecer nosso propósito'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center bg-[url("../assets/bg-11.png")] bg-cover lg:h-[700px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                            <h1 className='text-3xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Sobre nós
                            </h1>

                            <p className='mt-5 text-xl text-white text-center lg:text-left lg:w-[700px]'>
                                Conheça nossa história e como pretendemos  
                                <span className='font-bold text-white'> Mudar o mundo!</span>.
                            </p>

                            <Link
                                href={`https://sintrop.com/whitepaper.pdf`}
                                target='_blank'
                            >
                                <button className='mt-5 bg-[#68A021] w-72 h-16 rounded mb-10'>
                                    <p className='font-bold text-white text-xl'>Download Whitepaper</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <div className="flex flex-col gap-5 lg:w-[700px]">
                        <h3 className="font-bold text-2xl mx-2">NOSSA <span className="text-[#68a021]">VISÃO</span></h3>
                        <h3 className="font-bold text-2xl mx-2 text-gray-600">Precisamos mudar <span className="text-gray-700">AGORA</span></h3>
                    
                        <p className="mx-2">A agricultura industrial tem sido uma das principais causas do aquecimento global e contribui significativamente negativamente para a vida do nosso planeta. Devemos mudar agora para evitar sérios problemas ambientais. Para produzir os alimentos do mundo não precisamos matar lentamente a terra usando muitos produtos químicos, destruindo e erodindo os solos, matando toda a biodiversidade local e usando muitos recursos naturais.</p>

                        <p className="mx-2">Nossa visão dos sonhos é um mundo onde 100% dos alimentos sejam produzidos sem prejudicar o planeta. Com soluções internas sustentáveis ou técnicas regenertaivas que tornam o mundo um lugar melhor a cada safra, capture muito CO2 atmosférico e utilize os recursos naturais de forma cíclica.</p>
                    </div>
                    <Image
                        alt='Imagem de uma planta conectada ao chão por meio da tecnologia'
                        src={require('../assets/planta-2.png')}
                        className='object-contain w-[300px]'
                    />
                </section>

                <section className="flex flex-col bg-[#f8f8f8] w-[100%] lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <Image
                        alt='Imagem de uma planta conectada ao chão por meio da tecnologia'
                        src={require('../assets/maos.png')}
                        quality={100}
                        className='object-contain lg:w-[480px]'
                    />
                    <div className="flex flex-col gap-5 lg:w-[500px]">
                        <h3 className="font-bold text-2xl">NOSSOS <span className="text-[#68a021]">VALORES</span></h3>
                    
                        <p>Distribuição de renda</p>

                        <p>Defesa da natureza</p>

                        <p>Descentralização</p>

                        <p>Transparência</p>
                    </div>
                    
                </section>

                <section className="flex flex-col bg-white w-[100%] lg:flex-row py-10 items-center justify-center lg:gap-20">
                    <div className="flex flex-col items-center gap-5 lg:w-[800px]">
                        <h3 className="font-bold text-2xl mx-2">NOSSA <span className="text-[#68a021]">MISSÃO</span></h3>
                    
                        <p className="mx-2 text-center">Nossa luta é para defender e regenerar a natureza. Precisamos urgentemente regenerar mais área do que degradamos, esse é o caminho para resolver os maiores problemas da humanidade como o aquecimento global, escassez hídrica, extinção da biodiversidade e insegurança alimentar.</p>
                    </div>
                </section>

                <section className="flex flex-col bg-white w-[100%] py-10 items-center justify-center">
                    <h3 className="font-bold text-2xl mx-2">NOSSA <span className="text-[#68a021]">HISTÓRIA</span></h3>
                    <Image
                        alt='Imagem da linha do tempo da sintrop'
                        src={require('../assets/nossa-hist.png')}
                        quality={100}
                        className='lg:mt-[-40px]'
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

export default Sobre;