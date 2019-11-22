const rootDir = `${process.cwd()}/packages/react`;
const reactVersion = parseInt(process.env.REACT_VERSION);

const coverageThreshold = {
    'global': {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
    },
    [`${rootDir}/src/WebtrekkSmartPixelReact.js`]: {
        branches: 90
    },
    [`${rootDir}/src/polyfillCreateRef.js`]: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    }
};

if (reactVersion <= 15) {
    coverageThreshold[`${rootDir}/src/webtrekkReducer.js`] = {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    };
}

module.exports = {
    rootDir: rootDir,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/reports/coverage/${reactVersion}`,
    coverageThreshold: coverageThreshold
};
