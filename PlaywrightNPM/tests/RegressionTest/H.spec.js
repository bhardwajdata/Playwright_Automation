import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.HUrl;

test.describe('Test Suite H', () => {
    test('Test Case H1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Opera Web Browser | Faster, Safer, Smarter | Opera');
        console.log('Test Case H1 executed successfully');
    });
});