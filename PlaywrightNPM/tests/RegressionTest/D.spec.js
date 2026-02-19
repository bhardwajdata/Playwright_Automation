import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.DUrl;

test.describe('Test Suite D', () => {
    test('Test Case D1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('DuckDuckGo - Protection. Privacy. Peace of mind.');
        console.log('Test Case D1 executed successfully');
    });
});