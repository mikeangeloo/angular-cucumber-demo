// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    browserName: 'firefox',
    specs: ["./src/features/internet-explorer/**/graceful-shutdown.feature"],

    'moz:firefoxOptions': {
    }
  },

  seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',

  localSeleniumStandaloneOpts: {
    port: 4444,
    jvmArgs: [
      '-Dwebdriver.gecko.driver=./node_modules/webdriver-manager/selenium/geckodriver-v0.33.0.exe'
    ]
  },

  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};

