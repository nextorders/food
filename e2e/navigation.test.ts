import { expect, test } from '@playwright/test'

test.describe('Navigation', () => {
  test('sidebar category link navigates to category page', async ({ page }) => {
    await page.goto('/')

    const categoryLink = page.locator('nav a[href^="/"]').first()
    const href = await categoryLink.getAttribute('href')

    await categoryLink.click()

    if (href) {
      await page.waitForURL(`**${href}`)
    }
    await expect(page.locator('h1')).toBeVisible()
  })

  test('category page has content', async ({ page }) => {
    await page.goto('/')

    const categoryLink = page.locator('nav a[href^="/"]').first()
    await categoryLink.click()

    // Category page should have heading and some content
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
  })

  test('product detail page has title and add button', async ({ page }) => {
    await page.goto('/')

    const productLink = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productLink.click()

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByRole('button', { name: /add to cart/i })).toBeVisible()
  })

  test('mobile menu opens and closes', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
    })
    const page = await context.newPage()
    await page.goto('/')

    // First button in header on mobile is the menu button
    const menuButton = page.locator('header button').first()
    await menuButton.click()

    // Wait for navigation content to appear
    const navOverlay = page.locator('nav').last()
    await expect(navOverlay).toBeVisible({ timeout: 3000 })

    // Close the menu via Escape key
    await page.keyboard.press('Escape')

    // Menu should be hidden
    await expect(navOverlay).not.toBeVisible()

    await context.close()
  })

  test('breadcrumb on product page', async ({ page }) => {
    await page.goto('/')

    const productLink = page.locator('main a').filter({ has: page.locator('img') }).first()
    await productLink.click()

    // Breadcrumbs should contain home link
    const homeLink = page.getByRole('link', { name: /home/i })
    await expect(homeLink).toBeVisible()
  })
})
