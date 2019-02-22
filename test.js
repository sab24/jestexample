const puppeteer = require("puppeteer");
var scrape = require('./scrape.js');
let browser;
beforeAll(async(done) => {
	browser = await puppeteer.launch({headless: false});
	done();
});

test('testing puppeteer page scrape', async() => {
	var page = await browser.newPage();	
	expect(await scrape.evaluateContent(page)).toBe('Google');
	await browser.close();
});
