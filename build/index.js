'use strict';

var fs           = require('fs'),
    buildScripts = require('./util/script-filter'),
    tasks        = fs.readdirSync('./build/tasks/').filter(buildScripts);

tasks.forEach(function (task) {
  require('./tasks/' + task);
});
