export default defineNuxtConfig({
    modules: [
        ["vue3-notion/nuxt", { css: true }], // css is not imported by default. Set `true` to import css
    ],
})