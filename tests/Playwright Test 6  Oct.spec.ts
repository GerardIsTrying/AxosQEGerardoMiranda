import { test, expect } from '@playwright/test';
//Tarea de locators
test.describe('Tarea 6 De Octubre, Locators', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com');
  });

  test('Cargo la Pagina de Inicio', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
    
    const loginBox = page.locator('#login_button_container');
    await expect(loginBox).toBeVisible();
  });

test('¿Esta mostrando el username, password y boton de login para iniciar sesion?', async ({ page }) => {
  await expect(page.locator('[id="user-name"]')).toBeVisible();
  await expect(page.locator('[id="password"]')).toBeVisible();
  await expect(page.locator('[id="login-button"]')).toBeVisible();
});

});
