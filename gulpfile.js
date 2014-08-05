var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minimize', function() {
    return gulp.src('timetpl.js')
        .pipe(uglify())
        .pipe(concat('timetpl.min.js'))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['minimize']);