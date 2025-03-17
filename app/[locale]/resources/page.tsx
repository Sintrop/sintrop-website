import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroResources } from './components/HeroResources';
import type { Metadata } from 'next';
import { getReleasesFromGitHub } from '@/src/services/github';
import { ReleaseItem } from './components/ReleaseItem/ReleaseItem';

const i18nNamespaces = ['resources'];

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locale = (await params).locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: t('seo-title-resources'),
        description: t('seo-description-resources'),
        openGraph: {
            type: "website",
            title: t('seo-title-resources') as string,
            description: t('seo-description-resources') as string,
            alternateLocale: ["en", "pt"],
            url: `https://sintrop.com/${locale}/resources`,
            locale,
            siteName: "Sintrop",
            images: "https://sintrop.com/assets/images/sintrop-og.png",
        },
        alternates: {
            canonical: "https://sintrop.com/resources",
            languages: {
                "en": "https://sintrop.com/en/resources",
                "pt": "https://sintrop.com/pt/resources",
            }
        },
    }
}

export default async function Resources({ params }: Props){
    const {locale} = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    const releases = await getReleasesFromGitHub({
        repo: 'go-sintrop',
        username: 'sintrop',
    })

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t}/>
                <HeroResources t={t}/>
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <h3 className='text-2xl md:text-4xl'>{t('releases')}</h3>
                
                <div className='flex flex-col gap-5 mt-5'>
                    {releases.map((release, index) => (
                        <ReleaseItem
                            key={index}
                            t={t}
                            release={release}
                            latest={index === 0}
                        />
                    ))}
                </div>
            </main>
        </TranslationsProvider>
    )
}