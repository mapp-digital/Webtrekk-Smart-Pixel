const spawn = require('child_process').spawn;
const rimraf = require('rimraf');
const versionPackages = require('./packages');

const root = process.cwd();
const packageName = process.argv[2];
const version = process.argv[3];

const universalDependencies = require(`${root}/package`).devDependencies;

let packageDevDependencies = {};
try {
    packageDevDependencies = require(`${root}/packages/${packageName}/package`).devDependencies;
}
catch (e) {
    // do nothing
}

let packageDependencies = {};
try {
    packageDependencies = require(`${root}/packages/${packageName}/package`).dependencies;
}
catch (e) {
    // do nothing
}

let versionDependencies = {};
if (version) {
    versionDependencies = versionPackages[packageName][version];
}

const packagesToRemove = ['./package-lock.json', './yarn.lock', './node_modules'];

const promisify = fn => new Promise((res, rej) => {
    const done = (err, val) => (err ? rej(err) : res(val));
    fn(done);
});

const removePackage = packagePath => promisify((cb) => {
    console.log(`rm -rf ${packagePath}`);
    rimraf(packagePath, cb);
});

const isWindows = () => {
    return /^win/.test(process.platform);
};

const run = (cmd, ...args) => promisify((cb) => {
    var cmdCommand = cmd;
    if (isWindows()) {
        cmdCommand += '.cmd';
    }

    console.log(cmdCommand + ' ' + args.join(' '));
    const child = spawn(cmdCommand, args, {cwd: root, stdio: 'inherit'});
    child.on('error', cb);
    child.on('exit', cb);
});

const getPackagesToInstall = () => {
    const packagesToInstall = {
        ...universalDependencies,
        ...packageDevDependencies,
        ...packageDependencies,
        ...versionDependencies
    };

    const pkg = [];
    Object.keys(packagesToInstall).forEach((val) => {
        if (val.indexOf('//') === -1) {
            pkg.push(`${val}@${packagesToInstall[val]}`);
        }
    });

    return pkg;
};

Promise.resolve()
    .then(() => Promise.all(packagesToRemove.map(packagePath => removePackage(packagePath))))
    .then(() => {
        return run('npm', 'install', '--no-save', ...getPackagesToInstall());
    })
    .catch(err => console.error(err));
