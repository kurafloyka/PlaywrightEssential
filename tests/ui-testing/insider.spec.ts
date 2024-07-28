import test, { expect } from "@playwright/test";
import {
  allTeamsNameInsider,
  cityNames,
  insiderHomePageUrl,
  insiderQaCareerUrl,
} from "../../src/insider-test-data";
import { InsiderCheckQaRolePage } from "../../src/pages/insider/insider-check-qa-role";

test.describe("Insider Test Case", () => {
  let insiderCheckQaRolePage: InsiderCheckQaRolePage;
  test.beforeEach(async ({ page }) => {
    insiderCheckQaRolePage = new InsiderCheckQaRolePage(page);
    await page.goto(insiderHomePageUrl);
  });

  test("Test Automation Test Case", async ({ page }) => {
    await test.step(`Visit https://useinsider.com/ and check Insider home page is opened or not`, async () => {
      expect(insiderCheckQaRolePage.homePageIcon).toBeVisible();
    });

    await test.step(`Select the “Company” menu in the navigation bar, select “Careers” and check Career
page, its Locations, Teams, and Life at Insider blocks are open or not`, async () => {
      await insiderCheckQaRolePage.companyMenu.click();
      await insiderCheckQaRolePage.careersMenu.click();

      await page.waitForLoadState("networkidle");
      const locations = insiderCheckQaRolePage.locationsElement;

      const locationsName = locations.allTextContents();
      expect((await locationsName).length).toBe(28);
      expect(await locations.allTextContents()).toEqual(cityNames);

      await insiderCheckQaRolePage.seeAllTemasButton.click();
      await page.waitForTimeout(2000);
      const allTeams = insiderCheckQaRolePage.allTeamsElement;

      const allTeamsName = allTeams.allTextContents();
      expect((await allTeamsName).length).toBe(15);
      expect((await allTeams.allTextContents()).map((i) => i.trim())).toEqual(
        allTeamsNameInsider
      );
      await expect(insiderCheckQaRolePage.lifeAtInsiderElement).toBeVisible();
    });

    await test.step(`Go to https://useinsider.com/careers/quality-assurance/, click “See all QA jobs”, filter
jobs by Location: “Istanbul, Turkey”, and Department: “Quality Assurance”, check the
presence of the job list`, async () => {
      await page.goto(insiderQaCareerUrl);

      await insiderCheckQaRolePage.seeAllQaJobsButton.click();
      await page.waitForLoadState("networkidle");
      await insiderCheckQaRolePage.allLocatiionButton.first().click();
      await page.waitForLoadState("networkidle");
      await insiderCheckQaRolePage.istanbulLocationButton.click();
      await insiderCheckQaRolePage.qaDepartmentButton.click();
      await insiderCheckQaRolePage.qaDepartmentOptionButton.click();
    });

    await test.step(`Check that all jobs’ Position contains “Quality Assurance”, Department contains
“Quality Assurance”, and Location contains “Istanbul, Turkey”`, async () => {
      await page.waitForLoadState("networkidle");
      const allPositionsField = insiderCheckQaRolePage.allPositionsFieldElement;

      for (const el of await allPositionsField.elementHandles()) {
        //console.log((await el.textContent())?.trim());
        expect((await el.textContent())?.trim()).toBe("Quality Assurance");
      }

      const allPositionsLocation =
        insiderCheckQaRolePage.allPositionsLocationElement;

      for (const el of await allPositionsLocation.elementHandles()) {
        expect((await el.textContent())?.trim()).toBe("Istanbul, Turkey");
      }
    });

    await test.step(`Click the “View Role” button and check that this action redirects us to the Lever
Application form page`, async () => {
      await insiderCheckQaRolePage.firstQAJob.first().hover();

      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),

        await insiderCheckQaRolePage.viewRoleButton.first().click(),
      ]);
      await newPage.waitForLoadState();
      const locator = newPage
        .getByRole("link", { name: insiderCheckQaRolePage.applyButtonText })
        .first();
      await expect(locator).toBeVisible();
      await newPage.close();
    });
  });
});
