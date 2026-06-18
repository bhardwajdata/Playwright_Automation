import { test, expect } from "@playwright/test";
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.HubUrl;

test.describe("Hub Functionality @docker @Regression", () => {
  let networkGuard;

  test.beforeEach(async ({ page }) => {
    networkGuard = createNetworkGuard(page);
  })

  test.afterEach(async () => {
    if (networkGuard) {
      await networkGuard.dispose();
      networkGuard = undefined;
    }
  })

  test("Should display relevant results when searching for a product", async ({ page }) => {

    await page.goto(baseurl);
    await networkGuard.assertClean('Hub page loaded with bad network responses');
    await page.waitForLoadState('networkidle');
    await page.locator('#js-link-box-en').click();
    console.log("✅ Wikipedia homepage loaded and English language selected!");
    await networkGuard.assertClean('Wikipedia page loaded with bad network responses');
    await page.getByRole('radio', { name: 'Small' }).check();
    console.log("✅ 'Small' Radio Button selected!");
    await networkGuard.assertClean('Wikipedia page loaded with bad network responses');
    await page.getByRole('radio', { name: 'Large' }).check();
    console.log("✅ 'Large' Radio Button selected!");
    await networkGuard.assertClean('Wikipedia page loaded with bad network responses');
    await page.getByRole('radio', { name: 'Wide' }).check();
    console.log("✅ 'Large' and 'Wide' Radio Buttons selected!");
    await page.locator('#skin-client-pref-vector-feature-limited-width-value-1').check();
    console.log("✅ 'Limited width' Checkbox selected!");

  });
});   