import {test, expect} from '@playwright/test';

test.describe('Test Suite B', () => {
    test('Test Case B1', async ({ page }) => {
        await page.goto('https://www.bing.com');
        const title = await page.title();
        expect(title).toBe('Search - Microsoft Bing');
        console.log('Test Case B1 executed successfully');
    });
});