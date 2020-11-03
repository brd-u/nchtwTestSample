module.exports.command = function (selector, time, message = `Clicked selector: ${selector}`) {

    return this
        // .waitForElementVisible(selector, time)
        .click(selector, () => {
            console.log(message)
        })

}