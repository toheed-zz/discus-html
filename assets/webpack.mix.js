const { mix } = require('laravel-mix');
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

mix.setPublicPath('../public');
mix.setResourceRoot('./');


mix.autoload({  // or Mix.autoload() ?
  'jquery': ['$', 'window.jQuery', 'jQuery'],
});

// Import dependencies
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg  = require('imagemin-mozjpeg');
var StyleLintPlugin = require('stylelint-webpack-plugin');
//const bemLinter = require('postcss-bem-linter');

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                    // emitError: true,
                    // outputReport: true
                }
            },
        ],
    },
    plugins: [
        //Compress images
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '70-80'
            },
            plugins: [
                imageminMozjpeg({
                    quality: 90,
                })
            ]
        }),
        new StyleLintPlugin(),
    ],
});

mix.js('js/main.js', 'main.js')
    .sass('styles/main.scss', 'main.css');

mix.version();
