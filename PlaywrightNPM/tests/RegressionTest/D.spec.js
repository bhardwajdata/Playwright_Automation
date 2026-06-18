import { test, expect } from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';
import { createNetworkGuard } from '../../network-guard';

const baseurl = urls.DUrl;

test.describe('Test Suite D @d @Regression', () => {
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
    test('Test Case D1', async ({ page }) => {
        await page.goto(baseurl);
        await networkGuard.assertClean('DuckDuckGo page loaded with bad network responses');
        const title = await page.title();
        expect(title).toBe('DuckDuckGo - Protection. Privacy. Peace of mind.');
        console.log('Test Case D1 executed successfully');
    });
});