import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.CUrl;

test.describe('Test Suite C', () => {
    test('Test Case C1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Edge.org');
        console.log('Test Case C1 executed successfully');
    });
});