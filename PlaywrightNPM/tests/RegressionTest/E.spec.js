import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.EUrl;

test.describe('Test Suite E @e @Regression', () => {
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

    test('Test Case E1', async ({ page }) => {
        await page.goto(baseurl);
        await networkGuard.assertClean('Wikipedia page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('Wikipedia');
        console.log('Test Case E1 executed successfully');
    });
});