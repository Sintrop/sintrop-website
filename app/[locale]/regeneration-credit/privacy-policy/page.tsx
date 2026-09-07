import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroPrivacyPolicy } from './components/HeroPrivacyPolicy';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';

const i18nNamespaces = ['privacy-policy'];

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locale = (await params).locale;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return {
        title: t('seo-title-privacy-policy'),
        description: t('seo-description-privacy-policy'),
        openGraph: {
            type: "website",
            title: t('seo-title-privacy-policy') as string,
            description: t('seo-description-privacy-policy') as string,
            alternateLocale: ["en", "pt"],
            url: `https://sintrop.com/${locale}/regeneration-credit/privacy-policy`,
            locale,
            siteName: "Sintrop",
            images: "https://sintrop.com/assets/images/sintrop-og.png",
        },
        alternates: {
            canonical: "https://sintrop.com/regeneration-credit/privacy-policy",
            languages: {
                "en": "https://sintrop.com/en/regeneration-credit/privacy-policy",
                "pt": "https://sintrop.com/pt/regeneration-credit/privacy-policy",
            }
        },
    }
}

export default async function PrivacyPolicy({ params }: Props) {
    const { locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t} />
                <HeroPrivacyPolicy t={t} />
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <h3 className="font-bold text-black mt-10">{t('title1')}</h3>
                <p className="text-black mt-1">{t('desc1.1')}</p>
                <p className="text-black mt-1">{t('desc1.2')}</p>

                <h3 className="font-bold text-black mt-10">{t('title2')}</h3>
                <p className="text-black mt-1">{t('desc2.1')}</p>
                <p className="text-black mt-1">{t('desc2.2')}</p>

                <h3 className="font-bold text-black mt-10">{t('title3')}</h3>
                <p className="text-black mt-1">{t('desc3.1')}</p>
                <p className="text-black mt-1">{t('desc3.2')}</p>

                <h3 className="font-bold text-black mt-10">{t('title4')}</h3>
                <p className="text-black mt-1">{t('desc4.1')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.a')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.b')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.c')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.d')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.e')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.f')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.g')}</p>
                <p className="text-black mt-1 ml-7">{t('desc4.1.h')}</p>
                <p className="text-black mt-1">{t('desc4.1.1')}</p>

                <h3 className="font-bold text-black mt-10">{t('title5')}</h3>
                <p className="text-black mt-1">{t('desc5.1')}</p>
                <p className="text-black mt-1">{t('desc5.2')}</p>
                <p className="text-black mt-1 ml-7">{t('desc5.2.a')}</p>
                <p className="text-black mt-1 ml-7">{t('desc5.2.b')}</p>
                <p className="text-black mt-1 ml-7">{t('desc5.2.c')}</p>
                <p className="text-black mt-1 ml-7">{t('desc5.2.d')}</p>
                <p className="text-black mt-1">{t('desc5.3')}</p>
                <p className="text-black mt-1">{t('desc5.4')}</p>

                <h3 className="font-bold text-black mt-10">{t('title6')}</h3>
                <p className="text-black mt-1">{t('desc6.1')}</p>

                <h3 className="font-bold text-black mt-10">{t('title7')}</h3>
                <p className="text-black mt-1">{t('desc7.1')}</p>
                <p className="text-black mt-1">{t('desc7.2')}</p>
                <p className="text-black mt-1 ml-7">{t('desc7.2.a')}</p>
                <p className="text-black mt-1 ml-7">{t('desc7.2.b')}</p>
                <p className="text-black mt-1 ml-7">{t('desc7.2.c')}</p>
                <p className="text-black mt-1">{t('desc7.3')}</p>

                <h3 className="font-bold text-black mt-10">{t('title8')}</h3>
                <p className="text-black mt-1">{t('desc8.1')}</p>
                <a href="https://ipfs.tech" target="_blank" className="underline text-blue-500">https://ipfs.tech</a>

                <h3 className="font-bold text-black mt-10">{t('title9')}</h3>
                <p className="text-black mt-1">{t('desc9.1')}</p>
                <p className="text-black mt-1 ml-7">{t('desc9.1.a')}</p>
                <p className="text-black mt-1 ml-7">{t('desc9.1.b')}</p>
                <p className="text-black mt-1 ml-7">{t('desc9.1.c')}</p>
                <p className="text-black mt-1 ml-7">{t('desc9.1.d')}</p>
                <p className="text-black mt-1 ml-7">{t('desc9.1.e')}</p>
                <p className="text-black mt-1">{t('desc9.2')}</p>
                <p className="text-black mt-1">{t('desc9.3')}</p>

                <h3 className="font-bold text-black mt-10">{t('title10')}</h3>
                <p className="text-black mt-1">{t('desc10.1')}</p>
                <p className="text-black mt-1">{t('desc10.2')}</p>
                <p className="text-black mt-1">{t('desc10.3')}</p>
                <p className="text-black mt-1 ml-7">{t('desc10.3.a')}</p>
                <p className="text-black mt-1 ml-7">{t('desc10.3.b')}</p>

                <h3 className="font-bold text-black mt-10">{t('title11')}</h3>
                <p className="text-black mt-1">{t('desc11.1')}</p>
                <p className="text-black mt-1">{t('desc11.2')}</p>

                <h3 className="font-bold text-black mt-10">{t('title12')}</h3>
                <p className="text-black mt-1">{t('desc12.1')}</p>

                <h3 className="font-bold text-black mt-10">{t('title13')}</h3>
                <p className="text-black mt-1">{t('desc13.1')}</p>
                <p className="text-black mt-1">{t('desc13.2')}</p>

                <p className="text-black mt-10">{t('lastUpdate')}</p>
            </main>

            <Footer t={t} />
        </TranslationsProvider>
    )
}