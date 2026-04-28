import { test, expect } from '../fixtures/test.fixture';
import { generateProcessName } from '../utils/helpers';

test.beforeEach(async ({ loginPage, userCredentials, baseURL }) => {
  await loginPage.navigate(baseURL);
  await loginPage.login(userCredentials.email, userCredentials.password);
});

test(
  'User should successfully work with processes',
  { tag: '@processes' },
  async ({ processesPage, openProcessEditor }) => {
    const processName = generateProcessName();

    await test.step('Navigate to Processes page', async () => {
      await processesPage.goToProcesses();
    });

    const processEditor =
      await test.step('Click Create Process button and switch to new window', async () =>
        openProcessEditor(() => processesPage.clickCreateProcess()));

    await test.step('Fill process name', async () => {
      await processEditor.fillProcessName(processName);
    });

    await test.step('Click Actions button', async () => {
      await processEditor.clickActionsBtn();
    });

    await test.step('Drag Process Start element to canvas', async () => {
      await processEditor.dragProcessStart();
    });

    await test.step('Close sidebar', async () => {
      await processEditor.closeSidebar();
    });

    await test.step('Click Save button', async () => {
      await processEditor.clickSaveBtn();
    });

    await test.step('Verify process name is displayed', async () => {
      await expect(processEditor.processNameInput).toHaveValue(processName);
    });
  }
);
