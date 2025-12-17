/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4', // Main BG
                    800: '#292524', // Primary Text
                    900: '#1c1917',
                },
                olive: {
                    800: '#3f4d3f', // Custom Olive
                    900: '#2c362c',
                },
                rust: {
                    500: '#ca8a04', // Gold/Rust accent
                    600: '#b45309',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            }
        },
    },
    plugins: [],
}
