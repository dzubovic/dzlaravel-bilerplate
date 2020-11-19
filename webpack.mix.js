const mix = require('laravel-mix');
require("laravel-mix-tailwind");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css/app.css")
    .tailwind("./tailwind.config.js")
    .extract([
        'alpinejs',
        'jquery',
        'sweetalert2'
    ])
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
