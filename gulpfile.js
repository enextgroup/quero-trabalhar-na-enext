var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
    gulp.src('./assets/css/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('minifyCss', function() {
    gulp.src('./assets/css/style.css')
        .pipe(cleanCSS({
            keepSpecialComments: '0'
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/css/**/*.scss', ['sass']);
    gulp.watch('./assets/css/style.css', ['minifyCss']);
});
