import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://unosquare.sharepoint.com/sites/Intranet');  
  await page.getByRole('textbox', { name: 'Escriba su correo electrónico' }).fill('gerardo.miranda@unosquare.com');
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('textbox', { name: 'Escriba la contraseña para' }).click();
  await page.getByRole('textbox', { name: 'Escriba la contraseña para' }).fill('Kingdomorion87*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Sí' }).click();
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