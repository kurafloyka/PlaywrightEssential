import test, { expect } from "@playwright/test";

test.describe("Insider Test Case", () => {
  test("Test Automation Test Case", async ({ page }) => {
    await page.goto("https://useinsider.com/");

    expect(page.locator("#navigation").getByLabel("Home")).toBeVisible();

    await page.getByRole("link", { name: "Company" }).click();

    await page.getByRole("link", { name: "Careers" }).click();

    const cityNames = [
      "New York",
      "Sao Paulo",
      "London",
      "Paris",
      "Amsterdam",
      "Barcelona",
      "Helsinki",
      "Warsaw",
      "Kiev",
      "Moscow",
      "Sydney",
      "Dubai",
      "Tokyo",
      "Seoul",
      "Singapore",
      "Bangkok",
      "Jakarta",
      "Taipei",
      "Manila",
      "Kuala Lumpur",
      "Ho Chi Minh City",
      "Istanbul",
      "Ankara",
      "Mexico City",
      "Lima",
      "Buenos Aires",
      "Bogota",
      "Santiago",
    ];

    await page.waitForLoadState("networkidle");
    const locations = page
      .locator("//div[@id='location-slider']")
      .locator("ul > li")
      .locator("p");

    const locationsName = locations.allTextContents();
    //console.log("locationsName: " + (await locationsName).length);
    expect((await locationsName).length).toBe(28);
    expect(await locations.allTextContents()).toEqual(cityNames);
    // for(const el of await locations.elementHandles()){
    //console.log("test "+await el.textContent());
    //}

    

    await page.getByRole("link", { name: "See all teams" }).click();
    await page.waitForTimeout(2000);
    const allTeams = page
      .locator("#career-find-our-calling")
      .locator('//div[contains(@class,"job-title")]');

    const allTeamsName = allTeams.allTextContents();
    expect((await allTeamsName).length).toBe(15);

    //for (const el of await allTeams.elementHandles()) {
      //console.log((await el.textContent())?.trim());
    //}

    const allTeamsNameInsider = [
      "Customer Success",
      "Sales",
      "Product & Engineering",
      "Finance & Business Support",
      "Marketing",
      "CEO’s Executive Office",
      "Purchasing & Operations",
      "People and Culture",
      "Business Intelligence",
      "Security Engineering",
      "Partnership",
      "Quality Assurance",
      "Mobile Business Unit",
      "Partner Support Development",
      "Product Design",
    ];
    expect((await allTeams.allTextContents()).map(i=>i.trim())).toEqual(allTeamsNameInsider);
    

    await expect(page.locator('.elementor-main-swiper')).toBeVisible();

   

    await page.goto("https://useinsider.com/careers/quality-assurance/");
    

    await page.getByRole('link', { name: 'See all QA jobs' }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole('textbox', { name: 'All' }).first().click();
    await page.waitForLoadState("networkidle");
  await page.getByRole('option', { name: 'Istanbul, Turkey' }).click();
  await page.getByRole('textbox', { name: 'Quality Assurance' }).click();
  await page.getByRole('option', { name: 'Quality Assurance' }).click();
    

const allPositionsField=page.locator("//*[@id='career-position-list']//span[contains(@class,'position-department')]");

for (const el of await allPositionsField.elementHandles()) {
      //console.log((await el.textContent())?.trim());
      expect((await el.textContent())?.trim()).toBe("Quality Assurance");
    }



const allPositionsLocation=page.locator("//*[@id='career-position-list']//div[contains(@class,'position-location text-large')]");

for (const el of await allPositionsLocation.elementHandles()) {
  
  expect((await el.textContent())?.trim()).toBe("Istanbul, Turkey");
}


  });
});
