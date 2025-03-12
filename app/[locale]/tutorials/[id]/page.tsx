import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import { Header } from '@/components/Header/Header';
import { HeroTutorials } from '../components/HeroTutorials';
import { Footer } from '@/components/Footer/Footer';
import { LanguagesAvailablesForTutorials, tutorialsListPerLanguage } from '../tutorialsList';
import { redirect } from 'next/navigation';
import { getContentMDFromGitHub } from '@/src/services/github';

const i18nNamespaces = ['home', 'tutorials'];

export default async function Tutorial({ params }: { params: { locale: LanguagesAvailablesForTutorials, id: string } }) {
    const { id, locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const findTutorial = tutorialsListPerLanguage[locale].filter(item => item.id === id);

    if (findTutorial.length === 0) {
        return redirect('/tutorials');
    }

    const tutorial = findTutorial[0];

    const contentMDTutorial = await getContentMDFromGitHub({
        pathFile: tutorial.pathFile,
        repo: tutorial.repo,
        username: tutorial.username,
    });

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div className='bg-[url("/assets/images/capa-site-1.png")] w-full flex flex-col bg-cover bg-center'>
                <Header t={t} />
                <HeroTutorials t={t} title={tutorial.title} />
            </div>

            <main className='container mx-auto px-5 lg:px-20 my-10 lg:my-20'>
                <div
                    dangerouslySetInnerHTML={{ __html: contentMDTutorial }}
                    className="markdown-content"
                />
            </main>

            <Footer t={t} />
        </TranslationsProvider>
    )
}