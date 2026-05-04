import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  // Locators
  readonly dashboardNavBtn: Locator;
  readonly createDashboardBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.dashboardNavBtn = this.page.getByTestId('mainNav-Dashboard-List');
    this.createDashboardBtn = this.page.getByTestId('dashboardList-addDashboards-click');
  }

  /**
   * Navigate to Dashboard page via sidebar
   */
  async goToDashBoard() {
    await this.dashboardNavBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page.getByRole('heading', { name: 'Manage dashboards' })).toBeVisible({ timeout: 5000 });
  }

  /**
   * Click Create Dashboard button to open the dashboard editor
   */
  async clickCreateDashboard() {
    await this.createDashboardBtn.click();
  }
}
