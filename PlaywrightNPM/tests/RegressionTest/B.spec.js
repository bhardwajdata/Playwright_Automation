import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.BUrl;

test.describe('Test Suite B', () => {
    test('Test Case B1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Search - Microsoft Bing');
        console.log('Test Case B1 executed successfully');
    });
});