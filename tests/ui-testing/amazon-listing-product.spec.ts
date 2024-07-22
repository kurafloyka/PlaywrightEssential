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

    await page.locator("#ap_email").fill("farukakyol1@icloud.com");
    await page.locator("//*[@type='submit']").click();
    await page.locator("#ap_password").fill("Farukakyol1.");
    await page.locator("#signInSubmit").click();
    await page.locator("#twotabsearchtextbox").fill("Iphone");
    await page.locator("#nav-search-submit-button").click();
    //console.log(await page.locator("//*[@data-cy='title-recipe']/h2").first().textContent());
    const productName = await page
      .locator("//*[@data-cy='title-recipe']/h2")
      .first()
      .textContent();
    await page.locator("//*[@data-cy='title-recipe']/h2").first().click();
    const productDetails = await page.locator("#productTitle").textContent();
    expect(productName?.trim()).toEqual(productDetails?.trim());
    await page.locator("#add-to-cart-button").click();
    await expect(page.locator(`//h1[contains(text(),"${productDetails?.trim()}")]`)).toBeVisible();


    // //h1[contains(text(),"Apple iPhone 12 (128 GB) - Siyah")]
  });

  test("Amazon Listing Product Fail Test", async ({ page }) => {
    await page
      .getByRole("link", { name: "Merhaba, Giriş yapın Hesap ve" })
      .waitFor({ state: "visible", timeout: 5000 });
    await page
      .getByRole("link", { name: "MMerhaba, Giriş yapın Hesap ve" })
      .click();
    await expect.soft(page).toHaveURL(/signin/);
  });
});
