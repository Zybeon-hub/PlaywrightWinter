import { test, Locator, Page } from '@playwright/test'

export default class MaternityPage {

  readonly page: Page;
  private maternity: Locator;
  private starIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.maternity= page.getByRole('link', { name: 'Maternity ' }),
    this.starIcon = page.getByTitle('Remember this Date');
  }

  /**
   * @Test7 Verify File Upload for a Past Patient Record
   *
   * This method performs the interaction required to retrieve the tooltip text from the star icon.
   * It first waits for the page to fully load and clicks on the "maternity" section to ensure the relevant elements are visible.
   * Then it hovers over the star icon to trigger the tooltip and waits briefly to allow the tooltip to render.
   * Finally, it captures and returns the value of the 'title' attribute, which holds the tooltip text.
   */
  async getTooltipTextFromStar(): Promise<string | null> {
     await this.maternity.click();
    await this.starIcon.hover();

    // await expect(this.starIcon);

    // Retrieve and log the tooltip text
    const tooltipText = await this.starIcon.innerText();
    console.log('Tooltip Text:', tooltipText);

    return null;
  }
}
