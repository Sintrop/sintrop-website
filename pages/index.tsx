import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ImgComunidade from '../assets/comunidade-pessoas.png';
import { Card1 } from '../components/Card1';
import { Card2 } from '../components/Card2';
import { Card3 } from '../components/Card3';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BtnWhats } from '../components/BtnWhats';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sintrop - Agricultura Regenerativa</title>
                <meta name='description' content='Bem vindo ao site da regeneração do mundo'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center p-2 bg-[url("../assets/bg-1.png")] bg-cover lg:py-20 lg:p-10 lg:h-[600px]'>
                    <Header/>
                    <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                        <h1 className='text-2xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                            Nossa missão é incentivar a regeneração do planeta!
                        </h1>

                        <p className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                            Sistema descentralizado de certificação de 
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
                <section className='flex flex-col items-center bg-white w-[100%] justify-center mt-5 pb-16'>
                    <Image 
                        src={require('../assets/arvore-2.png')}
                        quality={100}
                        alt='Uma planta'
                        className='w-[250px] h-[188px]'
                    />

                    <h2 className='font-bold px-5 text-center text-[#0A4303] text-xl'>
                        Blockchain + Agroecologia para lutar pela:
                    </h2>

                    <div className='flex flex-col items-center lg:flex-row mt-5'>
                        <Card1
                            title='Agricultura Regenerativa'
                        />
                        <Card1
                            cardCenter
                            title='Biodiversidade do planeta'
                        />
                        <Card1
                            title='Melhor distribuição de renda'
                        />
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] py-10 items-center bg-green-100 lg:gap-40 lg:flex-row'>
                    <div className='flex items-center justify-center w-[350px] h-[370px]'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='lg:w-[650px] lg:h-[650px] object-contain'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[450px]'>
                        <h2 className='font-bold text-lg text-[#68a021]'>Token Crédito de Carbono Regenerativo</h2>
                        <p className='text-justify'>Token com modelo de distribuição algorítmico programado para ser distribuído ao longo das próximas décadas para produtores regenerativos e comunidade pelos serviços ambientais ecossistêmicos prestados a sociedade.</p>
                        <button className='mt-5 bg-[#68A021] w-56 h-14 rounded'>
                            <p className='font-bold text-white text-lg'>Saber Mais</p>
                        </button>
                    </div>
                </section>

                <section className='flex flex-wrap gap-10 justify-center py-10 lg:w-[1000px]'>
                    <Card2
                        title='ISA'
                        description='Índice de Sustentabilidade na Agricultura para medir o impacto dos produtores em uma escala.'
                        img='isa'
                    />

                    <Card2
                        title='TRANSPARÊNCIA'
                        description='Todos dados são armazenados na rede Ethereum e aberto a todos.'
                        img='transparent'
                    />

                    <Card2
                        title='COMUNIDADE'
                        description='Desenvolvido e operado por comunidade.'
                        img='comunidade'
                    />
                    
                    <Card2
                        title='rCC TOKEN'
                        description='Token Crédito de Carbono Regenerativo para recompensar produtores sustentáveis e comunidade pelos serviços ambientais.'
                        img='sac-token'
                    />

                    <Card2
                        title='OPEN SOURCE'
                        description='Nosso projeto de certificação é colaborativo e de código aberto'
                        img='open-source'
                    />

                    <Card2
                        title='DESCENTRALIZADO'
                        description='Sistema de inspeção descentralizado para auditar os produtores de alimentos.'
                        img='cpu'
                    />
                </section>


                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-3.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                        <h2 className='font-bold text-center text-white text-2xl mx-2 lg:w-[800px]'>
                            Ou a agricultura vai salvar a Terra, ou a destruir. De qual lado você vai estar?
                        </h2>

                        <Link
                            href={`https://sintrop.com/whitepaper.pdf`}
                            target='_blank'
                        >
                            <button className='mt-5 bg-[#68A021] w-72 h-14 rounded mb-10'>
                                <p className='font-bold text-white text-lg'>Download Whitepaper</p>
                            </button>
                        </Link>
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] items-center bg-white'>
                    <div className='flex flex-col items-center gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 h-[450px] lg:w-[400px] pt-24'>
                            <h2 className='font-bold text-xl text-[#68a021] mx-2'>Desenvolvido e operado por comunidade</h2>
                            <p className='text-justify mx-2'>Nossa comunidade é feita de desenvolvedores, pesquisadores, conselheiros, ativistas ambientais e produtores rurais.</p>
                            <Link 
                                target='_blank'
                                href='https://discord.com/invite/s5MfeqcPm8' 
                                className='mt-5 bg-[#68A021] w-64 h-14 rounded flex items-center justify-center mx-2'
                            >
                                <p className='font-bold text-white text-lg text-center'>Junte-se ao nosso discord</p>
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
                        <h3 className='font-bold text-center text-[#0A4303] text-xl'>
                            A comunidade
                        </h3>

                        <p className='text-center text-[#2b2b2b] text-lg lg:w-[800px] mx-2'>
                            Nosso projeto é descentralizado e guiado por comunidade. Estamos criando a lógica de funcionamento do Sistema para publicá-la na rede Ethereum e convidar produtores, ativistas, pesquisadores e toda comunidade para participar do Sistema de forma totalmente descentralizada.
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-14 justify-center lg:w-[100%] my-20'>
                        <Card3
                            title='Produtor'
                            description="Produtores de alimentos que estejam regenerando o local através do seu trabalho."
                            img='produtor'
                        />

                        <Card3
                            title='Ativista'
                            description="Inspetores do nível de regeneração dos produtores. Responsáveis pela avaliação no local."
                            img='ativista'
                        />

                        <Card3
                            title='Pesquisador'
                            description="Pesquisadores agrocológicos para ensinar a comundiade como regenerar o planeta e contribuir no desenvolvimento do ISA"
                            img='transparent'
                        />

                        <Card3
                            title='Investidor'
                            description="Pessoas e empresas que poderão comprar tokens dos produtores para usar na plataforma para compensar seu impacto negativo do passado"
                            img='investidor'
                        />

                        <Card3
                            title='Consumidor'
                            description="Pessoas e empresas que poderão comprar tokens dos produtores para usar na plataforma para compensar seu impacto negativo do passado"
                            img='consumidor'
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

export default Home