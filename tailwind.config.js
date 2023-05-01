/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        backgroundImage: {
            graphium: "url('/assets/images/graphium.png')",
            graphvis: "url('/assets/images/graphvis.png')",
            topicextraction: "url('/assets/images/topicextraction.png')",
            localite: "url('/assets/images/localite.png')",
            '3dmodelling': "url('/assets/images/3dmodelling.png')",
            planana: "url('/assets/images/planana.png')",
            uniboost: "url('/assets/images/uniboost.png')",
            utopi: "url('/assets/images/utopi.png')",
            grandappeal: "url('/assets/images/grandappeal.png')",
            greenwoods: "url('/assets/images/greenwoods.png')",
        },
        extend: {
            fontFamily: {
                'poppins': ['Poppins']
            },
            colors: {
                charcoal: '#11151c',
                dblue: '#364156',
                lblue: '#769FB6',
                cream: '#EEEBD3',
                orange: '#A33B20',
            },
            animation: {
                bounce_sm: 'bounce_sm 1s ease-in-out infinite',
            },
            keyframes: {
                bounce_sm: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-5%)',
                    }
}
            }
        },
    },
    plugins: [],
}

