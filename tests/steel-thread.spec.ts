import { test, expect } from '@playwright/test';

// High-level steel thread scenario: create and display a new task

test.describe('Personal Task Management App', () => {
    test('can see a newly created task', async ({ page }) => {
        await givenThereAreNoTasks(page);
        await whenICreateATask(page, 'Buy groceries');
        await thenTheTaskExists(page, 'Buy groceries');
    });

    async function givenThereAreNoTasks(page) {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();
    }

    async function whenICreateATask(page, title) {
        await page.getByRole('textbox', { name: /task/i }).fill(title);
        await page.getByRole('button', { name: /add/i }).click();
    }

    async function thenTheTaskExists(page, title) {
        const task = page.getByText(title);
        await expect(task).toBeVisible();
    }
});
