// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                addToList: resolve(__dirname, 'formulaire-de-soutien.html'),
                getList: resolve(__dirname, 'liste-des-soutiens.html'),
            },
        },
    },
    base: "/comite-de-soutien/"
})