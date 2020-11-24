const gulp = require('gulp'),
    sass = require('gulp-sass'),
    image = require('gulp-image'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

function reload(done) {
    connect.server({
        livereload: true,
        port: 8080
    });
    done();
}

function styles() {
    return (
        gulp.src('source/assets/sass/cannon.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 3 versions'],
                cascade: false
            }))
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('assets/css'))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename('cannon.min.css'))
            .pipe(gulp.dest('assets/css'))
            .pipe(connect.reload())
    );
}

function images() {
    return (
        gulp.src('source/assets/images/*')
            .pipe(image({
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: false,
                mozjpeg: true,
                gifsicle: true,
                svgo: true,
                concurrent: 10,
                quiet: true
            }))
            .pipe(gulp.dest('assets/img'))
    )
}

function html() {
    return (
        gulp.src('*.html')
            .pipe(plumber())
            .pipe(connect.reload())
    );
}

function views() {
    return (
        gulp.src('source/pug/pages/*.pug')
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('templates'))
            .pipe(connect.reload())
    )
}

function watchTask(done) {
    gulp.watch('templates/*.html', html);
    gulp.watch('source/assets/**/*.sass', styles);
    gulp.watch('source/assets/images/*', images);
    gulp.watch('source/pug/**/*.pug', views);
    done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, images, html, views));

exports.reload = reload;
exports.styles = styles;
exports.image = images;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;
