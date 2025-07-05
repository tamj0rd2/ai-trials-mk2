import { type Page, expect } from 'playwright/test'

export class AppInteractor {
  constructor(private page: Page) {}

  async givenThereAreNoTasks() {
    await this.page.goto('/')
    await this.page.evaluate(() => localStorage.clear())
    await this.page.reload()
  }

  async whenICreateATask(title: string) {
    await this.page.getByRole('textbox', { name: /task/i }).fill(title)
    await this.page.getByRole('button', { name: /add/i }).click()
  }

  async thenTheTaskExists(title: string) {
    const task = this.page.getByText(title)
    await expect(task).toBeVisible()
  }
}
