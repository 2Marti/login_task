import { test as setup, expect } from '@playwright/test';
require('dotenv').config(); 

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const username = process.env.USERNAME || ''; 
    const password = process.env.PASSWORD || ''; 

// Perform authentication steps. Replace these actions with your own.
  await page.goto("https://www.google.com/?hl=en")
    await page.getByRole('button', { name: 'Accept all' }).click()
    await page. getByLabel('Sign in').click()
    await page.getByLabel('Email or phone').fill(username)
    await page.locator('#identifierNext >> button').click()
    const newTodo = page.getByLabel('Enter your password')

    await newTodo.fill(password);
    await newTodo.press('Enter');
    await page.waitForURL("https://www.google.com/?hl=en")
    await expect(page.getByLabel('Sign in')).not.toBeVisible({ timeout: 1000 })

  await page.context().storageState({ path: authFile });
});