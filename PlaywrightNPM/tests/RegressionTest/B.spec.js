import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.BUrl;

test.describe('Test Suite B @b @Regression', () => {
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

    test('Test Case B1', async ({ page }) => {
        await page.goto(baseurl);
        await networkGuard.assertClean('Bing page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('Search - Microsoft Bing');
        console.log('Test Case B1 executed successfully');
    });
});