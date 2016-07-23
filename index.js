/**
 * Created by Asif on 7/23/16.
 */

var gulp = require('gulp');
require('./gulpfile');

/**
 * Start the web server
 */
if (gulp.tasks.webserver) {
    gulp.start('webserver');
}