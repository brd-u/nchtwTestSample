const mainPageSelectors = require('./mainPage/mainPageSelectors.js')

class BaseMethods {

    constructor(browser) {

        this.browser = browser
    }

    isContentPresent(contentSelector, message = 'Content is visible') {
        this.browser
            .assert.elementPresent(contentSelector, message)
        return this
    }

    isPageCorrect(url) {
        this.browser
            .assert.urlContains(url, 'Page URL is correct')
        return this
    }


    /**
      * @param {Object[]} textToCheck - data as an array
     */
    isTextCorrect(textSlector, textToCheck, message) { //  zawartość split powinna być parametrem, nie zawsze po tym trzeba splitować.
        this.browser
            .GetIdText(textSlector, (text) => {
                let textValue = text.value.split(/[[\n]+/)
                for (let i = 0; i <= textValue.length - 1; i++) {
                    this.browser
                        .assert.equal(textToCheck[i], textValue[i])
                }
            })
        return this
    }

    // selectNavBtn(menuItem) {

    //     if (menuItem === 'start') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 1, 'Go to start page')
    //     } else if (menuItem === 'order') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 2, 'Go to order page')
    //     } else if (menuItem === 'articles') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 3, 'Go to articles page')
    //     } else if (menuItem === 'aboutUs') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 4, 'Go to aboutUs page')
    //     }
    //     else if (menuItem === 'contact') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 5, 'Go to contact page')
    //     }
    //     else if (menuItem === 'login') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 6, 'Go to login page')
    //     }
    //     else if (menuItem === 'register') {
    //         this.browser
    //             .ClickByPosition(mainPageSelectors.menuItem, 7, 'Go to register page')
    //     } else {
    //         console.error(`Couldn't find chosen case:${menuItem}`)
    //     }
    //     return this
    // }


    // selectFooterBtn(footerItem) {

    //     this.browser
    //         .elements('css selector', mainPageSelectors.footerItem, (elements) => {
    //             if (footerItem === 'start') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 1, 'Go to start page')
    //             } else if (footerItem === 'order') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 2, 'Go to order page')
    //             } else if (footerItem === 'articles') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 3, 'Go to articles page')
    //             } else if (footerItem === 'aboutUs') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 4, 'Go to aboutUs page')
    //             }
    //             else if (footerItem === 'contact') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 5, 'Go to contact page')
    //             }
    //             else if (footerItem === 'regulations') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 6, 'Go to regulations page')
    //             }
    //             else if (footerItem === 'privatePolicy') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 15, 'Go to private policy page')
    //             }
    //             else if (footerItem === 'faq') {
    //                 this.browser
    //                     .ClickByPosition(mainPageSelectors.footerItem, 16, 'Go to faq page')
    //             } else {
    //                 console.error(`Couldn't find chosen case:${footerItem}`)
    //             }
    //             return this
    //         })


    //     return this

    // }

}

module.exports.BaseMethods = BaseMethods