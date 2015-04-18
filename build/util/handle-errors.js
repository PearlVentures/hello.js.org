'use strict';

var config = require('../config'),
    notify = require('gulp-notify');

module.exports = function (error) {
  if (config.env === 'development') {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');

  } else {
    console.log(error);
    process.exit(1);
  }
};
