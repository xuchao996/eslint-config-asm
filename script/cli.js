import select from '@inquirer/select';

import { exec } from 'child_process';
import { constants, copyFileSync, readFileSync, writeFileSync } from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePath = (file) => {
    return resolve(__dirname, file)
}

const deps = {
    base: ['@babel/eslint-parser@^7.23.3'],
    react: [
        '@babel/preset-react@^7.23.3',
        "eslint-plugin-react@^7.33.2",
        "eslint-plugin-react-hooks@^4.6.0"
    ],
    typescript: [
        "typescript@^4.8.2",
        "@typescript-eslint/eslint-plugin@^6.14.0",
        "@typescript-eslint/parser@^6.14.0"
    ],
    vue: [
        "vue-eslint-parser@^9.3.1",
        "eslint-plugin-vue@^9.15.1",
    ]
}

const template = await select({
    message: 'Select template',
    choices: [
        {
            name: 'react',
            value: 'react',
            description: 'react for eslintrc template',
        },
        {
            name: 'react + ts',
            value: 'reactTs',
            description: 'react ts for eslintrc template',
        },
        {
            name: 'vue',
            value: 'vue',
            description: 'vue for eslintrc template',
        },
        {
            name: 'vue + ts',
            value: 'vueTs',
            description: 'vue ts for eslintrc template',
        },
        {
            name: 'vanilla + ts',
            value: 'baseTs',
            description: 'vue ts for eslintrc template',
        },
    ]
})

function installDeps(tem) {
    let _deps = []
    switch (tem) {
        case "vue":
            _deps = [deps['vue'], deps['typescript']]
            break
        case "react":
            _deps = [deps['react']]
            break
        case "reactTs":
            _deps = [deps['react'], deps['typescript']]
            break
        default:
            break
    }

    exec(`npm install --save-dev ${_deps.join(' ')}`)
}

function copyEslintrc(tem) {
    // if (resolve(__dirname, './eslintrc.js'))
    // 将 npm 里的文件复制到 项目里
    // copyFileSync(, , constants.COPYFILE_FICLONE_FORCE)

    const data = readFileSync(getFilePath(`../template/${tem}.js`), 'utf8').replace(/\{base\}/g, 'eslint-config-asm')
    writeFileSync(getFilePath('../.eslintrc.js'), data)
}

console.log('template', template)
// installDeps(template)


copyEslintrc(template)