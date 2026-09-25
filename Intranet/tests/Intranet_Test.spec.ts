import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://unosquare.sharepoint.com/sites/Intranet');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Intranet/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://unosquare.sharepoint.com/sites/Intranet');

  // Click the get started link.
  await page.getByRole('link', { name: 'About Me' }).click();

  // Expects page to have a heading with the name of About Me.
  await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});