module.exports = {
    evaluateContent: async function(page){
	  await page.goto('https://www.google.com');
	  result = await page.evaluate(() => {
		return(document.querySelector('#hplogo').alt);
	  });
	await page.close();
	return(result);
    },
}
