const rootDir = `${process.cwd()}/packages/react`;
const reactVersion = process.env.REACT_VERSION;

const coverageThreshold = {
    'global': {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: 95
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
        '<rootDir>/vanilla/'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/next/src/**/*.js',
        '<rootDir>/shared/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/next/reports/coverage/${process.env.NEXT_VERSION}`,
    coverageThreshold: coverageThreshold
};
