import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Login Page Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly stayLoggedInCheckbox: Locator;
  readonly forgotPasswordLink: Locator;
  // Dashboard Page Locators
  readonly dashboardTitle: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = this.page.locator('#Username');
    this.passwordInput = this.page.locator('#Password');
    this.loginBtn = this.page.getByTestId('login-submit');
    this.stayLoggedInCheckbox = this.page.locator('input#RememberLogin');
    this.forgotPasswordLink = this.page.getByTestId('login-forgot-password');
    this.dashboardTitle = this.page.getByTestId('UserDashboard_Title');
  }

  /**
   * Login to the application
   * @param email - User email address
   * @param password - User password
   * @param stayLoggedIn - Keep user logged in (default: false)
   */
  async login(email: string, password: string, stayLoggedIn: boolean = false) {
    await this.usernameInput.fill(email);
    await this.passwordInput.fill(password);

    if (stayLoggedIn) {
      await this.stayLoggedInCheckbox.check();
    }

    await this.loginBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
