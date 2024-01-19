
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    // react 
    // "extends": ["./rules/base", "./rules/react", "./rules/typescript"].map(require.resolve),
    "extends": ["{base}/rules/base", "{base}/rules/react", "{base}/rules/typescript"].map(require.resolve), // react + ts
    // vue
    // "extends": ["./rules/base", "./rules/vue"].map(require.resolve),
    // vue + ts
    // "extends": ["./rules/typescript", "./rules/vue"].map(require.resolve), 
    // "extends": [".", "./rules/react"].map(require.resolve), // react 
    "parserOptions": {
        "ecmaVersion": 12
    },
    globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
    },
    rules: {
        /**
       * <script> 标签必须有 lang 属性
       */
      // 'vue/block-lang': ['error', {
      //   "script": {
      //     "lang": "ts"
      //   }
      // }],
      // "no-unused-vars": "error",
      // "@typescript-eslint/no-unused-vars": "error",
      // "vue/no-unused-vars": "error"
    }
    // "plugins": ["react-refresh"],
    // "rules": {
    //     "react-refresh/only-export-components": "off",
    //     // "@typescript-eslint/no-unused-vars": "warn",
    // }
}
