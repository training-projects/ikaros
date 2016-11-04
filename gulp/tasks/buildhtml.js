/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp 		= require('gulp');
var htmlReplace = require('gulp-html-replace');
var htmlmin 	= require('gulp-htmlmin');
var cleanhtml 	= require('gulp-clean');

gulp.task('buildhtml',['cleanhtml'], function(){
	gulp.src('../src/**/*.html')
	
	.pipe(htmlReplace({
		css: 'assets/css/all.min.css',
		js: 'assets/js/all.min.js'
	}))	
	
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('../dist'));
});

gulp.task('cleanhtml', function(){
    return gulp.src('../dist/**/*.html')
        .pipe(cleanhtml({force: true}));
});