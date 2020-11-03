const baseMethods = require('../pages/baseMethods.js').BaseMethods

const mainPageClass = require('../pages/mainPage/mainPage').MainPage

const mainPageSelectors = require('../pages/mainPage/mainPageSelectors.js')


class BaseTestsConfig extends baseMethods {

    constructor(browser) {

        super(browser)
    }



    pagesPaths() {

        let pagesPaths = {

            mainPageSelectors,

        }

        return pagesPaths
    }


    newPages() {

        let pages = {

            mainPage: new mainPageClass(this.browser),
        }

        return pages
    }


}
module.exports.BaseTestsConfig = BaseTestsConfig