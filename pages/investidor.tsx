import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { BtnWhats } from "../components/BtnWhats";

const Investidor: NextPage = () => {
    const [chooseMap, setChooseMap] = useState(true);

    useEffect(() => {
        if(chooseMap){
            setTimeout(() => {setChooseMap(false)}, 2000)
        }
        if(!chooseMap){
            setTimeout(() => {setChooseMap(true)}, 2000)
        }
    }, [chooseMap]);


    return(
        <div>
            <Head>
                <title>Investidor - Sintrop</title>
                <meta name='description' content='Invista no futuro do mundo'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center bg-[url("../assets/bg-5.png")] bg-cover lg:h-[500px]'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] flex flex-col items-center p-2 lg:py-20 lg:p-10'>
                        <Header/>
                        <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                            <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Oportunidade para Investidores
                            </h1>

                            <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                Invista na
                                <span className='font-bold text-white'> Regeneração do Planeta</span>.
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

                <section className='flex flex-col items-center w-[100%] bg-white py-10'>
                    <h3 className='font-bold text-center text-[#0A4303] text-xl'>
                        O problema
                    </h3>
                    <p className='text-center mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nesciunt facilis soluta ab sapiente. Ut cupiditate sed repudiandae.</p>
                
                    {chooseMap ? (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/1984.png')}
                                quality={100}
                                className='w-[600px] h-[300px] object-cover'
                            />
                            <p className='font-bold text-[#68A021]'>1984</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <Image
                                alt='Imagem mapa 1986'
                                src={require('../assets/2020.png')}
                                quality={100}
                                className='w-[600px] h-[300px] object-cover'
                            />
                            <p className='font-bold text-[#68A021]'>2020</p>
                        </div>
                    )}

                    <p
                        className='lg:w-[800px] text-justify my-10 mx-2'
                    >Estamos destruindo o nosso planeta. A agricultura degenerativa desmata nossas florestas, acaba com a água, destrói os solos e extingue a biodiversidade. Estamos no caminho do suicídio da nossa sociedade e colapso socioambiental. Não há vida na terra sem a natureza e nós precisamos viver em harmonia e mudar o paradigma da cultura extrativista, onde colhemos hoje em detrimento do futuro.</p>
                </section>

                <section className='flex flex-col justify-center w-[100vw] py-10 items-center bg-[#f8f8f8] lg:gap-40 lg:flex-row'>
                    <div className='items-center justify-center w-[350px] h-[370px] flex'>
                        <Image 
                            src={require('../assets/grafico-1.png')}
                            quality={100}
                            alt='Gráfico demonstrando o caminho'
                            className='object-cover'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[500px]'>
                        <h2 className='font-bold text-xl text-[#68a021]'>O caminho</h2>
                        <p className='text-justify'>A taxa de degeneração atualmente é muito maior que a de regeneração. Esse é o caminho do colapso. Precisamos urgente como sociedade mudar nosso sistema de produção e tornar a agricultura regenerativa. Quando atingirmos o ponto de inflexão o planeta se regenerará e o resultado será a reversão do aquecimento global, aumento da biodiversidade, segurança alimentar e restauração da água.</p>
                    </div>
                </section>

                <section className='flex flex-col items-center w-[100%] bg-white py-10'>
                    <h3 className='font-bold text-center text-[#68a021] text-xl'>
                        A solução
                    </h3>
                    <p className='text-center mb-10'>Token Crédito de Carbono Regenerativo</p>

                    <Image 
                        src={require('../assets/solucao-1.png')}
                        quality={100}
                        alt='Token exemplificativo'
                        className='object-contain lg:h-[400px] lg:object-cover'
                    />
                </section>

                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-6.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                        <h2 className='font-bold text-center text-white text-3xl lg:w-[800px]'>
                            JUNTOS PODEMOS MUDAR O MUNDO!
                        </h2>
                    </div>
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

export default Investidor