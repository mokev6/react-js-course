import { resources, defaultNS } from './i18n';
import en from "./en/translations.json";

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: typeof en;
    }
}