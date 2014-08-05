var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minimize', function() {
    return gulp.src('ago.js')
        .pipe(uglify())
        .pipe(concat('ago.min.js'))
        .pipe(gulp.dest(''));
});

gulp.task('minimize_en', function() {
  return gulp.src('en.js')
    .pipe(uglify())
    .pipe(concat('en.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('minimize_de', function() {
  return gulp.src('de.js')
    .pipe(uglify())
    .pipe(concat('de.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['minimize', 'minimize_en', 'minimize_de']);