import { test, expect } from '@playwright/test';

const message = {
    subject: 'Subject',
    body: 'Hello world',
    emailAdress: 'rovnanikovamartina29@gmail.com'
  };

test('Sending email', async ({ page }) => {
    //go to google inbox
    await page.goto("https://mail.google.com/mail/u/0/#inbox")
    //verify user is signed-in
    await expect(page.getByLabel('Sign in')).not.toBeVisible({ timeout: 1000 })
    //verify url is correct
    await expect(page).toHaveURL(/inbox/)
    //get the initial row count
    const initialRowCount = await page.locator('.UI tr').count()
    //click on the button to write email
    await page.getByRole('button', { name: 'Compose' }).click()
    //verify message'modal is visible
    await expect(page.getByLabel('New Message', { exact: true })).toBeVisible()
    //fill email address
    await page.getByLabel('To recipients').fill(message.emailAdress)
    //fill subject
    await page.getByPlaceholder('Subject').fill(message.subject)
    //fill message
    await page.getByRole('textbox', { name: 'Message Body' }).fill(message.body)
    //send the email
    const sendButton = await page.waitForSelector('div[role="button"][aria-label*="Send"]')
    await sendButton.click();
    //verify message'modal is not visible
    await page.waitForTimeout(1000); 
    await expect(page.getByLabel('New Message', { exact: true })).not.toBeVisible()
    //updated row count
    const updatedRowCount = await page.locator('.UI tr').count()
    // verify that the updated count is greater than the initial count
    expect(updatedRowCount).toBeGreaterThan(initialRowCount) 
    //sign out 
    await page.getByLabel('Google Account:').click()
    await page.frameLocator('iframe[name="account"]').getByRole('link', { name: 'Sign out' }).click()
    //check user is signed out
    await expect(page.getByRole('heading', { name: 'Choose an account' }).locator('span')).toBeVisible()
    await expect(page).toHaveURL(/accounts/)
})


