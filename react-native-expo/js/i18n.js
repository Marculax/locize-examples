import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import Expo from 'expo';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return Expo.Util.getCurrentLocaleAsync().then(lng => { callback(lng); })  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(LocizeBackend) // loads translations from locize.com -> change to i18next-xhr-backend to load them from your own server
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly', // optional - load only languages without regions
    whitelist: ['en', 'de'], // optional - allowed languages

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,
    saveMissing: false, // enable to send new keys to the locize project (works only when loading in reference language and apiKey is set in backend options)

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    backend: {
      referenceLng: 'en',
      // apiKey: '****',
      projectId: 'd321da76-b37d-43f3-a139-0f82810c8197'
    }
  });


export default i18n;
