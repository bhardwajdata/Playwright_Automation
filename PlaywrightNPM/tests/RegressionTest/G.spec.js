import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.GUrl;

test.describe('Test Suite G', () => {
    test('Test Case G1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('WebKit');
        console.log('Test Case G1 executed successfully');
    });
});