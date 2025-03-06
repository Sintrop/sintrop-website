const i18nConfig = {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetector: (request, config) => {
        // your custom locale detection logic
        return 'the-locale';
      }
  };
  
module.exports = i18nConfig;