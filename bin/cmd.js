#!/usr/bin/env node

var nash = require('nash');

var scott = require('../lib');

var cli = nash();

cli.register([
  {
    register: require('./help')
  }
], function () {
  
  cli.run(process.argv);
});