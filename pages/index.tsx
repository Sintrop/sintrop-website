import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import LogoCR from '../assets/token.png';
import { AppItem } from './_components/AppItem';
import { Header } from './_components/Header';

interface StaticProps {
    locale: string;
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

    return (
        <>
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

            <Header />
            <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">
                <section className='w-full flex flex-col items-center justify-center py-10 bg-first-section h-[450px]'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='w-full flex flex-col px-5 lg:px-0 lg:w-[1024px]'>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[#686868] text-4xl lg:max-w-[50%]'>
                                    Building
                                    <span className='bg-gradient-to-r from-[#A5EC60] from-30% to-[#1C840F] text-transparent bg-clip-text'> decentralized </span>
                                    solutions to make the world a better place.
                                </h1>

                                <div className='flex items-center gap-5 mt-10'>
                                    <button
                                        className='bg-[#68A021] w-40 h-10 rounded-md font-semibold text-white'
                                    >
                                        Download app
                                    </button>

                                    <button
                                        className='bg-[#68A021] w-40 h-10 rounded-md font-semibold text-white'
                                    >
                                        Web platform
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full flex flex-col items-center py-10 bg-[rgba(3,124,0,0.13)]'>
                    <div className='w-full flex flex-col px-5 lg:px-0 lg:w-[1024px]'>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-center text-3xl text-[#686868] font-semibold'>TECHNOLOGY & SUSTAINABILITY</h2>

                            <h3 className='text-[#686868] font-semibold text-2xl'>Our values</h3>

                            <div className='flex items-center justify-between'>
                                <div className='w-full lg:w-[50%] h-[350px] bg-gray-400 rounded-md overflow-hidden shadow-lg'>
                                    <Image
                                        alt='Imagem de floresta'
                                        src={require('../assets/img-florest-1.png')}
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='w-full lg:w-[50%] flex flex-col items-center justify-center'>
                                    <p className='text-[#8C8C8C] text-center max-w-[70%] text-2xl'>Natured-based solutions to protect and restore the Planet's life and fight climate change</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='w-full lg:w-[50%] h-[350px] bg-gray-400 rounded-md overflow-hidden shadow-lg'>
                                    <Image
                                        alt='Imagem de pessoas conectadas'
                                        src={require('../assets/img-pessoas-conectadas.png')}
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='w-full lg:w-[50%] flex flex-col items-center justify-center'>
                                    <p className='text-[#8C8C8C] text-center max-w-[70%] text-2xl'>Decentralized solutions to give power to people.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full flex flex-col items-center py-10'>
                    <div className='w-full flex flex-col px-5 lg:px-0 lg:w-[1024px]'>
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-[#686868] font-semibold text-2xl'>Our solutions</h3>

                            <div className='flex items-center gap-3'>
                                <AppItem
                                    type='card'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />

                                <AppItem
                                    type='card'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />

                                <AppItem
                                    type='card'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />
                            </div>

                            <div className='flex items-center gap-5'>
                                <button
                                    className='px-10 h-10 bg-green-500 rounded-full text-white'
                                >
                                    Principais apps
                                </button>

                                <button
                                    className='px-10 h-10 border text-green-500 border-green-500 rounded-full'
                                >
                                    Live
                                </button>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <AppItem
                                    type='list'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />

                                <AppItem
                                    type='list'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />

                                <AppItem
                                    type='list'
                                    title='Regeneration Credit'
                                    backgroundUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Fimg-florest-1.png?alt=media&token=3d1d3b5e-3912-4bb7-9a39-e588ae6145fb'
                                    description='Adquira seu CR'
                                    description2='Testnet'
                                    iconUrl='https://firebasestorage.googleapis.com/v0/b/sintrop-app-android.appspot.com/o/site%2Ftoken.png?alt=media&token=9220c767-d5dd-4b6f-a1e0-e67fdc17d641'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full flex flex-col items-center py-10 bg-[rgba(3,124,0,0.13)]'>
                    <div className='w-full flex flex-col px-5 lg:px-0 lg:w-[1024px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col gap-5 w-full lg:w-[50%]'>
                                <h3 className='font-bold text-[#8c8c8c] text-3xl'>Regeneration Credit</h3>
                                <h4 className='text-[#8c8c8c] text-2xl'>
                                    Nature-based decentralized market place to certificate and trade ecosystems regeneration impact
                                </h4>

                                <div className='flex items-center gap-5 mt-5'>
                                    <button
                                        className='bg-[#68A021] w-40 h-10 rounded-md font-semibold text-white'
                                    >
                                        Download app
                                    </button>

                                    <button
                                        className='bg-[#68A021] w-40 h-10 rounded-md font-semibold text-white'
                                    >
                                        Web platform
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Image
                                    alt='Imagem do crédito de regeneração'
                                    src={LogoCR}
                                    width={500}
                                    height={500}
                                    className='w-[300px] h-[300px] object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home