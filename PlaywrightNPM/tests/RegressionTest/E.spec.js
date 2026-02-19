import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.EUrl;

test.describe('Test Suite E', () => {
    test('Test Case E1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Wikipedia');
        console.log('Test Case E1 executed successfully');
    });
});