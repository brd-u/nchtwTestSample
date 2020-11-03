
module.exports = {



    beforeEach: function (browser, done) {

        console
            .info(`Start ${process.argv[4]}\nEnvironment : ${process.argv[process.argv.indexOf('-e') + 1]}`)

        done()
    },

    afterEach: function (browser, done) {

        console.info(`Tear down ${process.argv[4]}\nEnvironment : ${process.argv[process.argv.indexOf('-e') + 1]}`)

        done()
    },



    // NOTE: Global settings
    abortOnAssertionFailure: false,

    waitForConditionPollInterval: 3000,

    waitForConditionTimeout: 15000,

    throwOnMultipleElementsReturned: false,

    retryAssertionTimeout: 15000,

    asyncHookTimeout: 15000
}