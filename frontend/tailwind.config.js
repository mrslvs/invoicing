/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primaryBlue: '#24B2EB',
                primaryTextBlack: '#121212',
                secondaryGray: '#3A3839',
                secondaryTextWhite: '#EDEDED',
                darkBackground: '#556773',
            },
            screens: {
                xl: '1000px',
                s: '600px',
                xs: '500px',
            },
        },
        fontFamily: {
            logo: ['Dancing Script', 'cursive'],
        },
    },
    plugins: [],
};
