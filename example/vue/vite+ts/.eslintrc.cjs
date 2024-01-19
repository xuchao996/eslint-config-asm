// module.exports = {
//   // extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
//   extends: ['../../../rules/base', '../../../rules/vue', '../../../rules/typescript'],
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     // parser: '@typescript-eslint/parser',
//     parser: {
//       js: '@babel/eslint-parser',
//       jsx: '@babel/eslint-parser',

//       ts: '@typescript-eslint/parser',
//       tsx: '@typescript-eslint/parser',

//       // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
//     },
//   },
//   env: {
//     // Your environments (which contains several predefined global variables)
//     //
//     // browser: true,
//     // node: true,
//     // mocha: true,
//     // jest: true,
//     // jquery: true
//   },
//   globals: {
//     // Your global variables (setting to false means it's not allowed to be reassigned)
//     //
//     // myGlobal: false
//   },
//   rules: {
//     // Customize your rules
//   },
// };

module.exports = {
  root: true,
  // extends: ['../rules/base', '../rules/vue', '../rules/typescript'],
  extends: ['../../../rules/base', '../../../rules/vue'],
  // 覆盖逻辑
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    
    // tsconfigRootDir: './',
    // project: './tsconfig.json',
    // extraFileExtensions: ['.vue'],
    // parser: {
    //   js: '@babel/eslint-parser',
    //   jsx: '@babel/eslint-parser',

    //   ts: '@typescript-eslint/parser',
    //   tsx: '@typescript-eslint/parser',

    // //   // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    // },

  },
  rules: {
    // '@typescript-eslint/no-unsafe-assignment': 'off',
  }
};
