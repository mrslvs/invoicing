/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBackground: '#24B2EB',
                primaryText: '#121212',
                secondaryBagckground: '#3A3839',
                secondaryText: '#EDEDED',
            },
        },
    },
    plugins: [],
};
