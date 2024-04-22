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
                sm: '640px', // Small screens
                md: '768px', // Medium screens
                lg: '1024px', // Large screens
                xl: '1280px', // Extra large screens
            },
        },
        fontFamily: {
            logo: ['Dancing Script', 'cursive'],
        },
    },
    plugins: [],
};
