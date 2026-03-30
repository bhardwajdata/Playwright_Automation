import { test, expect } from '@playwright/test'

test('Info Test', async ({ page, browser }) => {
    test.info().annotations.push({
        type: 'browser version',
        description: browser.version()
    });
    console.log('Browser Version: ' + browser.version())

    await page.goto('https://github.com/');
    await expect(page).toHaveTitle(/GitHub/);
    console.log("Git Title Verified");

    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/login/);
    console.log("Git Login Page verified");

});