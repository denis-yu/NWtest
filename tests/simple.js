module.exports = {
	before: function(browser) {
		console.log('Setting up...');
	},

	after: function(browser) {
		console.log('Closing down...');
	},

	beforeEach: function(browser) {
		console.log('Setting up each...');
	},

	afterEach: function() {
		console.log('Closing down each...');
	},
	"Demo test Google": function(browser) {
		browser
			.url('http://www.google.com')
			.waitForElementVisible('body', 1000)
			.setValue('input[type=text]', 'nightwatch')
			.waitForElementVisible('button[name=btnG]', 1000)
			.click('button[name=btnG]')
			.pause(1000)
			.assert.containsText('#main', 'Night Watch')
			.end();
	}
};
