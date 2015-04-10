#!/usr/bin/env node

var nash = require('nash');
var format = require('chalk');

var scott = require('../lib');

var cli = nash();

// register help/text
cli.register({register: require('./help')});

// Linter
cli.command('lint', 'l')
  .handler(function (data, flags, done) {
    
    var env = flags.env ? flags.env.split(',') : [];
    
    scott.lint(data, {env: env}, function (err, report) {
      
      report.results.forEach(function (result) {
        
        console.log(result);
      });
      
      done();
    });
    
  });

cli.run(process.argv);