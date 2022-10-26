const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.js', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {

            fontFamily: {

                // Default font
                sans: defaultTheme.fontFamily.sans,

                // Include: <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
                'inter': ["'Inter var'", ...defaultTheme.fontFamily.sans],

            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}