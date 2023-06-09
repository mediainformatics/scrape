const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance) {
	try {
		let browser = await browserInstance;
		await pageScraper.scraper(browser);
		await browser.close();
		fs.writeFile("data.json", JSON.stringify(scrapedData), 'utf8', function (err) {
			if (err) {
				return console.log(err);
			}
			console.log("The data has been scraped and saved successfully! View it at './data.json'");
		});
	}
	catch (err) {
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
