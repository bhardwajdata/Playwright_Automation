import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.FUrl;

test.describe('Test Suite F @f @Regression', () => {
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

    test('Test Case F1', async ({ page }) => {
        await page.goto(baseurl);
        await networkGuard.assertClean('Chromium page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('Home');
        console.log('Test Case F1 executed successfully');
    });
});
