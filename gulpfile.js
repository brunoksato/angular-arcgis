/**
 * Created by Bruno Sato
 * npm install gulp gulp-util gulp-rename gulp-minify-css gulp-jshint gulp-concat gulp-clean gulp-notify gulp-uglify gulp-ng-annotate gulp-autoprefixer --save-dev
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});


gulp.task('serve', ['browser-sync'], function(){

    //gulp.watch("example/*.js", ['js', browserSync.reload]);

});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./example"
        }
    });
});


gulp.task('build', ['scripts','styles','lint','clean', 'serve'], function() {

  //$.notify("Build Complete!");

});


gulp.task('lint', function() {
    gulp.src('src/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'));
});


gulp.task('styles', function() {
    gulp.src(['src/styles/*.css'])
        .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe($.rename("angular-arcgis.css"))
        .pipe(gulp.dest('dist/'));

    gulp.src(['src/styles/*.css'])
        .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe($.rename("angular-arcgis.min.css"))
        .pipe($.minifyCss())
        .pipe(gulp.dest('dist/'));
});


gulp.task('scripts', function() {
    gulp.src('src/**/*.js')
        .pipe($.ngAnnotate())
        .pipe($.concat('angular-arcgis.js'))
        .pipe(gulp.dest('example/'))
        .pipe(gulp.dest('dist/'));

    gulp.src('src/**/*.js')
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe($.rename('angular-arcgis.min.js'))
        .pipe(gulp.dest('dist/'));

    gulp.src('bower_components/angular/angular.min.js')
        .pipe(gulp.dest('example/'));

});


gulp.task('clean', function() {
    return gulp.src(['dist/*', 'example/*.js'], {read: false})
        .pipe($.clean());
});
