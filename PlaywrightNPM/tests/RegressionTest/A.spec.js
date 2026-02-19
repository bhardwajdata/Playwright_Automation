import { test , expect} from '@playwright/test';
import { urls } from '../../pages/commonfunction/url.js';

const baseurl = urls.AUrl;

test.describe('Test Suite A', () => {

    test('Test Case A1', async ({ page }) => {
        await page.goto(baseurl);
        const title = await page.title();
        expect(title).toBe('Google');
        console.log('Test Case A1 executed successfully');

    });
});      