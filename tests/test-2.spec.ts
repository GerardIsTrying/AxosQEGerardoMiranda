import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://unosquare.sharepoint.com/sites/Intranet');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('gerardo_miranda@unosquare.com');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).press('Enter');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('gerardo_miranda@unosquare.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
});