npm i -D allure-playwright /
npm i -D allure-commandline /
npx allure generate allure-results --clean && npx allure open

https://trace.playwright.dev

https://gorest.co.in/


const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://yourwebsite.com');

  // example of page.waitForTimeout
  await page.waitForTimeout(5000); // waits for 5000 milliseconds

  // example of page.waitForSelector
  await page.waitForSelector('#elementId'); // waits for an element with id 'elementId' to appear in the DOM

  // example of page.waitForNavigation
  await page.click('a'); // click a link
  await page.waitForNavigation(); // wait for navigation to complete 

  // example of page.waitForResponse
  await page.waitForResponse(response => response.url() === 'https://yourwebsite.com/api' && response.status() === 200); // waits for a specific network response

  // example of page.waitForLoadState
  await page.waitForLoadState('networkidle'); // waits until there are no network connections for at least 500 ms

  await browser.close();
