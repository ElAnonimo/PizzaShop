var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
  console.log('Hello from Gulp');

  return gulp.src('./public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});