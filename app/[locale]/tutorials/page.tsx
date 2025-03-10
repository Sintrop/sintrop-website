import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroTutorials } from './components/HeroTutorials';
import { TutorialItem } from './components/TutorialItem/TutorialItem';
import { Accordion } from '@/components/ui/accordion';

const i18nNamespaces = ['home', 'tutorials'];

export default async function Tutorials({ params: { locale } }: { params: { locale: string } }){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t}/>
                <HeroTutorials t={t}/>
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <Accordion type="single" collapsible>
                    <TutorialItem/>
                </Accordion>
            </main>
        </TranslationsProvider>
    )
}