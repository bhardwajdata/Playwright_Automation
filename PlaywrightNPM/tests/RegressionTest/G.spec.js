import {test, expect} from '@playwright/test';

test.describe('Test Suite G', () => {
    test('@chromium Test Case G1', async ({ page }) => {
        await page.goto('https://webkit.org/');
        const title = await page.title();
        expect(title).toBe('WebKit');
        console.log('Test Case G1 executed successfully');
    });
});