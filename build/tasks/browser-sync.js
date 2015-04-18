'use strict';

var gulp        = require('gulp'),
    options     = require('../config').browserSync,
    browserSync = require('browser-sync');


gulp.task('browser-sync', function () {
  browserSync(options);
});
