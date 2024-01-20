import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/scss/main.scss', 'resources/js/main.js'],
            refresh: true,
        }),
    ],
});
