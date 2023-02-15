import { test, expect } from '@playwright/test'

// test('should navigate to the all stories page', async ({ page }) => {
//     // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//     await page.goto('http://localhost:3000/')
//     // Find an element with the text 'About Page' and click on it
//     await page.click('text=Toutes les histoires de Nonax !')
//     // The new URL should be "/about" (baseURL is used there)
//     await expect(page).toHaveURL('http://localhost:3000/stories/all-stories')
//     // The new page should contain an h1 with "About Page"
//     await expect(page.locator('h1')).toContainText('Toutes Les Histoires de Nonax !')
// })

test('homepage has Les dernières histoires de Nonax !', async ({ page }) => {
    // Load playwright.dev in the browser
    await page.goto('http://localhost:3000/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Les Histoires de Nonax !/);

    // create a locator
    const getStarted = page.locator('text=Toutes Les Histoires de Nonax !');

    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/stories/all-stories');

    // Click the get started link.
    await getStarted.click();

    // Expects the URL to contain stories.
    await expect(page).toHaveURL(/stories/);
});