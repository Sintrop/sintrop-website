import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

            <div className='flex flex-col w-full'>
                <Link
                    href='/regeneration-credit'
                >
                    Crédito de regeneração
                </Link>
            </div>
        </main>
    )
}

export default Home