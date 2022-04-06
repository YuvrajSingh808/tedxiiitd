module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            quattrocento: ['Quattrocento', 'serif'],
            lato: ['Lato', 'sans-serif'],
        },
        extend: {
            colors: {
                'backgroundBlack': '#0E061D',
                'tedRed': '#F9363A',
                'customWhite': '#FFFBFC',
            },
        },
    },
    plugins: [],
}