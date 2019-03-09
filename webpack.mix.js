let mix = require('laravel-mix');


mix.setPublicPath('public')
   .js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version()
   .browserSync({
      server: { baseDir: ['public'] },
      proxy: undefined,
      files: [
         'public/**/*.html',
         'public/**/*.php',
         'public/js/**/*.js',
         'public/css/**/*.css',
     ],
   });
;