import {test, expect} from '@playwright/test';

test.describe('Test Suite C', () => {
    test('@chromium Test Case C1', async ({ page }) => {
        await page.goto('https://www.edge.org/');
        const title = await page.title();
        expect(title).toBe('Edge.org');
        console.log('Test Case C1 executed successfully');
    });
});