/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function(){
	browserSync.init({

		server: {
			baseDir: '../src'
		}

	});

});