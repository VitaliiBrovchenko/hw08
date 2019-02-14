"use strict";

let  gulp = require('gulp'); // Подключаем Gulp
let  sass = require('gulp-sass'); //Подключаем Sass пакет
let  autoprefixer = require('gulp-autoprefixer'); //Подключаем пакет автопрефикса

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: true
        }))
        .pipe(gulp.dest('src/css'))// Выгружаем результата в папку src/css
        .pipe(gulp.dest('dist/css'))// Выгружаем результата в папку dist/css


});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', gulp.series ('sass'));
    //gulp.watch('dist/*.html', gulp.series ('sass'));
});
