import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProcessesPage } from '../pages/ProcessesPage';
import { ProcessEditorPage } from '../pages/ProcessEditorPage';

type TestFixtures = {
  loginPage: LoginPage;
  processesPage: ProcessesPage;
  userCredentials: {
    email: string;
    password: string;
  };
  baseURL: string;
  openProcessEditor: (trigger: () => Promise<void>) => Promise<ProcessEditorPage>;
};

export const test = base.extend<TestFixtures>({
  // eslint-disable-next-line no-empty-pattern
  baseURL: async ({}, use) => {
    const url = process.env.BASE_URL || '';
    await use(url);
  },

  // eslint-disable-next-line no-empty-pattern
  userCredentials: async ({}, use) => {
    const credentials = {
      email: process.env.USER_EMAIL || '',
      password: process.env.USER_PASSWORD || '',
    };
    await use(credentials);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  processesPage: async ({ page }, use) => {
    const processesPage = new ProcessesPage(page);
    await use(processesPage);
  },

  openProcessEditor: async ({ context }, use) => {
    await use(async (trigger) => {
      const [popup] = await Promise.all([context.waitForEvent('page'), trigger()]);
      const editor = new ProcessEditorPage(popup);
      await editor.waitUntilReady();
      return editor;
    });
  },
});

export { expect } from '@playwright/test';
