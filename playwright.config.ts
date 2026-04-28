import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [['html',{open: 'never'}], ['allure-playwright', { outputFolder: 'allure-results' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://linqi.wecantest.it',
    trace: process.env.CI ? 'on-first-retry': 'on',
    screenshot: process.env.CI ? 'only-on-failure': 'on',
    video: process.env.CI ? 'retain-on-failure': 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
