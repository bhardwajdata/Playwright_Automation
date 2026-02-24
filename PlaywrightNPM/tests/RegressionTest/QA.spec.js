import { test,expect } from "@playwright/test";
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.QaUrl;

test.describe("QA Search Functionality", () => {
test("Should display relevant results when searching for a product", async ({ page }) => {

  await page.goto(baseurl);
  await page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
  console.log("✅ DemoQA homepage loaded!");
  await page.getByText('Radio Button').click();
  await expect(page.getByText('Do you like the site?')).toBeVisible();
  console.log("✅ Navigated to Radio Button section!");
  await expect(page.getByText('Yes')).toBeVisible();
  await expect(page.getByText('Impressive')).toBeVisible();
  console.log("✅ Radio Button options are visible!");
  await expect(page.getByText('No')).toBeVisible();
  await page.getByText('Yes').click();
  console.log("✅ 'Yes' Radio Button selected!");
  await expect(page.getByRole('paragraph')).toContainText('You have selected Yes');
  await page.getByText('Text Box').click();
  console.log("✅ Navigated to Text Box section!");
  await expect(page.locator('#userName-label')).toContainText('Full Name');
  console.log("✅ Full Name label is visible!");

    });
});   