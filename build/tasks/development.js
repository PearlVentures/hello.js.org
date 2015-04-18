'use strict';

var gulp = require('gulp');

gulp.task('development', function (callback) {
  callback = callback || function () {};

  require('run-sequence')('styles', 'watch', callback);
});
