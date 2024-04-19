import { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lng, setLng] = useState('');

    // en-US
    // sk
    // de

    // handle system change
    useEffect(() => {
        const handleLanguageChange = () => {
            const browserLanguage = navigator.language;
            setLng(() => browserLanguage);
            console.log('set up new language: ' + lng);
        };

        // const handleChange = (e) => setIsDark(e.matches);
        window.addEventListener('languagechange', handleLanguageChange);

        return () => window.removeEventListener('languagechange', handleLanguageChange);
    }, [lng]);

    return <LanguageContext.Provider value={{ lng, setLng }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
