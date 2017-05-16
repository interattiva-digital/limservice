let mix = require('laravel-mix');
let glob = require('glob');
let path = require('path');

let options = {};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot('public/theme/limservice/dist');

mix.js('public/theme/limservice/src/js/app.js', 'public/theme/limservice/dist/js/app.js');

mix.sass('public/theme/limservice/src/scss/app.scss', 'public/theme/limservice/dist/css/app.css');

mix.copyDirectory('public/theme/limservice/src/img', 'public/theme/limservice/dist/img');

mix.copyDirectory('public/theme/limservice/src/fonts', 'public/theme/limservice/dist/fonts');

mix.sourceMaps();

mix.browserSync({
    proxy: 'limservice.dev',
    open: false,
    files: [
        'public/theme/limservice/dist/js/**/*.js',
        'public/theme/limservice/src/js/**/*.vue',
        'public/theme/limservice/dist/css/**/*.css',
        'public/theme/limservice/**/*.twig'
    ]
});

if(mix.config.inProduction) {

    let paths = [
        glob.sync(path.join(__dirname, 'public/theme/limservice/**/*.twig')),
        glob.sync(path.join(__dirname, 'public/theme/limservice/dist/js/**/*.js'))
    ];

    options.purifyCss = {
        paths: [].concat.apply([], paths)
    }
}

options.processCssUrls = false;

mix.options(options);
