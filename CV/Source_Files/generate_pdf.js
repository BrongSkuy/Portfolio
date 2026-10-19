const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log("Launching browser for PDF generation...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Get absolute path of the HTML file
  const filePath = path.join(__dirname, 'cv_ats.html');
  const fileUrl = `file://${filePath}`;

  console.log(`Opening ${fileUrl}...`);
  // Load the page
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Add a slight delay to ensure fonts are fully loaded
  await new Promise(resolve => setTimeout(resolve, 500));

  const pdfPath = path.join(__dirname, '..', 'CV_Muhammad_Faiz_Rabbani_ATS.pdf');
  
  // Generate PDF
  console.log("Generating PDF...");
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
        top: '12mm',
        bottom: '12mm',
        left: '14mm',
        right: '14mm'
    }
  });

  await browser.close();
  console.log(`PDF saved successfully at ${pdfPath}!`);
})();
