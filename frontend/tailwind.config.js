/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#24B2EB',
                primaryTextBlack: '#121212',
                secondaryGray: '#3A3839',
                secondaryTextWhite: '#EDEDED',
            },
        },
    },
    plugins: [],
};
