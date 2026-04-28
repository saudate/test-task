import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProcessEditorPage extends BasePage {
  // Locators
  readonly processNameInput: Locator;
  readonly actionsBtn: Locator;
  readonly processStartElement: Locator;
  readonly closeSidebarBtn: Locator;
  readonly saveBtn: Locator;
  readonly canvas: Locator;

  constructor(page: Page) {
    super(page);

    this.processNameInput = this.page.getByTestId('txt-processName');
    this.actionsBtn = this.page.getByTestId('pdActions-click');
    this.processStartElement = this.page.getByTestId('pd-actions-11');
    this.closeSidebarBtn = this.page.getByRole('button', { name: 'Close' });
    this.saveBtn = this.page.getByTestId('pdSave-click');
    this.canvas = this.page.getByTestId('pdEmpty-hint');
  }

  /**
   * Wait until editor page is ready
   */
  async waitUntilReady() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.processNameInput.waitFor({ state: 'visible' });
  }

  /**
   * Fill process name input
   * @param name - Process name to fill
   */
  async fillProcessName(name: string) {
    await this.processNameInput.fill(name);
  }

  /**
   * Click on Actions button in header menu
   */
  async clickActionsBtn() {
    await this.actionsBtn.click();
  }

  /**
   * Drag Process Start element to canvas
   */
  async dragProcessStart() {
    await this.processStartElement.dragTo(this.canvas);
  }

  /**
   * Close sidebar
   */
  async closeSidebar() {
    await this.closeSidebarBtn.click();
  }

  /**
   * Click Save button
   */
  async clickSaveBtn() {
    await this.saveBtn.click();
  }
}
