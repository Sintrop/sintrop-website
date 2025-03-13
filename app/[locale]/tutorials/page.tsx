import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroTutorials } from './components/HeroTutorials';
import { TutorialItem } from './components/TutorialItem/TutorialItem';
import { Accordion } from '@/components/ui/accordion';
import { LanguagesAvailablesForTutorials, tutorialsListPerLanguage } from './tutorialsList';
import { Footer } from '@/components/Footer/Footer';
import type { Metadata } from 'next';

const i18nNamespaces = ['tutorials'];

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locale = (await params).locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: t('seo-title-tutorials'),
        description: t('seo-description-tutorials'),
        openGraph: {
            type: "website",
            title: t('seo-title-tutorials') as string,
            description: t('seo-description-tutorials') as string,
            alternateLocale: ["en", "pt"],
            url: `https://sintrop.com/${locale}/tutorials`,
            locale,
            siteName: "Sintrop",
            images: "https://sintrop.com/assets/images/sintrop-og.png",
        },
        alternates: {
            canonical: "https://sintrop.com/tutorials",
            languages: {
                "en": "https://sintrop.com/en/tutorials",
                "pt": "https://sintrop.com/pt/tutorials",
            }
        },
    }
}

export default async function Tutorials({ params: { locale } }: { params: { locale: LanguagesAvailablesForTutorials } }){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t}/>
                <HeroTutorials t={t} title='tutorials'/>
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <Accordion type="single" collapsible className='gap-5 flex flex-col'>
                    {tutorialsListPerLanguage[locale].map((item, index) => (
                        <TutorialItem
                            key={index}
                            index={index}
                            item={item}
                            t={t}
                        />
                    ))}
                </Accordion>
            </main>

            <Footer t={t}/>
        </TranslationsProvider>
    )
}