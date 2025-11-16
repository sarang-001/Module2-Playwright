import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test("POM Login Test", async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.navigate();
  await login.login("tomsmith", "SuperSecretPassword!");
  await dashboard.validateLogin();
  await dashboard.logout();
});
