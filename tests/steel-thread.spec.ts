import { test } from '@playwright/test'
import { AppInteractor } from './app-interactor'

test.describe('Personal Task Management App', () => {
  test('can see a newly created task', async ({ page }) => {
    const app = new AppInteractor(page)
    await app.givenThereAreNoTasks()
    await app.whenICreateATask('Buy groceries')
    await app.thenTheTaskExists('Buy groceries')
  })
})
