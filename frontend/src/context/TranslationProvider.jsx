import { createContext, useEffect, useState } from 'react';
import translations from '../assets/translations/translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    // const [lng, setLng] = useState(navigator.language.startsWith('en') ? 'en' : navigator.language);
    const availableLanguages = ['en', 'de', 'sk'];
    const [lng, setLng] = useState(
        availableLanguages.includes(navigator.language) ? navigator.language : 'en'
    );

    // handle browser change
    useEffect(() => {
        const handleLanguageChange = () => {
            const browserLanguage = availableLanguages.includes(navigator.language)
                ? navigator.language
                : 'en';

            setLng(() => browserLanguage);
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
