import {test, expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.FUrl;

test.describe('Test Suite F', () => {
    test('Test Case F1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Home');
        console.log('Test Case F1 executed successfully');
    });
});
