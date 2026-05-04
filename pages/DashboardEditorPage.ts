import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardEditorPage extends BasePage {
  // Locators
  readonly dashboardNameInput: Locator;
  readonly addSectionBtn: Locator;
  readonly oneColumnBtn: Locator;
  readonly twoColumnsBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.dashboardNameInput = this.page.getByTestId('txt-dashboardName');
    this.addSectionBtn = this.page.getByTestId('ddesignerAddSection');
    this.oneColumnBtn = this.page.getByTestId('ddesignerAddSection_SingleColumn');
    this.twoColumnsBtn = this.page.getByTestId('ddesignerAddSection_DoubleColumn');
  }

  /**
   * Wait until the dashboard editor is fully loaded
   */
  async waitUntilReady() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.dashboardNameInput.waitFor({ state: 'visible' });
  }

  /**
   * Fill dashboard name input
   * @param name - Dashboard name to fill
   */
  async fillDashboardName(name: string) {
    await this.dashboardNameInput.fill(name);
  }

  /**
   * Click Add Section button to reveal layout options
   */
  async clickAddSection() {
    await this.addSectionBtn.click();
  }
}
