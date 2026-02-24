import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.GUrl;

test.describe('Test Suite G', () => {
    test('Test Case G1', async ({ page }) => {
        await page.goto(baseurl);
        await page.waitForLoadState('networkidle');
        const title = await page.title();
        expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
        console.log('Test Case G1 executed successfully');
    });
});