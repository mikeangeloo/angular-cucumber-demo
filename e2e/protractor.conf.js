// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions':{
      args:['--start-maximized']
    }
  },

  seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',

  localSeleniumStandaloneOpts:{
    port:4444,
    jvmArgs:[
      '-Dwebdriver.chrome.driver=./node_modules/webdriver-manager/selenium/chromedriver_114.0.5735.90.exe'
    ]
  },

  directConnect: false,
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
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
      // read the options part for more options
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }]

};
