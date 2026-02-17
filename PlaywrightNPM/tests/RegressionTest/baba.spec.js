import { test, expect } from "@playwright/test";

test.describe("TestingBaba Search Functionality in Firefox", () => {

test("@chromium should display relevant results when searching for a product", async ({ page }) => {

  await page.goto('https://testingbaba.com/');
  console.log("✅ TestingBaba homepage loaded!");
  await page.getByRole('link', { name: 'Career' }).click();
  console.log("✅ Navigated to Career section!");
  await page.getByRole('link', { name: ' Course' }).click();
  console.log("✅ Navigated to Course section!");
  await page.getByRole('link', { name: 'Automation Testing', exact: true }).click();
  await expect(page.locator('h1')).toBeVisible();
  console.log("✅ Navigated to Automation Testing section!");
  await expect(page.locator('h1')).toContainText('Automation Testing');
  console.log("✅ Automation Testing heading is visible and correct!");
    });
});   