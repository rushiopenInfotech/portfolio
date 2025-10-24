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
                brand: {
                    light: '#7B4BFF',
                    cyan: '#4B8CFF'
                },
                'bg-dark': '#0F0E17',
                neutral: {
                    light: '#444444',
                    dark: '#DDDDDD'
                }
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(90deg, #7B4BFF 0%, #4B8CFF 100%)',
                'gradient-glow': 'radial-gradient(circle at center, rgba(123,75,255,0.15) 0%, rgba(75,140,255,0.15) 25%, rgba(123,75,255,0) 50%)'
            },
            boxShadow: {
                soft: '0 6px 18px rgba(2,6,23,0.12)'
            }
        },
    },
    plugins: [],
}