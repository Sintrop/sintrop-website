import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroHome } from './components/HeroHome';
import { AbstractAbout } from './components/AbstractAbout';
import { Blockchain } from './components/Blockchain';
import { Applications } from './components/Applications';
import { Descetralization } from './components/Descentralization/Descetralization';
import { Pow } from './components/Pow/Pow';
import { Energy } from './components/Energy';
import { FeaturedApp } from './components/FeaturedApp';
import { Footer } from '@/components/Footer/Footer';
import type { Metadata } from 'next';

const i18nNamespaces = ['home'];

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locale = (await params).locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: t('seo-title-home'),
        description: t('seo-description-home'),
        openGraph: {
            type: "website",
            title: t('seo-title-home') as string,
            description: t('seo-description-home') as string,
            alternateLocale: ["en", "pt"],
            url: `https://sintrop.com/${locale}`,
            locale,
            siteName: "Sintrop",
            images: "https://sintrop.com/assets/images/sintrop-og.png",
        },
        alternates: {
            canonical: "https://sintrop.com",
            languages: {
                "en": "https://sintrop.com/en",
                "pt": "https://sintrop.com/pt",
            }
        },
    }
}

export default async function Home({ params }: Props){
    const { locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t}/>

                <HeroHome t={t} locale={locale} />
            </div>

            <main>
                <div className='container mx-auto px-5 lg:px-20'>
                    <AbstractAbout t={t} />

                    <Blockchain t={t}/>

                    <Applications t={t}/>

                    <Descetralization t={t} locale={locale}/>

                    <Pow t={t} locale={locale}/>

                    <Energy t={t}/>
                </div>

                <FeaturedApp t={t}/>
            </main>

            <Footer t={t} />
        </TranslationsProvider>
    )
}