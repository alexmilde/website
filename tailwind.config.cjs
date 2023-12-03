/** @type {import('tailwindcss').Config}*/

const plugin = require('tailwindcss/plugin')

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                bauhaus: [
                    'Bauhaus',
                    'ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                ],
            },
        },
    },

    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'Bauhaus',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    src: 'url(/fonts/Bauhaus_.ttf)',
                },
            })
        }),
    ],
}

module.exports = config
