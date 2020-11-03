

module.exports.command = function (selector, value, message = `Entering value: ${value} into the field: ${selector}`) {

    return this
        .waitForElementVisible(selector)
        .clearValue(selector)
        .setValue(selector, value, () => {
            console.log(message)
        })
}