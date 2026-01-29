import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Titote/i);
  });

  test('should have main content', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});
