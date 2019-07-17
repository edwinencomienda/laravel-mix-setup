let mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('mix-html-builder');

mix
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['dist'],
                verbose: true,
            })
        ],
    })
    .js('src/js/app.js', 'dist/js/')
    .sass('src/sass/app.scss', 'dist/css/')
    .copyDirectory('src/img', 'dist/img');


mix.browserSync({
    proxy: false,
    notify: false,
    server: {
        baseDir: './dist'
    },
    files: ['./src/**']
});

mix.html({
    htmlRoot: './src/*.html', // Your html root file
    output: 'dist', // The html output folder
    partialRoot: './src/partials',    // default partial path
    minify: {
        removeComments: true
    }
});

mix.disableSuccessNotifications();