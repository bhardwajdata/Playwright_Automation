import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.AUrl;

test.describe('Test Suite A @a @Regression', () => {
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

    test('Test Case A1', async ({ page }) => {
        await page.goto(baseurl);
        await networkGuard.assertClean('Google page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('Google');
        console.log('Test Case A1 executed successfully');

    });
});