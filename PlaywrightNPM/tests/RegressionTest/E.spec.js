import {test, expect} from '@playwright/test';

test.describe('Test Suite E', () => {
    test('Test Case E1', async ({ page }) => {
        await page.goto('https://www.wikipedia.org');
        const title = await page.title();
        expect(title).toBe('Wikipedia');
        console.log('Test Case E1 executed successfully');
    });
});