const { test, expect } = require('@playwright/test')
const { createNetworkGuard } = require('../../network-guard');

test('Info Test @docker', async ({ page, browser }) => {
    let networkGuard = createNetworkGuard(page);

    test.info().annotations.push({
        type: 'browser version',
        description: browser.version()
    });
    console.log('Browser Version: ' + browser.version())

    await page.goto('https://github.com/');
    await networkGuard.assertClean('GitHub page loaded with bad network responses');
    await expect(page).toHaveTitle(/GitHub/);
    console.log("Git Title Verified");

    await page.getByRole('link', { name: 'Sign in' }).click();
    await networkGuard.assertClean('GitHub page loaded with bad network responses');
    await expect(page).toHaveURL(/login/);
    console.log("Git Login Page verified");




});