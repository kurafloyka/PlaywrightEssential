import test, { expect } from "@playwright/test";
import { testdata } from "../../src/test-data";
import { AddToCartPage } from "../../src/pages/add-to-cart/add-to-card";

test.describe("Amazon Add To Cart Testing", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(testdata.testUrl);
    //await console.log(await page.title());
    await expect(page).toHaveTitle(testdata.title, { timeout: 5000 });
  });
  test.only("Amazon Listing Product", async ({ page }) => {

    let addToCartPage = new AddToCartPage(page);
    await addToCartPage.loginPageButton
      .waitFor({ state: "visible", timeout: testdata.timeout });
    await addToCartPage.loginPageButton
      .click();
    await expect.soft(page).toHaveURL(/signin/);
    
await page.pause();
    //login steps
    await addToCartPage.usernameInput.fill(testdata.email);
    await addToCartPage.submitUsernameButton.click();
    await addToCartPage.passwordInput.fill(testdata.password);
    await addToCartPage.signInButton.click();
    await addToCartPage.searchProductInput.fill(testdata.product);
    await addToCartPage.searchButton.click();
    
    //add product to cart
    const productName = await addToCartPage.firstProduct
      .first()
      .textContent();
    await addToCartPage.firstProduct.first().click();
    const productDetails = await addToCartPage.productDetails.textContent();
    expect(productName?.trim()).toEqual(productDetails?.trim());
    await addToCartPage.addToCartButton.click();

    //check added product
    const addedProductHeader = (await addToCartPage.getAddedProductHeader(`${productDetails?.trim()}`)).first();
    await expect(addedProductHeader).toBeVisible();
  });

  
});
