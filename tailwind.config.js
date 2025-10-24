/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cyan: {
                    450: '#06b6d4',
                }
            },
            boxShadow: {
                soft: '0 6px 18px rgba(2,6,23,0.12)'
            }
        },
    },
    plugins: [],
}
