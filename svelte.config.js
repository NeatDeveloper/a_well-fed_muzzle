import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        preprocess({
            scss: {
                prependData: `
                    @use 'src/app/styles/_colors.scss' as colors;
                `
            }
        })
    ],

    kit: {
        adapter: adapter(),
        files: {
            appTemplate  : path.resolve('src', 'app', 'index.html'),
            errorTemplate: path.resolve('src', 'app', 'error.html'),

            assets: path.resolve('static'),

            hooks: {
                client: path.resolve('src', 'app', 'hooks', 'client.ts'),
                server: path.resolve('src', 'app', 'hooks', 'server.ts'),
                universal: path.resolve('src', 'app', 'hooks', 'universal.ts'),
            },

            lib: path.resolve('src', 'app', 'lib'),

            params: path.resolve('routing', 'params'),
            routes: path.resolve('routing', 'routes'),

            serviceWorker: path.resolve('src', 'app', 'worker.ts')
        },

        alias: {
            styles: path.resolve('src', 'app', 'styles'),
            components: path.resolve('src', 'components'),
            pages: path.resolve('src', 'pages'),
            layouts: path.resolve('src', 'layouts'),
        }
    }
};

export default config;
