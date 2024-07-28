import { Locator, Page } from "@playwright/test";

export class InsiderCheckQaRolePage {
  homePageIcon: Locator;
  companyMenu: Locator;
  careersMenu: Locator;
  locationsElement: Locator;
  seeAllTemasButton: Locator;
  allTeamsElement: Locator;
  lifeAtInsiderElement: Locator;
  seeAllQaJobsButton: Locator;
  allLocatiionButton: Locator;
  istanbulLocationButton: Locator;
  qaDepartmentButton: Locator;
  qaDepartmentOptionButton: Locator;
  allPositionsFieldElement: Locator;
  allPositionsLocationElement: Locator;
firstQAJob: Locator;
viewRoleButton: Locator;    
applyButtonText: string;


  constructor(private page: Page) {

    this.homePageIcon=page.locator("#navigation").getByLabel("Home");
    this.companyMenu = page.getByRole("link", { name: "Company" });
    this.careersMenu = page.getByRole("link", { name: "Careers" });
    this.locationsElement = page.locator("//div[@id='location-slider']").locator("ul > li").locator("p");
    this.seeAllTemasButton = page.getByRole("link", { name: "See all teams" });
    this.allTeamsElement = page.locator("#career-find-our-calling").locator('//div[contains(@class,"job-title")]');
    this.lifeAtInsiderElement = page.locator(".elementor-main-swiper");
    this.seeAllQaJobsButton = page.getByRole("link", { name: "See all QA jobs" });
    this.allLocatiionButton = page.getByRole("textbox", { name: "All" });
    this.istanbulLocationButton = page.getByRole("option", { name: "Istanbul, Turkey" });
    this.qaDepartmentButton = page.getByRole("textbox", { name: "Quality Assurance" });
    this.qaDepartmentOptionButton = page.getByRole("option", { name: "Quality Assurance" });
    this.allPositionsFieldElement = page.locator("//*[@id='career-position-list']//span[contains(@class,'position-department')]");
    this.allPositionsLocationElement = page.locator("//*[@id='career-position-list']//div[contains(@class,'position-location text-large')]");
    


    this.firstQAJob = page.locator("//*[@id='career-position-list']//div[@data-team='qualityassurance']");
    this.viewRoleButton = page.locator("//*[@id='career-position-list']//div[@data-team='qualityassurance']//a");
    this.applyButtonText='Apply for this job';
  }
}
