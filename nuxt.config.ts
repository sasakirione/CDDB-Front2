export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass"],
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    app:{
        head: {
            title: "Octopus CDDB",
            meta: [
                { charset: "utf-8" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" },
            ],
        },
    }
})
