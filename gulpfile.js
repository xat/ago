var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


function minify(name) {
  return function() {
    return gulp.src(name + '.js')
      .pipe(uglify())
      .pipe(concat(name + '.min.js'))
      .pipe(gulp.dest(''));
  };
}


gulp.task('minimize', minify('ago'));
gulp.task('minimize_en', minify('en'));
gulp.task('minimize_de', minify('de'));

gulp.task('default', ['minimize', 'minimize_en', 'minimize_de']);
