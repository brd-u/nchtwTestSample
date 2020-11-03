

module.exports.command = function (selector, callback,
    message = `Grabing text from element ${selector} on the web page`) {

    return this
        .waitForElementVisible(selector)
        .element('css selector', selector, function (element) {

            this
                .waitForElementVisible(selector)
                .elementIdText(element.value.ELEMENT, callback)
        })
}