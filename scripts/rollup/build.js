const rollup = require('rollup');
const color = require('./../color');
const { execSync } = require("child_process");

const root = process.cwd();
const PACKAGE_NAME = process.argv[2];
const packages = require('./packages')[PACKAGE_NAME];

async function buildBundle(pkg) {
    const rollupInputConfig = {
        input: `${pkg.packagePath}/${pkg.input}`,
        plugins: pkg.plugins,
        external: pkg.external
    };

    const rollupOutputConfig = [];
    for (let i = 0, l = pkg.format.length; i < l; i++) {
        rollupOutputConfig.push({
            name: pkg.packageName,
            file: `${pkg.packagePath}/${pkg.outputPath}/${pkg.outputName}.${pkg.format[i]}.js`,
            globals: pkg.global,
            format: pkg.format[i],
            exports: 'named'
        });
    }

    try {
        const bundle = await rollup.rollup(rollupInputConfig);

        for (let i = 0, l = rollupOutputConfig.length; i < l; i++) {
            console.log(color.BLUE, `Start processing "${PACKAGE_NAME}" of ${rollupOutputConfig[i].file}.`);
            await bundle.write(rollupOutputConfig[i]).then(() => {
                execSync('node ' + root + '/scripts/set-version.js ' + pkg.packagePath, {stdio: 'inherit'});
                console.log(color.BLUE, `Ends processing "${PACKAGE_NAME}" of ${rollupOutputConfig[i].file}.`);
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}

async function build() {
    for (let i = 0, l = packages.length; i < l; i++) {
        await buildBundle(packages[i]);
    }
}

build();
