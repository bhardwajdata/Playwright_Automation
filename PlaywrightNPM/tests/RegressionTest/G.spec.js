import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.GUrl;

test.describe('Test Suite G @g @Regression', () => {
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

    test('Test Case G1', async ({ page }) => {
        await page.goto(baseurl, { waitUntil: 'domcontentloaded' });
        await page.waitForLoadState('networkidle');
        await networkGuard.assertClean('Playwright page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
        console.log('Test Case G1 executed successfully');
    });
});