/*--------------------------------------------------------------
    EXECUTA SASS
--------------------------------------------------------------*/

var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var notify 		= require("gulp-notify");
var browserSync = require('browser-sync');

// tasks
gulp.task('sass', function () {
  return gulp.src('../src/assets/sass/**/*.scss')
    .pipe(sass())
    .on("error", notify.onError({title:"Ai, tu quebrou o SASS!"}))
    .pipe(gulp.dest('../src/assets/css/'))
});