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
            colors: {
                primary: '#2091F9',
                'custom-gray': '#374754',
                cream: '#F4F4F4',
                'darker-cream': '#E8E8E8',
                'custom-dark-blue': '#252B42',
            },
        },
    },
    plugins: [],
}
