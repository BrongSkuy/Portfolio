const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log("Launching browser for Visual PDF generation (A4)...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.join(__dirname, 'cv_visual.html');
  const fileUrl = `file://${filePath}`;

  console.log(`Opening ${fileUrl}...`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simpan langsung ke folder CV (satu level di atas Source_Files)
  const pdfPath = path.join(__dirname, '..', 'CV_Muhammad_Faiz_Rabbani_Visual.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await browser.close();
  console.log(`PDF saved successfully at ${pdfPath}!`);
})();
