'use strict';
var gulp       = require('gulp');
var modules    = require('gulp-load-plugins')();
var uglify     = require('gulp-uglify');
gulp.task('styles', function () {
  return gulp.src('src/**/*.scss')
    .pipe(modules.sourcemaps.init())
    .pipe(modules.sass({outputStyle: 'compressed'}).on('error', modules.sass.logError))
    .pipe(modules.sourcemaps.write())
    .pipe(modules.sourcemaps.write('./'))
    .pipe(gulp.dest('htdocs'))
});
gulp.task('scripts', function() {
  return gulp.src([
   'src/assets/scripts/_config.js',
   'src/assets/scripts/_utility.js',
   'src/assets/scripts/_menu_panel.js',
   'src/assets/scripts/main.js'
  ])
    .pipe(modules.sourcemaps.init())
    .pipe(modules.concat('main.js'))
    .pipe(modules.sourcemaps.write())
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('htdocs/assets/scripts'))
});
gulp.task('build', [
  'scripts',
  'styles'
]);

gulp.task('default', function(){
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts'])
});