import { Page, expect } from "@playwright/test";

export class DashboardPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  successMessage = "div.flash.success";
  logoutBtn = "a.button.secondary.radius";

  async validateLogin() {
    await expect(this.page.locator(this.successMessage)).toContainText("You logged into a secure area!");
  }

  async logout() {
    await this.page.click(this.logoutBtn);
  }
}
