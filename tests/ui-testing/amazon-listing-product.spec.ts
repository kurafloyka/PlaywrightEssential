import test, { expect } from "@playwright/test";
import { testdata } from "../../src/test-data";

test.describe("Amazon Testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testdata.testUrl);
    //await console.log(await page.title());
    await expect(page).toHaveTitle(testdata.title, { timeout: 5000 });
  });
  test.only("Amazon Listing Product", async ({ page }) => {
    await page
      .getByRole("link", { name: "Merhaba, Giriş yapın Hesap ve" })
      .waitFor({ state: "visible", timeout: 5000 });
    await page
      .getByRole("link", { name: "Merhaba, Giriş yapın Hesap ve" })
      .click();
    await expect.soft(page).toHaveURL(/signin/);
    await page.pause();
  });

  test("Amazon Listing Product Fail Test", async ({ page }) => {
    await page
      .getByRole("link", { name: "Merhaba, Giriş yapın Hesap ve" })
      .waitFor({ state: "visible", timeout: 5000 });
    await page
      .getByRole("link", { name: "MMerhaba, Giriş yapın Hesap ve" })
      .click();
    await expect.soft(page).toHaveURL(/signin/);
    await page.pause();
  });
});
