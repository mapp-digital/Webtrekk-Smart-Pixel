const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  requestTimeout: 40000,
  defaultCommandTimeout: 40000,
  pageLoadTimeout: 80000,
  video: false,
  env: {
    codeCoverage: {
      url: 'http://phoenix:4000/__coverage__',
      expectBackendCoverageOnly: false,
    },
  },
  screenshotsFolder: '/E2E/results/screenshots',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: '/E2E/results/test-output-[hash].xml',
    jenkinsMode: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://phoenix:4000',
  },
})
