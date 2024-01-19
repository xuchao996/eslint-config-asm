console.log(__dirname, ['../example/vue/vite+ts/tsconfig.json'].map(require.resolve))
module.exports = {
    extends: ['../rules/base', '../rules/vue', '../rules/typescript'],
    // extends: ['../rules/base', '../rules/vue'],
    // 覆盖逻辑
    parser: 'vue-eslint-parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      porject: ['../example/vue/vite+ts/tsconfig.json'].map(require.resolve)[0],
      // parser: '@typescript-eslint/parser',
      parser: '@typescript-eslint/parser',
      
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
      '@typescript-eslint/no-unsafe-assignment': 'error',
    }
  };
