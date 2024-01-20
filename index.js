// const puppeteer = require('puppeteer');
// (async () => {
//      const browser = await puppeteer.launch({headless:false})
//      const page = await browser.newPage()
//      await page.goto('https://neman.kg/lekarstvennye-sredstva')
//      await page.screenshot({path: 'img.png'})
//     let arr = await page.evaluate(() => {
//         let text = Array.from(document.querySelectorAll('.product-title'), el => el.innerText)
//         return text
//     })
//     console.log(arr)
//     await browser.close()
// })()




const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://neman.kg/lekarstvennye-sredstva');

    let arr = await page.evaluate(() => {
        let text = Array.from(document.querySelectorAll('.product-title'), el => el.innerText);
        return text;
    });

    await browser.close();

    // Создаем HTML-разметку для отображения данных на странице
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Отображение данных</title>
        </head>
        <body>
            <h1>Данные с веб-страницы:</h1>
            <ul>
                ${arr.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </body>
        </html>
    `;

    // Создаем файл HTML и записываем в него сгенерированный контент
    const fs = require('fs');
    fs.writeFileSync('output.html', htmlContent);

    console.log('Данные сохранены в файл output.html');
})();


