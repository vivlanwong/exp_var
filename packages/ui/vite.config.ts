import { resolve } from 'path';
import { defineConfig } from 'vite'; 
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
    plugins: [solidPlugin(), viteSingleFile(),tailwindcss()],

    build: {
        minify: process.argv.includes('watch'),
        outDir: resolve(__dirname, '../../dist'),
        rollupOptions: {
            output: {
                format: 'iife',
            },
            external: [],
        },
    },
});
