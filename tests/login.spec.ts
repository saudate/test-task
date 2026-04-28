import { test, expect } from '../fixtures/test.fixture';

test(
  'User should successfully login and see Dashboard',
  { tag: '@login' },
  async ({ loginPage, userCredentials, baseURL }) => {
    await test.step('Navigate to login page', async () => {
      await loginPage.navigate(baseURL);
    });

    await test.step('Login with credentials from fixtures', async () => {
      await loginPage.login(userCredentials.email, userCredentials.password);
    });

    await test.step('Verify user is redirected to personal Dashboard', async () => {
      await expect(loginPage.dashboardTitle).toHaveText('Create dashboard sequence');
    });
  }
);
