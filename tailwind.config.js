/** @type {import('tailwindcss').Config} */
	import daisyui from 'daisyui'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main-background--computer': "url('../../public/computer-programing-main-img.png')",
            }
        },
        screens: {
            'md': { 'max': '768px' },
        },
    },
    darkMode: 'class',
    // eslint-disable-next-line no-undef
    plugins: [daisyui],
}