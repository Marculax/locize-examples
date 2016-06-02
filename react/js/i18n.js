window.locize.init({
    debug: true,
    saveMissing: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    backend: {
      referenceLng: 'en',
      // apiKey: '',
      projectId: '58ae1c51-1119-4228-b159-fa699dff2e27'
    }
  });
