const rootDir = `${process.cwd()}/packages/react`;
const reactVersion = process.env.REACT_VERSION;

const coverageThreshold = {
    'global': {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
    },
    [`${rootDir}/shared/src/WebtrekkSmartPixelReact.js`]: {
        branches: 90
    },
    [`${rootDir}/shared/src/polyfillCreateRef.js`]: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    }
};

if (parseInt(reactVersion) <= 15) {
    coverageThreshold[`${rootDir}/shared/src/webtrekkReducer.js`] = {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    };
}

module.exports = {
    rootDir: rootDir,
    testPathIgnorePatterns: [
        '<rootDir>/next/'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/vanilla/src/**/*.js',
        '<rootDir>/shared/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/vanilla/reports/coverage/${reactVersion}`,
    coverageThreshold: coverageThreshold
};
