/**
 * Created by Asif on 7/23/16.
 */

/**
 * Gulp task runner
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var webserver = require('gulp-webserver');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!');
});
/**
 * "< !--build:" and "< !--endbuild-->" into one single JavaScript file that points to `data-css/dist/data-css.min.js`.
 * https://css-tricks.com/gulp-for-beginners/#article-header-id-10
 */
gulp.task('useref', function(){
    return gulp.src('*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('data-css'))
});

/**
 * run gulp web server task
 */
gulp.task('webserver', function() {
    gulp.src('./index.html')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});