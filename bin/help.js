var fs = require('fs');

var usage = [
  '',
  'A command-line application to make Scott\'s modules',
  '',
  'Usage',
  '',
  '  scott [command] [options]',
  '  ',
  'Commands',
  '',
  '  init         initiate a new module',
  '  lint         run Scott\'s stand linting rules against files',
  '',
  'Options',
  '',
  '  -h,--help    display usage/help text'
].map(function (line) { return '  ' + line;}).join('\n');


module.exports = function (cli, options, done) {
  
  cli.default()
    .handler(function (data, flags, done) {
      
      console.log(usage);
      done();
    });

  cli.flag('-h', '--help', '--usage')
    .handler(function (data, done) {
      
      console.log(usage);
      process.exit(0);
    });
  
  done();
};