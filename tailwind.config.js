/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [],
    theme: {
        backgroundImage: {
            graphium: "url('/images/projects/graphium.png')",
            graphvis: "url('/images/projects/graphvis.png')",
            topicextraction: "url('/images/projects/topicextraction.png')",
            localite: "url('/images/projects/localite.png')",
            '3dmodelling': "url('/images/projects/3dmodelling.png')",
            planana: "url('/images/projects/planana.png')",
            uniboost: "url('/images/projects/uniboost.png')",
            utopi: "url('/images/projects/utopi.png')",
            grandappeal: "url('/images/projects/grandappeal.png')",
            greenwoods: "url('/images/projects/greenwoods.png')",
        },
        extend: {
            boxShadow: {
                '2xl': '0px 25px 50px 15px rgba(0, 0, 0, 0.3)',
                '3xl': '0px 35px 60px 15px rgba(0, 0, 0, 1)',
                'light_2xl': '0px 15px 40px 15px rgba(0, 0, 0, 0.05)',
                'light_3xl': '0px 25px 50px 15px rgba(0, 0, 0, 0.1)',
            },
            fontFamily: {
                'poppins': ['Poppins']
            },
            colors: {
                charcoal: '#11151c',
                dblue: '#364156',
                lblue: '#e3eef1',
                grey: '#f9fbfc',
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

