let fs = require('fs')
// const logger = require('./../configuration/console/log4js.js').logAll
let path = require('path')
// const Utils = require('../helpers/utils.js').Utils


class DocumentClass {

	constructor() {

		this.encoding = ['utf8', 'utf16', 'ASCII', 'BINARY']
		// this.newPromise = Utils.createPromise()
	}

	readFile(filePath, encoding = this.encoding[0]) {
		try {
			return fs.readFileSync(filePath, encoding).toString().split(/[[\n,\r]+/)
		} catch (err) {
			console.error(`Couldn't read file with path: ${filePath} : ${err} `)
		}
	}

	// findFolder(source) {
	// 	let readDir = this.newPromise.promise = Utils.readDir(source)
	// 	return readDir
	// 		.then((list) => {
	// 			console.info(list)
	// 			return list
	// 		})
	// 		.catch((err) => {
	// 			console.error(`No results\n${err}`)
	// 		})
	// }

	getIndexFile(filePath, text, encoding = this.encoding[0]) {
		let indexList = []
		let file = fs.readFileSync(filePath, encoding).toString().split(/[[\n\r]+/)
		for (let i in file) {
			if (file[i].includes(text)) {
				indexList.push(Number(i) + 1)
			}
		}
		if (indexList.length === 0) {
			console.info('No results')
		}
		console.info(`Index: ${indexList}`)
		return indexList
	}

	writeFile(document, contents) {

		fs.writeFile(document, contents, (err) => {
			if (err) {
				console.error(`Couldn't save ${document} file with contents:${contents} : ${err} `)
			}
		})
	}

	prependFileSync(dirPath, fileName, encoding = this.encoding[0], contents) {

		let filePath = path.join(dirPath, fileName)
		let txt = this.readFile(filePath, encoding)

		txt.unshift(contents.trimStart())
		this.writeFile(filePath, txt.join('\n'))
	}

	appendFileSync(document, contents) {

		fs.appendFileSync(document, `\n${contents.trimEnd()}`, (err) => {
			if (err) {

				console.error(`Couldn't append ${document} file with contents:${contents} : ${err} `)
			}
		})
	}

	saveDocument(typeOfSave, nameOfDocument, typeOfDocument, contents, dirPath, encoding = this.encoding[0]) {

		if (typeOfSave === 'save') {

			this.writeFile(`${nameOfDocument}.${typeOfDocument}`, contents)

		} else if (typeOfSave === 'prepend') {

			this.prependFileSync(dirPath, `${nameOfDocument}.${typeOfDocument}`, encoding, contents)

		} else if (typeOfSave === 'append') {

			this.appendFileSync(`${nameOfDocument}.${typeOfDocument}`, contents)

		}
	}

	selectUserAndFindDownloadDoc(fileName, resultCallback) {

		let findAndDeleteDownloadDoc = (userName, fileName) => {
			let i = 0
			let findAndDeleteDoc = (userName, fileName) => {
			
				fs.readdir(`./../../../../Users/${userName}/Downloads/`, function (err, documentsList) {
					if (err) {
						console.error(err)
					}
					if (documentsList.includes(fileName)) {
						fs.unlink(`./../../../../Users/${userName}/Downloads/${fileName}`, (err) => {
							if (err) throw err
							fs.readdir(`./../../../../Users/${userName}/Downloads/`, function (err, documentsList) {
								if (err) {
									console.error(err)
								} else if (!documentsList.includes(fileName)) {
									console.log(`./../../../../Users/${userName}/Downloads/${fileName} was deleted`)
									resultCallback(true)
								}
								else {
									console.log(`Deletion of document '${fileName}' failed`)
								}
							})
						})

					} else {
						if (i < 4) {
							setTimeout(function () {
								i++
								findAndDeleteDoc(userName, fileName)
							}, 2000)
						} else if (i === 4) {
							resultCallback(false)
							return this
						} else {
							console.error(`Document has not been downloaded or incorrect file name: ${fileName}`)
							resultCallback(false)
							return this
						}
					}
				})
			}
			findAndDeleteDoc(userName, fileName)
		}
		fs.readdir('./../../../../Users/', function (err, usersList) {
			
			if (err) {
				console.error(err)
			}
			for (let i = 0; i < usersList.length; i++) {
				if (process.cwd().includes(usersList[i])) {
					findAndDeleteDownloadDoc(usersList[i], fileName)
				}
			}
		})
	}
}

module.exports.DocumentClass = DocumentClass