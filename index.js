const puppeteer = require('puppeteer');
(async () => {
     const browser = await puppeteer.launch({headless:false})
     const page = await browser.newPage()
     await page.goto('https://neman.kg/lekarstvennye-sredstva')
     await page.screenshot({path: 'img.png'})
    let arr = await page.evaluate(() => {
        let text = Array.from(document.querySelectorAll('.product-title'), el => el.innerText)
        return text
    })
    console.log(arr)
    await browser.close()
})()

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://neman.kg/lekarstvennye-sredstva');
//   await page.screenshot({ path: 'img.png' });

//   // Extract data from the page
//   let arr = await page.evaluate(() => {
//     let text = Array.from(document.querySelectorAll('.product-title'), el => el.innerText);
//     return text;
//   });

//   // Inject the parsed data into the page
//   await page.evaluate((arr) => {
//     // Create a new div element
//     const resultDiv = document.createElement('div');

//     // Append each item from the parsed data array as a new paragraph
//     arr.forEach(item => {
//       const paragraph = document.createElement('p');
//       paragraph.textContent = item;
//       resultDiv.appendChild(paragraph);
//     });

//     // Append the new div to the body of the page
//     document.body.appendChild(resultDiv);
//   }, arr);

//   // Close the browser
//   await browser.close();
// })();
