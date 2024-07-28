import test, { expect } from "@playwright/test";

test.describe("Insider Test Case", () => {
  test("Test Automation Test Case", async ({ page }) => {
    await page.goto("https://useinsider.com/");

    await test.step(`Visit https://useinsider.com/ and check Insider home page is opened or not`, async () => {

      expect(page.locator("#navigation").getByLabel("Home")).toBeVisible();


    });

    await test.step(`Select the “Company” menu in the navigation bar, select “Careers” and check Career
page, its Locations, Teams, and Life at Insider blocks are open or not`, async () => {});

    await test.step(`Go to https://useinsider.com/careers/quality-assurance/, click “See all QA jobs”, filter
jobs by Location: “Istanbul, Turkey”, and Department: “Quality Assurance”, check the
presence of the job list`, async () => {});

    await test.step(`Check that all jobs’ Position contains “Quality Assurance”, Department contains
“Quality Assurance”, and Location contains “Istanbul, Turkey”`, async () => {});

    await test.step(`Click the “View Role” button and check that this action redirects us to the Lever
Application form page`, async () => {});
  });
});
