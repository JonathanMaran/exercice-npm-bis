const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const { parallel } = require('gulp')

function images(cb) {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
    cb();
}

function css(cb) {
    gulp.src('style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
    cb();
}

exports.default = parallel(images, css);
