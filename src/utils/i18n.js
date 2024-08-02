import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './pt.json';
import en from './en.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackI18n: pt,
    fallbackLng: 'pt',
    lng: 'pt',
    resources: {
        pt,
        en
    }
});

export default i18n;