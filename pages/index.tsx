import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next';
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
import { ImpactProps, ImpactTokenProps } from '../src/interfaces/impact';
import { CgDanger } from 'react-icons/cg';
import { ContextProps } from '../src/interfaces/ContextServerSide';
import { PostsProps } from '../src/interfaces/Posts';
import { TopBar } from '../components/TopBar';
import Chart from 'react-apexcharts';

interface StaticProps {
    locale: string;
}

interface ServerSideProps {
    inspections: PostsProps[]
}

export interface usersCountProps {
    developersCount: number;
    inspectorsCount: number;
    producersCount: number;
    researchersCount: number;
    validatorsCount: number;
}

export async function getStaticProps({ locale }: StaticProps) {
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
    const { t } = useTranslation('common');
    const [days, hours, minutes, seconds] = useCountdown('2024-06-25 23:59:59');
    const [networkImpact, setNetworkImpact] = useState({} as ImpactProps);
    const [confirmImpact, setConfirmImpact] = useState({} as ImpactProps);
    const [burnedImpact, setBurnedImpact] = useState({} as ImpactProps);
    const [countUsers, setCountUsers] = useState({} as usersCountProps);
    const [inspections, setInspections] = useState([]);
    const [impactPerToken, setImpactPerToken] = useState({} as ImpactTokenProps);
    const [graphicCarbon, setGraphicCarbon] = useState(null);
    const [graphicSoil, setGraphicSoil] = useState(null);
    const [graphicWater, setGraphicWater] = useState(null);
    const [graphicBio, setGraphicBio] = useState(null);

    useEffect(() => {
        getImpact();
        getCountUsers();
        getInspections();
    }, []);

    async function getImpact() {
        const response = await api.get('/network-impact');
        const impacts = response.data.impact;
        const network = impacts.filter((item: ImpactProps) => item.id === '1');
        const confirm = impacts.filter((item: ImpactProps) => item.id === '6');
        const burned = impacts.filter((item: ImpactProps) => item.id === '7');

        setNetworkImpact(network[0]);
        setConfirmImpact(confirm[0]);
        setBurnedImpact(burned[0]);

        const response2 = await api.get('/impact-per-token');
        setImpactPerToken(response2.data.impact);
    }

    async function getCountUsers() {
        const response = await api.get('/users_count');
        setCountUsers(response.data);
    }

    async function getInspections() {
        const response = await api.get('/inspections/finished-inspections');
        setInspections(response.data.inspections);
    }

    const configChat = {
        options: {
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top',
                        fillColor: '#fff'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val: string) {
                    return val + "";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#fff", '#fff']
                }
            },
            xaxis: {
                categories: ["À confirmar", "Disponível", "Compensado"],
                position: 'bottom',
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true
                },
                tooltip: {
                    enabled: true,
                },
                labels: {
                    style: {
                        colors: ['#fff', '#fff', '#fff']
                    }
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                    formatter: function (val: string) {
                        return val + "";
                    },
                    style: {
                        colors: ['#fff']
                    }
                },

            }
        }
    }

    return (
        <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">
            <Head>
                <title>{t('Sintrop - Tecnologia e Sustentabilidade')}</title>
                <meta name='description' content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração.')}`} />
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sintrop.com" />
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade" />
                <meta property="og:description" content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração.')}`} />
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale} />
                <link rel="canonical" href="https://sintrop.com" />
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>

            <div className='flex flex-col items-center w-full bg-new-home bg-left lg:bg-center pb-5 lg:h-[550px]'>
                <TopBar />
                <Header />

                <section className='flex flex-col px-2 lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-center text-white text-2xl lg:text-start lg:text-3xl lg:max-w-[32ch] mt-10 lg:mt-0'>
                        {t('Sistema Descentralizado de ')}
                        <span className='text-[#BBFFB2]'>
                            {t('Regeneração da Natureza')}
                        </span>
                    </h1>

                    <h2 className='text-white text-center max-w-[45ch] mt-5 lg:text-start lg:mt-10'>
                        {t('O Crédito de Regeneração é um inovador criptoativo de recompensa por serviços ambientais e uma nova forma de investir em carbono e na regeneração de ecossistemas')}
                    </h2>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <Link
                            href={router.locale === 'pt-BR' ?
                                'https://sintrop.com/assets/qr-code/whitepaper.pdf' : 'https://sintrop.com/assets/qr-code/whitepaper-EN.pdf'}
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('BAIXAR WHITEPAPER')}
                        </Link>
                        <Link
                            href='https://app.sintrop.com'
                            target='_blank'
                            className='w-52 h-14 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('ACESSAR PLATAFORMA')}
                        </Link>
                    </div>
                </section>
            </div>

            {/* <Link
                className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-10'
                target='_blank'
                href='https://app.sintrop.com/pre-sale'
            >
                <Image
                    alt='banner pré venda do crédito de regeneração'
                    src={require('../public/assets/banner-pc.jpg')}
                    className='w-full h-[230px] rounded-md border-4 border-yellow-400 hidden lg:flex'
                />

                <Image
                    alt='banner pré venda do crédito de regeneração'
                    src={require('../public/assets/banner-mobile.jpg')}
                    className='w-full h-[130px] rounded-md border-4 border-yellow-400 lg:hidden'
                />
            </Link> */}

            <section className='flex flex-col px-2 items-center justify-center gap-5 w-full pt-10 pb-10 bg-presale my-10 rounded-md'>
                <div className='flex flex-col lg:flex-row lg:w-[1000px] items-center'>
                    <div className='flex flex-col lg:w-[50%]'>
                        <h3 className='font-bold text-white text-4xl'>PRÉ-VENDA</h3>
                        <h3 className='font-bold text-green-500 text-4xl'>Crédito de regeneração</h3>

                        <p className="text-sm text-white mt-5">Essa oferta encerra em (25/06/2024)</p>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col p-2 rounded-md bg-green-500 w-16 items-center">
                                <p className="font-bold text-white text-xl">{days}</p>
                                <p className="text-center text-xs text-white">Dias</p>
                            </div>
                            <div className="flex flex-col p-2 rounded-md bg-green-500 w-16 items-center">
                                <p className="font-bold text-white text-xl">{hours}</p>
                                <p className="text-center text-xs text-white">Horas</p>
                            </div>
                            <div className="flex flex-col p-2 rounded-md bg-green-500 w-16 items-center">
                                <p className="font-bold text-white text-xl">{minutes}</p>
                                <p className="text-center text-xs text-white">Minutos</p>
                            </div>
                            <div className="flex flex-col p-2 rounded-md bg-green-500 w-16 items-center">
                                <p className="font-bold text-white text-xl">{seconds}</p>
                                <p className="text-center text-xs text-white">Segundos</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:w-[50%]'>
                        <div className="flex flex-col border border-green-500 bg-[rgba(0,0,0,0.6)] rounded-md p-2 gap-1 mt-3">
                            <div className="flex items-center w-full justify-between">
                                <h3 className="text-gray-200 text-xs lg:text-sm">Tokens ofertados</h3>
                                <p className="font-bold text-green-500 text-sm lg:text-base">39.000.000</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <h3 className="text-gray-200 text-xs lg:text-sm">% da oferta privada</h3>
                                <p className="font-bold text-green-500 text-sm lg:text-base">9,12 %</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <h3 className="text-gray-200 text-xs lg:text-sm">Valor unitário</h3>
                                <p className="font-bold text-green-500 text-sm lg:text-base">R$ 0,0282</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <h3 className="text-gray-200 text-xs lg:text-sm">Alvo de capitalização</h3>
                                <p className="font-bold text-green-500 text-sm lg:text-base">R$ 1.100.000,00</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <h3 className="text-gray-200 text-xs lg:text-sm">Capitalização de mercado</h3>
                                <p className="font-bold text-green-500 text-sm lg:text-base">R$ 12.057.692,31</p>
                            </div>
                        </div>

                        <div className='flex justify-center mt-5'>
                            <Link
                                className='py-2 px-5 bg-red-500 rounded-md text-white font-bold text-sm'
                                target='_blank'
                                href='https://app.sintrop.com/pre-sale'
                            >
                                Acessar pré-venda
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-10 lg:px-0'>
                <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                    <div className='flex flex-col gap-3 lg:w-[45%]'>
                        <h4 className="font-bold text-green-900 text-lg italic">{t('Transformamos o impacto de regeneração de ecossistemas em um ativo digital, para guardar ou trocar pelo certificado de contribuição ambiental')}.</h4>
                        <p className='text-black text-lg mt-5'>{t('O Crédito de Regeneração é um criptoativo lastreado no impacto de restauração de ecossistemas de produtores rurais regenerativos e projetos de reflorestamento')}.</p>
                    </div>
                    <Image
                        src={require('../public/assets/token.png')}
                        alt='Gráfico impacto do token por co2'
                        className="lg:w-[40%] object-contain"
                    />
                </div>
                <div className='flex items-center justify-center gap-5 flex-wrap mt-10'>
                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[320px]'>
                        <Image
                            src={require('../public/assets/icon-descentralizado.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('DESCENTRALIZADO')}</h4>
                        <p className="text-lg text-gray-700">{t('Tecnologia da blockchain para armazenamento e processamentos dos dados sem uma entidade central')}.</p>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[320px]'>
                        <Image
                            src={require('../public/assets/icon-low-cost.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('BAIXO CUSTO')}</h4>
                        <p className="text-lg text-gray-700">{t('Acessível para o pequeno produtor, apenas 3 transações necessárias para participar')}.</p>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-gray-200 gap-3 h-[260px] w-full lg:w-[320px]'>
                        <Image
                            src={require('../public/assets/icon-transparent.png')}
                            alt='Ícone de descentralização'
                            className="w-[60px] object-contain"
                        />

                        <h4 className="font-bold text-xl text-green-900">{t('TRANSPARENTE')}</h4>
                        <p className="text-lg text-gray-700">{t('Todos dados públicos e disponíveis para acesso de qualquer um')}.</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center px-2 lg:w-[1024px] lg:px-0 py-10'>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-center text-green-900 text-2xl lg:text-start'>{t('Token Crédito de Regeneração')}</h3>
                    <div className='flex items-center justify-center gap-5 flex-wrap mt-3'>
                        <div className='flex flex-col justify-center p-3 border-2 border-green-900 rounded-lg w-[270px] lg:w-[320px] h-[320px]'>
                            <Image
                                src={require('../public/assets/token.png')}
                                alt='Imagem do token de regeneração'
                                className='w-[80px] object-contain'
                            />

                            <p className='text-green-900 mt-6'>{t('FORNECIMENTO TOTAL MÁXIMO')}</p>
                            <p className='text-green-900 font-bold'>1,498,059,944 RC</p>

                            <p className='text-green-900 mt-6'>{t('TITULARES')}</p>
                            <p className='text-green-900 font-bold'>28</p>

                            <p className='text-green-900 mt-6'>{t('TOTAL DE TRANFERÊNCIAS')}</p>
                            <p className='text-green-900 font-bold'>74</p>
                        </div>

                        <div className='flex flex-col p-3 justify-center border-2 border-green-900 bg-green-900 rounded-lg w-[270px] lg:w-[320px] h-[320px]'>
                            <p className='text-white font-bold'>{t('MERCADO')}</p>

                            <p className='text-white mt-6'>{t('VALOR DE MERCADO')}</p>
                            <p className='text-white font-bold'>R$0,0282</p>

                            <p className='text-white mt-6'>{t('CAPITALIZAÇÃO DE MERCADO DE OFERTA CIRCULANTE')}</p>
                            <p className='text-white font-bold'>R$0,00</p>
                        </div>

                        <div className='flex flex-col justify-center p-3 border-2 border-green-900 rounded-lg w-[270px] lg:w-[320px] h-[320px]'>
                            <p className='text-green-900 font-bold'>{t('OUTRAS INFORMAÇÕES')}</p>

                            <p className='text-green-900 mt-6'>{t('TOKEN CONTRACT (WITH 18 DECIMALS)')}</p>

                            <Link
                                className='text-blue-500 border-b-2 border-blue-500 font-bold mt-6 max-w-[30ch] overflow-hidden text-ellipsis'
                                href='https://sepolia.etherscan.io/token/0xA8fDAbF07136c3c1A5C9572A730a2425c5a8500C'
                                target='_blank'
                            >0xA8fDAbF07136c3c1A5C9572A730a2425c5a8500C</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col px-2 items-center w-full pb-10 pt-5 bg-green-900 lg:px-0'>
                <p className='font-bold text-white text-2xl'>{t('Impacto e estatísticas')}</p>

                <div className='flex gap-5 justify-center flex-wrap lg:w-[1000px] mt-5'>
                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-[#0a4303] gap-3 h-[200px] w-full lg:w-[320px]'>
                        <p className='font-bold text-white'>{t('Impacto por token')}</p>

                        <div className='flex items-center justify-between w-full h-full py-3'>
                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 }).format(impactPerToken?.carbon * 1000)} g</p>
                                    <p className=' text-white text-sm'>{t('Carbono')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(impactPerToken?.soil * 10000)} cm²</p>
                                    <p className=' text-white text-sm'>{t('Solo')}</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(impactPerToken?.water * 1000)} L</p>
                                    <p className=' text-white text-sm'>{t('Água')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(impactPerToken?.bio)} uv</p>
                                    <p className=' text-white text-sm'>{t('Bio')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-[#0a4303] gap-3 h-[200px] w-full lg:w-[320px]'>
                        <p className='font-bold text-white'>{t('Impacto à confirmar')}</p>

                        <div className='flex items-center justify-between w-full h-full py-3'>
                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(confirmImpact?.carbon / 1000)} t</p>
                                    <p className=' text-white text-sm'>{t('Carbono')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(confirmImpact?.solo / 10000)} ha</p>
                                    <p className=' text-white text-sm'>{t('Solo')}</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(confirmImpact?.agua)} m³</p>
                                    <p className=' text-white text-sm'>{t('Água')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(confirmImpact?.bio)} uv</p>
                                    <p className=' text-white text-sm'>{t('Bio')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-[#0a4303] gap-3 h-[200px] w-full lg:w-[320px]'>
                        <p className='font-bold text-white'>{t('Impacto disponível')}</p>

                        <div className='flex items-center justify-between w-full h-full py-3'>
                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(networkImpact?.carbon / 1000)} t</p>
                                    <p className=' text-white text-sm'>{t('Carbono')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(networkImpact?.solo / 10000)} ha</p>
                                    <p className=' text-white text-sm'>{t('Solo')}</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(networkImpact?.agua)} m³</p>
                                    <p className=' text-white text-sm'>{t('Água')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(networkImpact?.bio)} uv</p>
                                    <p className=' text-white text-sm'>{t('Bio')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-[#0a4303] gap-3 h-[200px] w-full lg:w-[320px]'>
                        <p className='font-bold text-white'>{t('Impacto compensado')}</p>

                        <div className='flex items-center justify-between w-full h-full py-3'>
                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(burnedImpact?.carbon / 1000)} t</p>
                                    <p className=' text-white text-sm'>{t('Carbono')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(burnedImpact?.solo / 10000)} ha</p>
                                    <p className=' text-white text-sm'>{t('Solo')}</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between w-[50%] h-full'>
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(burnedImpact?.agua)} m³</p>
                                    <p className=' text-white text-sm'>{t('Água')}</p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-white text-lg'>{Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(burnedImpact?.bio)} uv</p>
                                    <p className=' text-white text-sm'>{t('Bio')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-3 rounded-lg shadow-xl shadow-black/30 bg-[#0a4303] gap-3 h-[200px] w-full lg:w-[320px]'>
                        <p className='font-bold text-white'>{t('Estatísticas')}</p>

                        <div className='flex flex-col w-full h-full mt-3'>
                            <div className='flex items-center justify-between w-full'>
                                <p className='text-white'>{t('Total de árvores')}</p>
                                <p className='text-white font-bold'>{Intl.NumberFormat('pt-BR').format(impactPerToken?.trees)}</p>
                            </div>

                            <div className='flex items-center justify-between w-full'>
                                <p className='text-white'>{t('Inspeções realizadas')}</p>
                                <p className='text-white font-bold'>{inspections.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col lg:w-[1000px] py-10'>
                <div className='flex flex-col px-4 lg:px-0 lg:flex-row items-center justify-center'>
                    <div className='lg:w-[50%] flex flex-col items-center lg:items-start'>
                        <p className='font-bold text-green-900 text-2xl'>{t('A COMUNIDADE')}</p>
                        <p className=' text-green-900 mt-2'>{t("Rede de produtores, inspetores, ativistas ambientais, pesquisadores e desenvolvedores conectados pela tecnologia da blockchain e por contratos inteligentes imutáveis. Os produtores são propriedades rurais ou áreas de reflorestamento que desejam vender o impacto ambiental de regeneração de ecossistemas que prestam para a sociedade. Os pesquisadores são responsáveis por criar e aprimorar os métodos de avaliação. Os inspetores são as pessoas que irão coletar os dados e informações do produtor")}</p>
                        <Link
                            href='https://app.sintrop.com'
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

            <Footer />

            <BtnWhats />
        </main>
    )
}

export default Home