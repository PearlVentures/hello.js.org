'use strict';

module.exports = {
  production: {
    basename: 'hellojs',
    suffix: '.min',
    dirname: '../../../public/assets/css'
  },

  styles: {
    entries: './src/less/hellojs.less',
    src: './src/less/**/*.less',
    dest: './public/assets/css'
  },

  scripts: {
    src: './src/js/**/*.js',
    dest: './public/assets/js'
  },


  minifyCSS: {
    keepBreaks: false,
    keepSpecialComments: false
  },

  uglify: {
    compress: {
      drop_debugger:  true
    }
  }
};
