import { resolve } from 'path';
import { defineConfig } from 'vite'; 
import solidPlugin from 'vite-plugin-solid';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
    plugins: [solidPlugin(), viteSingleFile()],

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
