import { test, expect } from "@playwright/test";
import users from "../data/users.json";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

for (const user of users) {
  test(`Login test for user: ${user.username}`, async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.navigate();
    await login.login(user.username, user.password);

    if (user.valid) {
      await dashboard.validateLogin();
    } else {
      await expect(page.locator("div.flash.error"))
        .toContainText("Your username is invalid!");
    }
  });
}
