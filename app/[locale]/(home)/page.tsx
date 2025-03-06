import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import { Button } from '@/components/ui/button';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: { params: { locale: string } }){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <div>
                <h1 className='text-green-500 text-xs'>{t('hello')} ola</h1>
                <p className='text-xl'>teste</p>
                <Button>Teste</Button>
            </div>
        </TranslationsProvider>
    )
}