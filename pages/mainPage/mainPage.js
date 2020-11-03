const mainPageSelectors = require('./mainPageSelectors.js')
const BaseMethods = require('../baseMethods.js').BaseMethods

class MainPage extends BaseMethods {

    constructor(browser, url) {//TODO:url globals link
        super(browser)
        this.url = url

    }


    goToMainPage() {
        this.browser
            .url(this.url)
            .assert.urlEquals(this.url, 'Page URL is correct')
        return this
    }



}
module.exports.MainPage = MainPage