// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL
        }
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        ['nuxt-mail', {
            message: {
                to: process.env.MAIL_TO,
                from: process.env.MAIL_TO,
            },
            smtp: {
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            },
        }],
    ],
})
