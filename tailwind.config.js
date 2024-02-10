/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', 'index.html'],
    theme: {
        extend: {
            container: {
                padding: {
                    xl: '16.4rem',
                },
            },
        },
    },
    plugins: [],
};
