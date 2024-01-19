
// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     // ['./config/rules/base'].map(require.resolve),
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.js'],
//   parser: '@typescript-eslint/parser',
//   // plugins: ['react-refresh', ],
//   rules: {
//     // 'react-refresh/only-export-components': [
//     //   'warn',
//     //   { allowConstantExport: true },
//     // ],
//     eqeqeq: 'error',
//     'no-undef': 'off',
//     // fix err: https://github.com/eslint/eslint/issues/15492
//     'no-unused-vars': 'off',
//     // '@typescript-eslint/no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       {
//         args: 'none',
//         caughtErrors: 'none',
//         ignoreRestSiblings: true,
//         vars: 'all',
//       },
//     ],
//     'unused-imports/no-unused-vars': [
//       'error',
//       {
//         args: 'none',
//         caughtErrors: 'none',
//         ignoreRestSiblings: true,
//         vars: 'all',
//       },
//     ],
//     '@typescript-eslint/no-explicit-any': 'off',
//     // auto - fix
//     'unused-imports/no-unused-imports': 'error',
//     'unused-imports/no-unused-imports-ts': 'error',
//     // 'no-semi': 'error',
//     indent: [
//       'error',
//       2,
//       {
//         SwitchCase: 1,
//         VariableDeclarator: 1,
//         outerIIFEBody: 1,
//         MemberExpression: 1,
//         FunctionDeclaration: { parameters: 1, body: 1 },
//         FunctionExpression: { parameters: 1, body: 1 },
//         CallExpression: { arguments: 1 },
//         ArrayExpression: 1,
//         ObjectExpression: 1,
//         ImportDeclaration: 1,
//         flatTernaryExpressions: false,
//         ignoreComments: false,
//         ignoredNodes: [
//           'TemplateLiteral *',
//           'JSXElement',
//           'JSXElement > *',
//           'JSXAttribute',
//           'JSXIdentifier',
//           'JSXNamespacedName',
//           'JSXMemberExpression',
//           'JSXSpreadAttribute',
//           'JSXExpressionContainer',
//           'JSXOpeningElement',
//           'JSXClosingElement',
//           'JSXFragment',
//           'JSXOpeningFragment',
//           'JSXClosingFragment',
//           'JSXText',
//           'JSXEmptyExpression',
//           'JSXSpreadChild',
//         ],
//         offsetTernaryExpressions: true,
//       },
//     ],
//   },
// }



module.exports = {
  // root: true,
  extends: ["eslint-config-asm"],
  // extends: ['../index.js'].map(require.resolve),
  // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  rules: {
    // "typescript-eslint/no-unused-vars": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}

