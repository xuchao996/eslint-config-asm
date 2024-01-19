import { copyFileSync, constants, readFileSync, writeFileSync, readFile } from 'node:fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePath = (file) => {
    return resolve(__dirname, file)
}

// destination.txt will be created or overwritten by default.
// copyFileSync(getFilePath(`../template/${tem}.js`), getFilePath('../.eslintrc.js'), constants.COPYFILE_FICLONE_FORCE)

const data = readFileSync(getFilePath('../template/reactTs.js'), 'utf8')
writeFileSync('./a.js', data)

// copyFileSync(getFilePath('../template/reactTs.js'), getFilePath('./a.js'), constants.COPYFILE_EXCL);
// copyFileSync(getFilePath('../template/reactTs.js'), getFilePath('./a.js'), constants.COPYFILE_FICLONE);
// copyFileSync(getFilePath('../template/reactTs.js'), getFilePath('./a.js'), constants.COPYFILE_FICLONE_FORCE);