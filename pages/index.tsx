import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation,  } from 'next-i18next';
import ImgComunidade from '../assets/comunidade-pessoas.png';
import { Card1 } from '../components/Card1';
import { Card2 } from '../components/Card2';
import { Card3 } from '../components/Card3';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BtnWhats } from '../components/BtnWhats';
import { useRouter } from 'next/router';
import { CardImpact } from '../components/CardImpact';
import { CardUsers } from '../components/CardUsers';
import { useCountdown } from '../src/hooks/useCountdown';
import { api } from '../src/services/api';
import { ImpactProps } from '../src/interfaces/impact';
import {CgDanger} from 'react-icons/cg';
import { ContextProps } from '../src/interfaces/ContextServerSide';
import { PostsProps } from '../src/interfaces/Posts';

interface StaticProps{
    locale: string;
}

interface ServerSideProps{
    inspections: PostsProps[]
}

export interface usersCountProps{
    developersCount: number;
    inspectorsCount: number;
    producersCount: number;
    researchersCount: number;
    validatorsCount: number;
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

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const {t} = useTranslation('common');
    const [days, hours, minutes, seconds] = useCountdown('2023-11-30 23:59:59');
    const [networkImpact, setNetworkImpact] = useState({} as ImpactProps);
    const [countUsers, setCountUsers] = useState({} as usersCountProps);
    const [inspections, setInspections] = useState([]);

    useEffect(() => {
        getImpact();
        getCountUsers();
        getInspections();
    }, []);

    async function getImpact() {
        const response = await api.get('/network-impact');
        const impacts = response.data.impact;
        const network = impacts.filter((item: ImpactProps) => item.id === '1')
        setNetworkImpact(network[0]);
    }

    async function getCountUsers(){
        const response = await api.get('/users_count');
        setCountUsers(response.data);
    }

    async function getInspections(){
        const response = await api.get('/inspections/finished-inspections');
        setInspections(response.data.inspections);
    }

    return (
        <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">  
            <Head>
                <title>{t('Sintrop - Tecnologia e Sustentabilidade')}</title>
                <meta name='description' content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo.')}`}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com"/>
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade"/>
                <meta property="og:description" content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo.')}`}/>
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>

            <div className='flex flex-col items-center w-full bg-home bg-left lg:bg-center pb-5 lg:h-[550px]'>
                <Header/>

                <section className='flex flex-col px-2 lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-center text-white text-2xl lg:text-start lg:text-3xl lg:max-w-[32ch] mt-10 lg:mt-0'>
                        {t('Sistema Descentralizado de ')}
                        <span className='text-[#BBFFB2]'>
                            {t('Regeneração da Natureza')}
                        </span>
                    </h1>

                    <h2 className='text-white text-center max-w-[45ch] mt-5 lg:text-start lg:mt-10'>
                        {t('O Crédito de Regeneração é uma inovadora criptomoeda de recompensa por serviços ambientais e uma nova forma de investir em carbono e regeneração de ecossistemas')}
                    </h2>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <button
                            className='w-52 h-14 border-2 rounded-xl text-white text-sm font-bold'
                        >
                            {t('BAIXAR WHITEPAPER')}
                        </button>
                        <Link
                            href='https://v4-sintrop.netlify.app'
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('ACESSAR PLATAFORMA')}
                        </Link>
                    </div>
                </section>
            </div>

            <section className='flex flex-col items-center px-2 lg:w-[1000px] py-10'>
                <div className='flex flex-col'>
                <h3 className='font-bold text-center text-green-900 text-2xl lg:text-start'>{t('Token Crédito de Regeneração')}</h3>
                <div className='flex items-center justify-center gap-5 flex-wrap mt-3'>
                    <div className='flex flex-col justify-center p-3 border-2 border-green-900 rounded-lg w-full lg:w-[270px] h-[320px]'>
                        <Image
                            src={require('../assets/token.png')}
                            alt='Imagem do token de regeneração'
                            className='w-[80px] object-contain'
                        />

                        <p className='text-green-900 mt-6'>{t('FORNECIMENTO TOTAL MÁXIMO')}</p>
                        <p className='text-green-900 font-bold'>1,499,437,064 RCT</p>

                        <p className='text-green-900 mt-6'>{t('TITULARES')}</p>
                        <p className='text-green-900 font-bold'>18</p>

                        <p className='text-green-900 mt-6'>{t('TOTAL DE TRANFERÊNCIAS')}</p>
                        <p className='text-green-900 font-bold'>56</p>
                    </div>

                    <div className='flex flex-col p-3 justify-center border-2 border-green-900 bg-green-900 rounded-lg w-full lg:w-[270px] h-[320px]'>
                        <p className='text-white font-bold'>{t('MERCADO')}</p>

                        <p className='text-white mt-6'>{t('VALOR DE MERCADO')}</p>
                        <p className='text-white font-bold'>R$0,0282</p>

                        <p className='text-white mt-6'>{t('CAPITALIZAÇÃO DE MERCADO DE OFERTA CIRCULANTE')}</p>
                        <p className='text-white font-bold'>R$0,00</p>
                    </div>

                    <div className='flex flex-col justify-center p-3 border-2 border-green-900 rounded-lg w-full lg:w-[270px] h-[320px]'>
                        <p className='text-green-900 font-bold'>{t('OUTRAS INFORMAÇÕES')}</p>

                        <p className='text-green-900 mt-6'>{t('TOKEN CONTRACT (WITH 18 DECIMALS)')}</p>

                        <Link 
                            className='text-blue-500 border-b-2 border-blue-500 font-bold mt-6 max-w-[30ch] overflow-hidden text-ellipsis'
                            href='https://sepolia.etherscan.io/token/0xf8033bbfe9c645f52d170ddd733274371e75369f'
                            target='_blank'
                        >0xF8033Bbfe9c645F52d170DDD733274371E75369F</Link>
                    </div>
                </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center w-full pb-10 pt-5 bg-green-900 '>
                <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600'>
                    <CgDanger size={25} color='white'/>
                    <p className='font-bold text-white'>{t('Dados da nossa rede de testes')}</p>
                </div>
                <div className='flex gap-5 justify-center flex-wrap lg:w-[1000px] mt-5'>
                    <CardImpact
                        title='IMPACTO TOTAL DA REDE'
                        impact={networkImpact}
                    />
                    <CardImpact
                        title='IMPACTO ECOSSISTÊMICO POR TOKEN'
                        impact={networkImpact}
                        type='impactToken'
                    />
                </div>
            </section>

            <section className='flex flex-col lg:w-[1000px] py-10'>
                <div className='w-full flex flex-col bg-card-statics bg-center rounded-lg overflow-hidden'>
                    <div className='w-full flex flex-col p-3 bg-black/60'>
                        <p className='font-bold text-white text-xl text-center'>{t('ESTATÍSTICAS')}</p>

                        <div className='flex flex-col justify-center gap-10 lg:flex-row'>
                            <div className='flex flex-col justify-between w-[250px]'>
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-white text-lg'>{t('Inspeções realizadas')}</p>
                                    <p className='text-white text-lg font-bold'>{inspections.length}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Produtores')}</p>
                                    <p className='text-white text-lg font-bold'>{Number(countUsers?.producersCount) - 30}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Inspetores')}</p>
                                    <p className='text-white text-lg font-bold'>{Number(countUsers?.inspectorsCount) - 28}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Pesquisadores')}</p>
                                    <p className='text-white text-lg font-bold'>{Number(countUsers?.researchersCount) + 1}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Desenvolvedores')}</p>
                                    <p className='text-white text-lg font-bold'>{Number(countUsers?.developersCount)}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Validadores')}</p>
                                    <p className='text-white text-lg font-bold'>{Number(countUsers?.validatorsCount)}</p>
                                </div>
                            </div>

                            <div className='flex flex-col w-[250px]'>
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-white font-bold text-xl'>{t('Total de árvores')}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Mudas')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Jovens')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Adultas')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Anciâs')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                            </div>

                            <div className='flex flex-col w-[250px]'>
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-white font-bold text-xl'>{t('Registro de biomassa')}</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Amostras')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Média')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    <p className='text-white text-lg'>{t('Total')}</p>
                                    <p className='text-white text-lg font-bold'>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col lg:w-[1000px] py-10'>
                <div className='flex flex-col px-2 lg:flex-row items-center justify-center'>
                    <div className='lg:w-[50%] flex flex-col items-center lg:items-start'>
                        <p className='font-bold text-green-900 text-2xl'>{t('A COMUNIDADE')}</p>
                        <p className=' text-green-900 mt-2'>{t("Rede de produtores, inspetores, ativistas ambientais, pesquisadores e desenvolvedores conectados pela tecnologia da blockchain e por contratos inteligentes imutáveis. Os produtores são propriedades rurais ou áreas de reflorestamento que desejam vender o impacto ambiental de regeneração de ecossistemas que prestam para a sociedade. Os pesquisadores são responsáveis por criar e aprimorar os métodos de avaliação. Os inspetores são as pessoas que irão coletar os dados e informações do produtor")}</p>
                        <Link
                            href='https://v4-sintrop.netlify.app'
                            target='_blank'
                            className='w-72 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center mt-7'
                        >
                            {t('FAÇA PARTE DA NOSSA COMUNIDADE')}
                        </Link>
                    </div>
                    <div className='lg:w-[50%] flex flex-col lg:pl-8'>
                        <Image
                            src={require('../public/assets/community.png')}
                            alt='Imagem da comunidade'
                            className='w-full object-contain'
                        />
                    </div>
                </div>
            </section>

            <section id='comunidade' className='flex flex-col items-center w-full py-10 bg-green-900 '>
                <div className='flex gap-5 justify-center flex-wrap lg:w-[1000px] '>
                    <CardUsers
                        title='PRODUTOR RURAL E PROJETOS DE REFLORESTAMENTO'
                        bgColor='transparent'
                        description="Venda o serviço ambiental de regeneração de ecossistemas e seja recompensado para regenerar e reflorestar o Planeta."
                        typeUser='produtor'
                    />
                    <CardUsers
                        title='INSPETOR FLORESTAL'
                        bgColor='#34812B'
                        description="Inspecione os produtores com nosso aplicativo móvel, avalie seu impacto escossistêmico e seja recompensado pela quantidade de inspeções realizadas."
                        typeUser='inspetor'
                    />
                    <CardUsers
                        title='INSTITUIÇÕES E PESQUISADORES'
                        bgColor='transparent'
                        description="Financie sua pesquisa com o Crédito de Regeneração, publique suas pesquisas, crie e aprimore os métodos de avaliação do Sistema."
                        typeUser='pesquisador'
                    />
                    <CardUsers
                        title='ATIVISTA AMBIENTAL'
                        bgColor='#34812B'
                        description="Convide e treine novos usuários para a rede."
                        typeUser='ativista'
                    />
                    <CardUsers
                        title='DESENVOLVEDORES'
                        bgColor='transparent'
                        description="Desenvolva os contratos, plataforma e aplicações para interações dos usuários."
                        typeUser='desenvolvedores'
                    />
                    <CardUsers
                        title='EMPRESA E INVESTIDORES'
                        bgColor='#34812B'
                        description="Financie a regeneração do Planeta e prove para seus clientes seu compromisso com o meio ambiente."
                        typeUser='investidor'
                    />
                </div>
            </section>

            <section className='flex flex-col items-center justify-center w-full h-[400px] bg-lines bg-center'>
                <h4 className="font-bold text-black italic text-3xl text-center">
                    {t('CONTRIBUA PARA ')}
                    <span className="text-[#529D17]">
                        {t('REGENERAÇÃO DO PLANETA')}!
                    </span>
                </h4>
            </section>

            <Footer/>
            
            <BtnWhats/>
        </main>
    )
}

export default Home