import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translations.json";
import fr from "./fr/translations.json";

export const resources = {
  en,
  fr,
} as const;


/*
i18n
 .use(initReactI18next)
 .init({
   fallbackLng : 'en',
   detection: {
     order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
     caches: ['cookie'],
   },
   resources,
 });*/



i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

  export default i18n;