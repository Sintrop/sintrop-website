import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import TagManager from 'react-gtm-module';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WZK3VDF'
    }

    TagManager.initialize(tagManagerArgs);
  },[]);

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);