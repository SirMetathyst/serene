const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.js', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {

                'gray': {
                    25: '#FCFCFD',  // WCAG(Contrast) AA 4.84:  gray-500
                    50: '#F9FAFB',  // WCAG(Contrast) AA 4.63:  gray-500
                    100: '#F2F4F7', // WCAG(Contrast) AA 4.49:  gray-500
                    200: '#EAECF0', // WCAG(Contrast) 4.19:     gray-500
                    300: '#D0D5DD', // WCAG(Contrast) 1.48:     white
                    400: '#98A2B3', // WCAG(Contrast) 2.58:     white
                    500: '#667085', // WCAG(Contrast) AA 4.95:  white
                    600: '#475467', // WCAG(Contrast) AAA:      white
                    700: '#344054', // WCAG(Contrast) AAA:      white
                    800: '#1D2939', // WCAG(Contrast) AAA:      white
                    900: '#101828', // WCAG(Contrast) AAA:      white
                },

                'primary': {
                    25: '#FCFAFF',  // WCAG(Contrast) AA 6.39:  primary-700
                    50: '#F9F5FF',  // WCAG(Contrast) AA 6.16:  primary-700
                    100: '#F4EBFF', // WCAG(Contrast) AA 5.74:  primary-700
                    200: '#E9D7FE', // WCAG(Contrast) AA 4.93:  primary-700
                    300: '#D6BBFB', // WCAG(Contrast) 1.70:     white
                    400: '#B692F6', // WCAG(Contrast) 2.49:     white
                    500: '#9E77ED', // WCAG(Contrast) 3.33:     white
                    600: '#7F56D9', // WCAG(Contrast) AA 4.96:  white
                    700: '#6941C6', // WCAG(Contrast) AA 6.63:  white
                    800: '#53389E', // WCAG(Contrast) AAA:      white
                    900: '#42307D', // WCAG(Contrast) AAA:      white
                },
            },

            fontFamily: {

                // Default font
                sans: defaultTheme.fontFamily.sans,

                // Include: <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
                'inter': ["'Inter var'", ...defaultTheme.fontFamily.sans],

                // Include: <link rel="preconnect" href="https://fonts.googleapis.com">
                // Include: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                // Include: <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
                'raleway': ["'Raleway'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}