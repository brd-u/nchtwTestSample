const mainPageTestSuite = require('../../pages/mainPage/mainPageTestSuite.js').MainPageTestSuite

module.exports = {

    '@tags': ['mainPage'],
    'first_test_case': (browser) => {
        new mainPageTestSuite(browser).
            first_test_case()
    }

}

