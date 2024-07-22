import { Locator, Page } from "@playwright/test";

export class AddToCartPage {
  loginPageButton: Locator;
  usernameInput: Locator;
  submitUsernameButton: Locator;
  passwordInput: Locator;
  signInButton: Locator;
  searchProductInput: Locator;
  searchButton: Locator;
  firstProduct: Locator;
  productDetails:Locator;
  addToCartButton:Locator;

  constructor(private page: Page) {

    this.loginPageButton = this.page.locator('#nav-link-accountList-nav-line-1');
    this.usernameInput = this.page.locator("#ap_email");
    this.submitUsernameButton = this.page.locator("//*[@type='submit']");
    this.passwordInput = this.page.locator("#ap_password");
    this.signInButton = this.page.locator("#signInSubmit");
    this.searchProductInput = this.page.locator("#twotabsearchtextbox");
    this.searchButton = this.page.locator("#nav-search-submit-button");
    this.firstProduct = this.page.locator("//*[@data-cy='title-recipe']/h2");
    this.productDetails = this.page.locator("#productTitle");
    this.addToCartButton = this.page.locator("#add-to-cart-button");
  }

  
  async getAddedProductHeader(productDetails: string) {
    return  this.page.locator(`//h1[contains(text(),"${productDetails}")]`);
  }
}
