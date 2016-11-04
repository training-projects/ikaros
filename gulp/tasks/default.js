/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['sass', 'concatjs', 'server'], function(){
    gulp.watch('../src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('../src/assets/js/**/*.js', ['concatjs']);
    gulp.watch('../src/**/*').on('change', browserSync.reload);
});