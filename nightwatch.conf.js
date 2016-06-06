module.exports = (function(settings) {

	//Setting chromedriver path at runtime to run on different architectures
	if (process.platform === "linux") {
		settings.selenium.cli_args["webdriver.chrome.driver"] = "bin/chromedriver2";
	} else if (process.platform === "win32" || process.platform === "win64") {
		settings.selenium.cli_args["webdriver.chrome.driver"] =
			"bin/chromedriver.exe";
	}

	return settings;

})(require('./nightwatch.json'));
