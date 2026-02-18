import { test, expect } from "@playwright/test";

test.describe("Hub Functionality", () => {

test("Should display relevant results when searching for a product", async ({ page }) => {
        
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 7,125,000+ articles' }).click();
  console.log("✅ Wikipedia homepage loaded and English language selected!");
  await page.getByRole('radio', { name: 'Small' }).check();
  console.log("✅ 'Small' Radio Button selected!");
  await page.getByRole('radio', { name: 'Large' }).check();
  console.log("✅ 'Large' Radio Button selected!");
  await page.getByRole('radio', { name: 'Wide' }).check();
  console.log("✅ 'Large' and 'Wide' Radio Buttons selected!");
  await page.locator('#skin-client-pref-vector-feature-limited-width-value-1').check();
  console.log("✅ 'Limited width' Checkbox selected!");


    });
});   