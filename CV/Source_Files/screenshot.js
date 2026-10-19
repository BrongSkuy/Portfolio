const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // A4 pada 96dpi = 794 x 1123 px; scale 3x agar JPG tajam
        await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 3 });
        const fileUrl = 'file://' + path.join(__dirname, 'cv_visual.html');
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        await page.evaluateHandle('document.fonts.ready');
        await new Promise(resolve => setTimeout(resolve, 800));

        const element = await page.$('.cv-container');
        const outPath = path.join(__dirname, '..', 'CV_Muhammad_Faiz_Rabbani_Visual.jpg');
        await element.screenshot({ path: outPath, type: 'jpeg', quality: 95 });

        await browser.close();
        console.log('Screenshot saved successfully at ' + outPath);
    } catch (err) {
        console.error('Error taking screenshot:', err);
    }
})();
