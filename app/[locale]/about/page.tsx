import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroAbout } from './components/HeroAbout';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';

const i18nNamespaces = ['about'];

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locale = (await params).locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: t('seo-title-about'),
        description: t('seo-description-about'),
        openGraph: {
            type: "website",
            title: t('seo-title-about') as string,
            description: t('seo-description-about') as string,
            alternateLocale: ["en", "pt"],
            url: `https://sintrop.com/${locale}/about`,
            locale,
            siteName: "Sintrop",
            images: "https://sintrop.com/assets/images/sintrop-og.png",
        },
        alternates: {
            canonical: "https://sintrop.com/about",
            languages: {
                "en": "https://sintrop.com/en/about",
                "pt": "https://sintrop.com/pt/about",
            }
        },
    }
}

export default async function About({ params }: Props){
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
                <HeroAbout t={t}/>
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <h3 className='text-2xl md:text-4xl'>{t('whyAnotherChain')}</h3>
                <p className='mt-3'>{t('descWhyAnotherChain')}</p>

                <h3 className='text-2xl md:text-4xl mt-16'>{t('impactAsCoreValue')}</h3>
                <p className='mt-3'>{t('descImpactAsCoreValue')}</p>
                <p className='mt-5'>{t('descImpactAsCoreValue2')}</p>

                <h3 className='text-2xl md:text-4xl mt-16'>{t('decentralizationAsCoreValue')}</h3>
                <p className='mt-3'>{t('descDecentralizationAsCoreValue')}</p>
                <p className='mt-5'>{t('descDecentralizationAsCoreValue2')}</p>

                <h3 className='text-2xl md:text-4xl mt-16'>{t('sintropVirtualMachine')}</h3>
                <p className='mt-3'>{t('descSintropVirtualMachine')}</p>
                <p className='mt-5'>{t('descSintropVirtualMachine2')}</p>
                
                <h3 className='text-2xl md:text-4xl mt-16'>{t('smartContractPlatform')}</h3>
                <p className='mt-3'>{t('descSmartContractPlatform')}</p>
            </main>

            <Footer t={t}/>
        </TranslationsProvider>
    )
}