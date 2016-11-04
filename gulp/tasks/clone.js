/*--------------------------------------------------------------
    TASK CLONE
--------------------------------------------------------------*/
// plugins
var gulp  = require('gulp');
var cleanfonts = require('gulp-clean');

gulp.task('clone', ['cleanfonts'], function(){
	return gulp.src('../src/assets/fonts/**/*')
		.pipe(gulp.dest('../dist/assets/fonts/'));
});

gulp.task('cleanfonts', function(){
    return gulp.src('../dist/assets/fonts')
        .pipe(cleanfonts({force: true}));
});