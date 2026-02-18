import { test , expect} from '@playwright/test';

test.describe('Test Suite A', () => {

    test('Test Case A1', async ({ page }) => {
        await page.goto('https://www.google.com');
        const title = await page.title();
        expect(title).toBe('Google');
        console.log('Test Case A1 executed successfully');

    });
});      