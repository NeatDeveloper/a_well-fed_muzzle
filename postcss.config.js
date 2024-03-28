import autoprefixer from 'autoprefixer';
import minify from 'postcss-minify';

/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [autoprefixer, minify]
};

export default config;