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
    'node_modules/owl-carousel-2/owl.carousel.js',
    
    // BOOTSTRAP    
    // '../src/assets/js/functions/affix.js',
    // '../src/assets/js/functions/alert.js',
    // '../src/assets/js/functions/button.js',
    // '../src/assets/js/functions/carousel.js',
    '../src/assets/js/functions/collapse.js', 
    // '../src/assets/js/functions/dropdown.js',
    // '../src/assets/js/functions/modal.js',
    // '../src/assets/js/functions/popover.js', Esse sapeca está com treta :(
    // '../src/assets/js/functions/scrollspy.js',
    '../src/assets/js/functions/tab.js',
    // '../src/assets/js/functions/tooltip.js',
    '../src/assets/js/functions/transition.js', 

    // FUNCTIONS
    '../src/assets/js/functions/functions.js'

  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../src/assets/js/'));
});