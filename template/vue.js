module.exports = {
    // extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
    extends: ['../rules/base', '../rules/vue'],
    parser: 'vue-eslint-parser',
    env: {
      // Your environments (which contains several predefined global variables)
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
    },
    globals: {
      // Your global variables (setting to false means it's not allowed to be reassigned)
      //
      // myGlobal: false
    },
    rules: {
      // Customize your rules
    },
  };