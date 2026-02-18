import {test, expect} from '@playwright/test';

test.describe('Test Suite F', () => {
    test('Test Case F1', async ({ page }) => {
        await page.goto('https://www.chromium.org/chromium-projects/');
        const title = await page.title();
        expect(title).toBe('Home');
        console.log('Test Case F1 executed successfully');
    });
});
