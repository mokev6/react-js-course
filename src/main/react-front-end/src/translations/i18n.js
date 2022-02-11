import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_FR } from "./fr/translations";
import { TRANSLATIONS_EN } from "./en/translations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   fallbackLng : 'en',
   detection: {
     order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
     caches: ['cookie'],
   },
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     fr: {
       translation: TRANSLATIONS_FR
     }
   }
 });