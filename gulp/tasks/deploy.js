/*--------------------------------------------------------------
    TASK DEPLOY
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var deploy = require("gulp-gh-pages");
var options = { 
    remoteUrl: "https://github.com/training-projects/ikaros.github.io.git",
    branch: "master"};

gulp.task('deploy', function () {
    gulp.src("../dist/**/*")
        .pipe(deploy(options));
});