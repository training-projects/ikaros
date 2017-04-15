/*--------------------------------------------------------------
    CONCATENA JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
  return gulp.src([

    // JQUERY
    'node_modules/jquery/dist/jquery.js',
    
    // BOOTSTRAP    
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js', 
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js', Esse sapeca está com treta :(
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
    // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js', 

    // FUNCTIONS
    '../src/assets/js/functions/functions.js'

  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../src/assets/js/'));
});