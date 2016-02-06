// Karma configuration
// Generated on Thu Feb 04 2016 16:45:25 GMT+0100 (CET)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine'],
    // list of files / patterns to load in the browser
    files: [
      //'https://code.jquery.com/jquery-2.1.4.js',
      'assets/js/jquery-2.1.1.min.js',
      'assets/js/**/*.js',
      'spec/**/*_spec.js', {
        pattern: 'spec/fixtures/**/*.html',
        included: false,
        served: true
      }
    ],

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: {},

    preprocessors: {
      "assets/**/*js": "coverage",
      '**/*.html': []
    },

    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-coveralls',
      'karma-jasmine',
      'karma-jasmine-jquery',
      "karma-spec-reporter"
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'coveralls'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    //  Custom launcher for Travis-CI
    customLaunchers: {
      chromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  })
  if (process.env.TRAVIS) {
    config.browsers = ['chromeTravisCI'];
  }
}
