import {test, expect} from '@playwright/test';

test.describe('Test Suite D', () => {
    test('@chromium Test Case D1', async ({ page }) => {
        await page.goto('https://www.duckduckgo.com');
        const title = await page.title();
        expect(title).toBe('DuckDuckGo - Protection. Privacy. Peace of mind.');
        console.log('Test Case D1 executed successfully');
    });
});