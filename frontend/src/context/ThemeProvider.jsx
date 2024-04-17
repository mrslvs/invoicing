import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark((previousState) => !previousState);

    // handle system change
    useEffect(() => {
        const prefersDarkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(prefersDarkModeMediaQuery.matches);

        const handleChange = (e) => setIsDark(e.matches);
        prefersDarkModeMediaQuery.addEventListener('change', handleChange);

        return () => prefersDarkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
