import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroHome } from './components/HeroHome';
import { Abstract } from './components/Abstract';
import { Blockchain } from './components/Blockchain';
import { Applications } from './components/Applications';
import { Descetralization } from './components/Descetralization';
import { Pow } from './components/Pow';
import { Energy } from './components/Energy';
import { FeaturedApp } from './components/FeaturedApp';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: { params: { locale: string } }){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t}/>

                <HeroHome t={t}/>
            </div>

            <main>
                <div className='container mx-auto px-5 lg:px-20'>
                    <Abstract t={t} />

                    <Blockchain t={t}/>

                    <Applications t={t}/>

                    <Descetralization t={t}/>

                    <Pow t={t}/>

                    <Energy t={t}/>
                </div>

                <FeaturedApp t={t}/>
            </main>
        </TranslationsProvider>
    )
}