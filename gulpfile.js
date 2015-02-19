/**
 * Created by Bruno Sato
 * npm install gulp gulp-util gulp-rename gulp-minify-css gulp-jshint gulp-concat gulp-clean gulp-notify gulp-uglify gulp-ng-annotate gulp-autoprefixer --save-dev
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

var testFiles = [
	'bower_components/angular/angular.js',
	'bower_components/angular-mocks/angular-mocks.js',
	'src/*.*',
	'test/**/*.spec.js'
];

gulp.task('serve', ['browser-sync'], function(){

    gulp.watch("example/esri.map.html", ['build', browserSync.reload]);
	  gulp.watch("src/esri.service.js", ['build', browserSync.reload]);

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./example/"
        },
				browser: "Chrome"
    });
});

gulp.task('build', ['scripts','styles','lint','clean', 'test', 'serve'], function() {


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

    gulp.src(['bower_components/angular/angular.min.js', 'bower_components/lodash/lodash.min.js' ])
        .pipe(gulp.dest('example/'));

});

gulp.task('clean', function() {
    return gulp.src(['dist/*', 'example/*.js'], {read: false})
        .pipe($.clean());
});

gulp.task('test', function(  ){

	return gulp.src(testFiles)
		.pipe($.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			$.notify(err);
			throw err;
		});

});