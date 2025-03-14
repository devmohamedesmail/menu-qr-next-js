
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) 
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', 
    supportedLngs: ['en', 'ar'], 
    interpolation: { escapeValue: false }, 
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translate.json', 
    },
    debug: true, 
  });

export default i18n;

