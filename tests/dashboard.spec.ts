import { expect, test } from '../fixtures/test.fixture';
import { generateName } from '../utils/helpers';

test.beforeEach(async ({ loginPage, userCredentials, baseURL }) => {
  await loginPage.navigate(baseURL);
  await loginPage.login(userCredentials.email, userCredentials.password);
});

test(
  'User should successfully create a dashboard with a section',
  { tag: '@dashboard' },
  async ({ dashboardPage, openDashboardEditor }) => {
    const dashboardName = generateName();

    await test.step('Navigate to Dashboard list page', async () => {
      await dashboardPage.goToDashBoard();
    });

    const dashboardEditor =
      await test.step('Click Create Dashboard button and open editor in new window', async () =>
        openDashboardEditor(() => dashboardPage.clickCreateDashboard()));

    await test.step('Fill in dashboard name', async () => {
      await dashboardEditor.fillDashboardName(dashboardName);
    });

    await test.step('Click Add Section button to reveal layout options', async () => {
      await dashboardEditor.clickAddSection();
    });

    await test.step('Verify One Column and Two Columns layout options are visible', async () => {
      await dashboardEditor.oneColumnBtn.waitFor({ state: 'visible' });
      await dashboardEditor.twoColumnsBtn.waitFor({ state: 'visible' });
      await expect(dashboardEditor.oneColumnBtn).toHaveText('One column');
      await expect(dashboardEditor.twoColumnsBtn).toHaveText('Two columns');
    });
  }
);
