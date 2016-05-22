window.locize.init({
    debug: true,
    saveMissing: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    backend: {
      referenceLng: 'en',
      apiKey: 'd889c501-267f-4bd0-bb41-5a30408f26fc',
      projectId: 'fbb8b12d-7ab6-4cc4-a4f9-8ac0199b0e16',
      //version: 'staging',
      loadPath: 'https://api-dev.locize.io/{{projectId}}/{{version}}/{{lng}}/{{ns}}',
      addPath: 'https://api-dev.locize.io/missing/{{projectId}}/{{version}}/{{lng}}/{{ns}}'
    }
  });
