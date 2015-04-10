var eslint = require('eslint');

var CLIEngine = eslint.CLIEngine;

module.exports = function (files, options, done) {
  
  // Allow custom environments
  var envs = options.env || ['node'];
  
  var cli = new CLIEngine({
    envs: envs,
    // useEslintrc: false,
    ecmaFeatures: {
      modules: true,
      spread: true,
      destructuring: true,
      blockBindings: true,
      templateStrings: true
    },
    rules: {
      
      // TODO: write custom plugin that forces padding after function,
      // but not require it before closing brace (http://eslint.org/docs/rules/padded-blocks)
      
      'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],
      'comma-style': [2, 'last'],
      'consistent-this': [2, 'self'],
      'func-style': [2, 'declaration'],
      indent: [2, 2],
      'max-nested-callbacks': [2, 3],
      'max-params': [2, 4],
      'no-inline-comments': [2],
      'no-nested-ternary': [2],
      'no-plusplus': [1, true],
      'no-trailing-spaces': false,
      'one-var': [2, 'never'],
      quotes: [2, "single", "avoid-escape"],
      semi: [2, 'always'],
      'space-before-blocks': [1, 'always'],
      'space-before-function-paren': [1, 'always'],
      'space-in-brackets': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'spaced-line-comment': [1, 'always'],
      strict: false
    }
  });
  
  var report = cli.executeOnFiles(files);
  
  done(null, report);
}