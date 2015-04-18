'use strict';

var config       = require('../config'),
    gulp         = require('gulp'),
    less         = require('gulp-less'),
    gutil        = require('gulp-util'),
    minify       = require('gulp-minify-css'),
    gulpif       = require('gulp-if'),
    rename       = require('gulp-rename'),
    logger       = require('../util/bundle-logger'),
    handleErrors = require('../util/handle-errors'),
    browserSync  = require('browser-sync');

gulp.task('styles', function () {
  var prod_env = gutil.env.p;

console.log(prod_env);
  return gulp.src(config.styles.entries)
    .pipe(less())
    .on('data', logger.read.bind(null, config.styles.entries))
    .on('error', handleErrors)
    .pipe(gulpif(prod_env, minify(config.minifyCSS)))
    .pipe(gulpif(prod_env, rename(config.production)))
    .pipe(gulp.dest(config.styles.dest))
    .on('end', logger.end.bind(null, 'hellojs.css'))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
