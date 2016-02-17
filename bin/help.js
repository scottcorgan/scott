'use strict'

let usage = [
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
].map(line => `  ${line}`).join('\n')


module.exports = function (cli, options, done) {

  cli.default()
    .handler((data, flags, defaultDone) => {

      process.stdout.write(usage)
      defaultDone()
    })

  cli.flag('-h', '--help', '--usage')
    .handler(() => {

      process.stdout.write(usage)
      process.exit(0)
    })

  done()
}
