import {test, expect} from '@playwright/test';

test.describe('Test Suite H', () => {
    test('@chromium Test Case H1', async ({ page }) => {
        await page.goto('https://www.opera.com/');
        const title = await page.title();
        expect(title).toBe('Opera Web Browser | Faster, Safer, Smarter | Opera');
        console.log('Test Case H1 executed successfully');
    });
});