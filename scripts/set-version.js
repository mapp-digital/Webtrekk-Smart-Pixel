const fs = require('fs');
const path = require('path');
const {YELLOW} = require('./color');
const root = process.cwd();
const packagePath = process.argv[2];

const fullPath = root + packagePath.replace('.', '');
const version = require(fullPath + '/package.json').version;
const outputPath = fullPath + '/dist';

const files = [];
const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        }
        else {
            files.push(absolute);
        }
    }
};
getFilesRecursively(outputPath);

console.log(YELLOW, `Replacing '###VERSION###' with ${version} in ${files.length} file${files.length === 1 ? '' : 's'} within ${outputPath}...`);

files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/###VERSION###/g, version);
    fs.writeFileSync(filePath, newContent);
});
