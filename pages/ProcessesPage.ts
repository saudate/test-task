import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProcessesPage extends BasePage {
  // Locators
  readonly processesNavBtn: Locator;
  readonly createProcessBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.processesNavBtn = this.page.getByTestId('mainNav-Prozess-Dashboard');
    this.createProcessBtn = this.page.getByTestId('processList-addProcess-click');
  }

  /**
   * Navigate to Processes page via sidebar
   */
  async goToProcesses() {
    await this.processesNavBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Click on Create Process button
   */
  async clickCreateProcess() {
    await this.createProcessBtn.click();
  }
}
