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

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sintrop - Agricultura Regenerativa</title>
                <meta name='description' content='Bem vindo ao site da regeneração do mundo'/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center w-[100vw]'>
                <div className='flex flex-col w-[100%] items-center p-2 bg-[url("../assets/bg-1.png")] bg-cover lg:py-20 lg:p-10 lg:h-[700px]'>
                    <Header/>
                    <div className='flex flex-col items-center w-[100%] lg:items-start lg:w-[1000px]'>
                        <h1 className='text-3xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                            Nossa missão é incentivar a regeneração do planeta!
                        </h1>

                        <p className='mt-5 text-xl text-white text-center lg:text-left lg:w-[700px]'>
                            Sistema descentralizado de certificação de 
                            <span className='font-bold text-white'> Agricultura Regenerativa</span>.
                        </p>

                        <button className='mt-5 bg-[#68A021] w-72 h-16 rounded mb-10'>
                            <p className='font-bold text-white text-xl'>Download Whitepaper</p>
                        </button>
                    </div>
                </div>

                <section id='sobre' className='flex justify-center w-[100vw] py-12 items-center bg-[#f3ffe1] gap-40'>
                    <div className='hidden items-center justify-center w-[350px] h-[370px] lg:flex'>
                        <Image 
                            src={require('../assets/token.png')}
                            quality={100}
                            alt='Logo da sintrop'
                            className='w-[650px] h-[650px] object-cover'
                        />
                    </div>
                    
                    <div className='flex flex-col px-5 gap-3 lg:w-[450px]'>
                        <h2 className='font-bold text-2xl text-[#68a021]'>Token Crédito de Carbono Regenerativo</h2>
                        <p className='text-justify'>Token com modelo de distribuição algorítmico programado para ser distribuído ao longo das próximas décadas para produtores regenerativos e comunidade pelos serviços ambientais ecossistêmicos prestados a sociedade.</p>
                        <button className='mt-5 bg-[#68A021] w-56 h-16 rounded'>
                            <p className='font-bold text-white text-xl'>Saber Mais</p>
                        </button>
                    </div>
                </section>


                <section className='flex flex-col items-center justify-center mt-5 mb-5 pb-16'>
                    <Image 
                        src={require('../assets/arvore-2.png')}
                        quality={100}
                        alt='Uma planta'
                        className='w-[250px] h-[188px]'
                    />

                    <h2 className='font-bold px-5 text-center text-[#0A4303] text-2xl'>
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

                    <div className='flex flex-wrap gap-10 justify-center mt-16 lg:w-[1000px]'>
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
                    </div>
                </section>

                <section className='flex flex-col w-[100%] h-[500px] items-center justify-center bg-[url("../assets/bg-3.png")] bg-cover'>
                    <div className='flex items-center justify-center flex-col w-[100%] h-[100%] bg-[rgba(0,0,0,0.3)]'>
                        <h2 className='font-bold text-center text-white text-3xl lg:w-[800px]'>
                            Ou a agricultura vai salvar a Terra, ou a destruir. De qual lado você vai estar?
                        </h2>

                        <button className='mt-5 bg-[#68A021] w-72 h-16 rounded'>
                            <p className='font-bold text-white text-xl'>Download Whitepaper</p>
                        </button>
                    </div>
                </section>

                <section className='flex flex-col justify-center w-[100vw] items-center bg-white'>
                    <div className='flex flex-col items-center gap-20 lg:flex-row '>
                        <div className='flex flex-col gap-2 h-[450px] lg:w-[400px] pt-24'>
                            <h2 className='font-bold text-2xl text-[#68a021]'>Desenvolvido e operado por comunidade</h2>
                            <p className='text-justify'>Nossa comunidade é feita de desenvolvedores, pesquisadores, conselheiros, ativistas ambientais e produtores rurais.</p>
                            <Link 
                                target='_blank'
                                href='https://discord.com/invite/s5MfeqcPm8' 
                                className='mt-5 bg-[#68A021] w-56 h-16 rounded flex items-center justify-center'
                            >
                                <p className='font-bold text-white text-xl text-center'>Junte-se ao nosso discord</p>
                            </Link>
                        </div>

                        <Image 
                            src={ImgComunidade}
                            quality={100}
                            alt='Pessoas se comunicando'
                            className='hidden w-[440px] h-[350px] object-cover lg:flex'
                        />
                    </div>

                    <div id='comunidade'>
                        <h3 className='font-bold text-center text-[#0A4303] text-2xl'>
                            A comunidade
                        </h3>

                        <p className='text-center text-[#2b2b2b] text-xl lg:w-[800px]'>
                            Nosso projeto é descentralizado e guiado por comunidade. Estamos criando a lógica de funcionamento do Sistema para publicá-la na rede Ethereum e convidar produtores, ativistas, pesquisadores e toda comunidade para participar do Sistema de forma totalmente descentralizada.
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-12 justify-center lg:w-[1200px] mt-20'>
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
                            img='isa'
                        />
                    </div>
                </section>

                <section id='contato' className='flex flex-col bg-[#f1f1f1] gap-20 w-[100%] mt-14 py-10 justify-center lg:flex-row'>
                    <div className='flex flex-col lg:w-[400px]'>
                        <h3 className='font-bold text-2xl'>Contate-nos</h3>
                        <p className='text-xl'>
                            Em caso de dúvidas, escolha o melhor meio de comunicação e entre em contato conosco
                        </p>
                    </div>
                    <div className='flex flex-col gap-5 p-5 bg-white rounded-lg lg:w-[400px]'>
                        <h2 className='text-black text-2xl font-bold'>Contato</h2>
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
                        <input
                            placeholder='Mensagem'
                            className='w-[100%] h-24 bg-white p-2 rounded-lg border-2'
                        />

                        <button className='w-[100%] h-10 rounded-lg text-white font-bold bg-[#68A021] flex items-center justify-center'>
                            Enviar
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

export default Home