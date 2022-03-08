const path = require('path');

exports.config = {
  tests: './test/*_test.js',
  output: './test/.output',
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: 'electron',
      electron: {
        executablePath: require("electron"),
        args: [path.join(__dirname, "main.js")],
      },
      waitForNavigation: "networkidle0"
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'electron-quick-start',
  plugins: {
    wdio: {
        enabled: true,
        services: []
    }
 }
}
