const pageScraper = require('./pageScraper');
const fs = require('fs');

async function scrapeAll(browserInstance) {
	try {
		let browser = await browserInstance;
		let scrapedData = await pageScraper.scraper(browser);
		await browser.close();
		fs.writeFile("data.json", JSON.stringify(scrapedData), 'utf8', (error) =>
			error ? console.error("Could not write data: ", error)
				: console.log("The data has been scraped and saved successfully! View it at './data.json'")
		);
	}
	catch (err) {
		console.error("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
