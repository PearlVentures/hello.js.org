'use strict';

var config = require('../config'),
    gulp   = require('gulp');

gulp.task('watch', function () {
  gulp.watch(config.styles.src,  ['styles']);
});
