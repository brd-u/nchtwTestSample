const baseTestsConfig = require('../../configuration/baseTestsConfig.js').BaseTestsConfig


class MainPageTestSuite extends baseTestsConfig {

    constructor(browser) {

        super(browser)
    }

    first_test_case() {
        this.newPages().mainPage


        this.browser.end()
    }

}

module.exports.MainPageTestSuite = MainPageTestSuite