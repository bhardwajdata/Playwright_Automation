// @ts-check
import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 90000,
  fullyParallel: true,      // retry failed tests on CI
  // workers: 3, 
  workers: process.env.CI ? 3: 4,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
 
  use: {
    // baseURL: 'http://localhost:3000',
    // headless: isCI ? true : false,        // headless in CI, GUI locally
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',              
    screenshot: 'only-on-failure',        
    video: 'retain-on-failure',         
    ignoreHTTPSErrors: true,  
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'Test-Reports', open: 'never' }],
  ],

  /* Configure projects for major browsers */
  projects: [
    {
    name: 'chromium',
    use: { browserName: 'chromium' },
    grep: /@chromium/,
  },
  
  {
    name: 'firefox',
    use: { browserName: 'firefox' },
    grep: /@firefox/,
  },
  
  {
    name: 'webkit',
    use: { browserName: 'webkit' },
    grep: /@webkit/,
  },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

