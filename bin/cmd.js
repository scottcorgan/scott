#!/usr/bin/env node

'use strict'

let nash = require('nash')
let CLIEngine = require('eslint').CLIEngine
let scott = require('../lib')

let cli = nash()

// help/usage
cli.register({register: require('./help')})

// linter
cli.command('lint', 'l')
  .handler((data, flags, done) => {

    let formatter = CLIEngine.getFormatter('stylish')

    scott.lint(data, (err, report) => {

      process.stdout.write(formatter(report.results))

      if (report.errorCount > 0) {
        process.exit(1)
      }
      
      done()
    })
  })

cli.run(process.argv)
