import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use 'src/app/styles/_colors.scss' as colors;
                `
            }
        }
    },
});
