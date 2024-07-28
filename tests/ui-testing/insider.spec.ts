import test, { expect } from "@playwright/test";
import {
  allTeamsNameInsider,
  cityNames,
  insiderHomePageUrl,
  insiderQaCareerUrl,
} from "../../src/insider-test-data";

test.describe("Insider Test Case", () => {
  test("Test Automation Test Case", async ({ page }) => {
    await page.goto(insiderHomePageUrl);

    await test.step(`Visit https://useinsider.com/ and check Insider home page is opened or not`, async () => {
      expect(page.locator("#navigation").getByLabel("Home")).toBeVisible();
    });

    await test.step(`Select the “Company” menu in the navigation bar, select “Careers” and check Career
page, its Locations, Teams, and Life at Insider blocks are open or not`, async () => {
      await page.getByRole("link", { name: "Company" }).click();

      await page.getByRole("link", { name: "Careers" }).click();

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

      expect((await allTeams.allTextContents()).map((i) => i.trim())).toEqual(
        allTeamsNameInsider
      );

      await expect(page.locator(".elementor-main-swiper")).toBeVisible();
    });

    await test.step(`Go to https://useinsider.com/careers/quality-assurance/, click “See all QA jobs”, filter
jobs by Location: “Istanbul, Turkey”, and Department: “Quality Assurance”, check the
presence of the job list`, async () => {
      await page.goto(insiderQaCareerUrl);

      await page.getByRole("link", { name: "See all QA jobs" }).click();
      await page.waitForLoadState("networkidle");
      await page.getByRole("textbox", { name: "All" }).first().click();
      await page.waitForLoadState("networkidle");
      await page.getByRole("option", { name: "Istanbul, Turkey" }).click();
      await page.getByRole("textbox", { name: "Quality Assurance" }).click();
      await page.getByRole("option", { name: "Quality Assurance" }).click();
    });

    await test.step(`Check that all jobs’ Position contains “Quality Assurance”, Department contains
“Quality Assurance”, and Location contains “Istanbul, Turkey”`, async () => {
      await page.waitForLoadState("networkidle");
      const allPositionsField = page.locator(
        "//*[@id='career-position-list']//span[contains(@class,'position-department')]"
      );

      for (const el of await allPositionsField.elementHandles()) {
        //console.log((await el.textContent())?.trim());
        expect((await el.textContent())?.trim()).toBe("Quality Assurance");
      }

      const allPositionsLocation = page.locator(
        "//*[@id='career-position-list']//div[contains(@class,'position-location text-large')]"
      );

      for (const el of await allPositionsLocation.elementHandles()) {
        expect((await el.textContent())?.trim()).toBe("Istanbul, Turkey");
      }
    });

    await test.step(`Click the “View Role” button and check that this action redirects us to the Lever
Application form page`, async () => {
      await page.pause();

      await page
        .locator(
          "//*[@id='career-position-list']//div[@data-team='qualityassurance']"
        )
        .first()
        .hover();

      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),

        await page
          .locator(
            "//*[@id='career-position-list']//div[@data-team='qualityassurance']//a"
          )
          .first()
          .click(),
      ]);
      await newPage.waitForLoadState();
      const locator = newPage
        .getByRole("link", { name: "Apply for this job" })
        .first();
      await expect(locator).toBeVisible();
      await newPage.close();
    });
  });
});
