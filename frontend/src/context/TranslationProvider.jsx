import { createContext, useEffect, useState } from 'react';
import translations from '../assets/translations/translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [lng, setLng] = useState(navigator.language.startsWith('en') ? 'en' : navigator.language);

    // en-US
    // de
    // sk

    // handle browser change
    useEffect(() => {
        const handleLanguageChange = () => {
            const browserLanguage = navigator.language.startsWith('en') ? 'en' : navigator.language;
            console.log('provider:' + browserLanguage);

            setLng(() => browserLanguage);
            console.log('set up new language: ' + lng);
        };

        window.addEventListener('languagechange', handleLanguageChange);

        return () => window.removeEventListener('languagechange', handleLanguageChange);
    }, [lng]);

    const t = (id) => {
        return translations[id][lng];
    };

    return <TranslationContext.Provider value={{ lng, t }}>{children}</TranslationContext.Provider>;
};

export default TranslationContext;
