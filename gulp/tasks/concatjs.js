/*--------------------------------------------------------------
    CONCATENA JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
  return gulp.src([

    // HELPERS
    '../src/assets/js/helpers/html5shiv.js',
    '../src/assets/js/helpers/respond.js',

    // JQUERY
    '../src/assets/js/libs/jquery/jquery-2.2.4.js',
    
    // BOOTSTRAP    
    // '../src/assets/js/libs/bootstrap/affix.js',
    // '../src/assets/js/libs/bootstrap/alert.js',
    // '../src/assets/js/libs/bootstrap/button.js',
    // '../src/assets/js/libs/bootstrap/carousel.js',
    '../src/assets/js/libs/bootstrap/collapse.js',
    // '../src/assets/js/libs/bootstrap/dropdown.js',
    // '../src/assets/js/libs/bootstrap/modal.js',
    // '../src/assets/js/libs/bootstrap/popover.js', Esse sapeca está com treta :(
    // '../src/assets/js/libs/bootstrap/scrollspy.js',
    // '../src/assets/js/libs/bootstrap/tab.js',
    // '../src/assets/js/libs/bootstrap/tooltip.js',
    '../src/assets/js/libs/bootstrap/transition.js',

    // FANCYBOX
    // '../src/assets/js/libs/fancybox/jquery.fancybox.js',        

    // OWL CAROUSEL
    '../src/assets/js/libs/owl-carousel/owl.carousel.js',

    // FUNCTIONS
    '../src/assets/js/functions/functions.js'

  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../src/assets/js/'));
});