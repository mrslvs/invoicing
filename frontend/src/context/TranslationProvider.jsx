import { createContext, useEffect, useState } from 'react';
import translations from '../assets/translations/translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [lng, setLng] = useState(navigator.language.startsWith('en') ? 'en' : navigator.language);

    // en-US
    // de
    // sk

    // handle system change
    useEffect(() => {
        const handleLanguageChange = () => {
            const browserLanguage = navigator.language.startsWith('en') ? 'en' : navigator.language;
            console.log('provider:' + browserLanguage);

            setLng(() => browserLanguage);
            console.log('set up new language: ' + lng);
            // console.log(translations['home-header-login-button'].de);
        };

        window.addEventListener('languagechange', handleLanguageChange);

        return () => window.removeEventListener('languagechange', handleLanguageChange);
    }, [lng]);

    return (
        <TranslationContext.Provider value={{ lng, translations }}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationContext;
