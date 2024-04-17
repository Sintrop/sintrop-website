import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { TopBar } from "../components/TopBar";


interface StaticProps {
    locale: string;
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

const App: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation('common');

    return (
        <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">
            <Head>
                <title>{t('Baixar aplicativo móvel')}</title>
                <meta name='description' content={`${t('Baixe nosso aplicativo móvel, e tenha mais comodidade para utilizar o sistema')}`} />
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sintrop.com/app" />
                <meta property="og:title" content="Baixar aplicativo móvel" />
                <meta property="og:description" content={`${t('Baixe nosso aplicativo móvel, e tenha mais comodidade para utilizar o sistema')}`} />
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale} />
                <link rel="canonical" href="https://sintrop.com" />
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>

            <div className='flex flex-col items-center w-full bg-[url("../assets/new-bg.jpg")] bg-left lg:bg-center pb-5 lg:h-[550px]'>
                <TopBar/>
                <Header />

                <section className='flex flex-col px-2 lg:w-[1000px] lg:mt-44'>
                    <h1 className='font-bold text-center text-white text-2xl lg:text-start lg:text-3xl lg:max-w-[32ch] mt-10 lg:mt-0'>
                        {t('Baixe nosso aplicativo móvel')}
                    </h1>

                    <h2 className='text-white text-center max-w-[45ch] mt-5 lg:text-start lg:mt-10'>
                        {t('Uma forma mais rápida e fácil de utilizar nosso sistema')}
                    </h2>
                </section>

            </div>

            <section className='flex flex-col px-2 items-center justify-center gap-5 lg:w-[1000px] pt-10 pb-10'>
                <h3 className="font-bold text-xl text-[#0a4303]">{t('Selecione uma opção abaixo')}</h3>

                <div className="flex items-center justify-center flex-wrap flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center w-[300px] border rounded-md p-3 gap-3">
                        <Image
                            alt='icone google play'
                            src={require('../public/assets/google_play.png')}
                            width={500}
                            height={300}
                            className="w-48 h-16 object-contain"
                        />

                        <Image
                            alt='qr code google play'
                            src={require('../public/assets/qr-google-play.png')}
                            width={1000}
                            height={1000}
                            className="w-48 h-48 object-contain"
                        />

                        <Link
                            href='https://play.google.com/store/apps/details?id=com.sintrop.activistapp'
                            target="_blank"
                            className="w-full py-2 rounded-md bg-green-700 text-white font-bold items-center justify-center flex"
                        >
                            Clique aqui para baixar
                        </Link>
                    </div>

                    <div className="flex flex-col items-center w-[300px] border rounded-md p-3 gap-3">
                        <Image
                            alt='icone app store'
                            src={require('../public/assets/apple-store.png')}
                            width={500}
                            height={300}
                            className="w-48 h-16 object-contain"
                        />

                        <Image
                            alt='qr code apple store'
                            src={require('../public/assets/qr-apple-store.png')}
                            width={1000}
                            height={1000}
                            className="w-48 h-48 object-contain"
                        />

                        <Link
                            href='https://apps.apple.com/br/app/sintrop/id6475600488'
                            target="_blank"
                            className="w-full py-2 rounded-md bg-green-700 text-white font-bold items-center justify-center flex"
                        >
                            Clique aqui para baixar
                        </Link>
                    </div>

                    <div className="flex flex-col items-center w-[300px] border rounded-md p-3 gap-3">
                        <h3 className="font-bold text-center text-green-700 text-xl mt-7 mb-2">Plataforma web</h3>

                        <Image
                            alt='qr code apple store'
                            src={require('../public/assets/qr-code-app-web.png')}
                            width={1000}
                            height={1000}
                            className="w-48 h-48 object-contain"
                        />

                        <Link
                            href='https://app.sintrop.com'
                            target="_blank"
                            className="w-full py-2 rounded-md bg-green-700 text-white font-bold items-center justify-center flex"
                        >
                            Clique aqui para acessar
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App;