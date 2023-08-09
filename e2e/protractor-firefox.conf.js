// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
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

  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

