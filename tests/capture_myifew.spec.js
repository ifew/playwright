// const { test } = require('@playwright/test');

// test('Capture screenshot of the entire scrollable webpage', async({ page }) => {

//     await page.goto('https://myifew.com/')
//     await page.screenshot({ path: 'screenshot/fullPage.png', fullPage: true, timeout: 100000 })
// })

const { chromium } = require("playwright");

(async() => {
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 1080 });
    await page.goto("https://myifew.com");
    await page.evaluate(async() => {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 0; i < document.body.scrollHeight; i += 100) {
            window.scrollTo(0, i);
            await delay(100);
        }
    });
    await page.screenshot({ path: 'screenshot/fullPage_homepage.png', fullPage: true });
    await browser.close();
})();

(async() => {
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 1080 });
    await page.goto("https://myifew.com/technology/");
    await page.evaluate(async() => {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 0; i < document.body.scrollHeight; i += 100) {
            window.scrollTo(0, i);
            await delay(100);
        }
    });
    await page.screenshot({ path: 'screenshot/fullPage_technology.png', fullPage: true });
    await browser.close();
})();