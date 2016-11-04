/*--------------------------------------------------------------
    MINIFY IMAGES
--------------------------------------------------------------*/
// plugins
var gulp 	 = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanimages = require('gulp-clean');


gulp.task( 'imagemin', ['cleanimages'], function() {
  return gulp.src('../src/assets/images/**/*')
  	.pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  	.pipe(gulp.dest('../dist/assets/images/'));
});

gulp.task('cleanimages', function(){
    return gulp.src('../dist/assets/images')
        .pipe(cleanimages({force: true}));
});