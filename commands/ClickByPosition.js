
module.exports.command = function (selector, position, message = `Element on position ${position} from list ${selector} was clicked.`) {
	return this
		.waitForElementVisible(selector)
		.elements('css selector', selector, (elements) => {
			this.elementIdClick(elements.value[position - 1].ELEMENT, () => {
				console.log(message)
			})
		})
}